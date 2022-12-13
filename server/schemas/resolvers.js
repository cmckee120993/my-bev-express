const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Product } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		orders: async () => {
			return Order.find({});
		},

		order: async (parent, { _id }, context) => {
			if (context.user) {
				return await Order.findById(_id).populate('products');
		}
		throw new AuthenticationError('Not logged in.')
	}, 

	users: async () => {
		return await User.find().populate('orders')
	},
	
	products: async (parent, args) => {
		return Product.find()
	},
	
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			
			return { token, user };
		},

		updateUser: async (parent, args, context) => {
			if (context.user) {
				return await User.findByIdAndUpdate(context.user._id, args, {new: true});
			}

			throw new AuthenticationError('Not logged in');
		},
		
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect information');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect information');
			}

			const token = signToken(user);

			return { token, user };
		},

		addProduct: async (parent, args, context) => {
			if(context.user) {
				return Product.create(args);
			}
			throw new AuthenticationError('Not logged in');
		},
		
		addOrder: async (parent, args, context) => {
			if(context.user) {
			const order = await Order.create(args);
			console.log(order);
			console.log(context.user);
			const test = await User.findByIdAndUpdate(context.user._id, { $push: { orders: order._id } }, {new: true});
			console.log(test);
			return order;
			}

		throw new AuthenticationError('Not logged in');
		},

		addToOrder: async (parent, {orderId, name, price, quantity}, context) => {
			if(context.user) {
				return Order.findOneAndUpdate(
					{ _id: orderId },
					{
						$push: { products: 
								{	name,
									price,
									quantity,
								}
							}
					},
					{
						new: true,
						runValidators: true,
					}
				)
			};

			throw new AuthenticationError('Not logged in');
		},

		removeFromOrder: async (parent,{ orderId, productId }, context) => {
			if(context.user) {
				return Order.findOneAndUpdate(
					{ _id: orderId},
					{$pull: { products: { _id: productId } } },
					{ new: true }
				);
			};

			throw new AuthenticationError('Not logged in');
		},
	},
};

module.exports = resolvers;
