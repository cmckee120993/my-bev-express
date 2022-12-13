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
				const user = await User.findById(context.user._id).populate({
					path: 'orders.products'
				});
				return user.orders.id(_id);
		}
		throw new AuthenticationError('Not logged in.')
	}, 

	users: async () => {
		return await User.find()
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
		
		addOrder: async (parent, {orderOwner, orderDelivDate, products}, context) => {
			if(context.user) {
			const order = new Order({ products });
			await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
			return order;
			}

		throw new AuthenticationError('Not logged in');
		},

		addToOrder: async (parent, {orderId, name, price, quantity}, context) => {
			if(context.user) {
				return Order.findOneAndUpdate(
					{ _id: orderId },
					{
						$addToSet: {name,
									price,
									quantity,
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
