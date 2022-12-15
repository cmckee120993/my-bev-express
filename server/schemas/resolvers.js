const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Product } = require('../models');
const { signToken } = require('../utils/auth');
const stripe =require('stripe')('pk_test_51MEq6CFWXFK5U75ZexkNlDZ7FbeNBjUQutlMmE5qu4Nv61d5lMsh2OR441vtErI3a1UDxgbocc9KWU4tWgE91nH500DGaFrWuq');

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

		checkout: async (parent, args, context) => {
			const url = new URL(context.headers.referer).origin;
			const order = new Order({ products: args.products });
			const line_items =[];
			const { products } = await order.populate('products');
				for (let i=0; i < products.length; i++) {
					const product = await stripe.products.create({
						name: products[i].name
					});
					const price = await stripe.prices.create({
						product: product.id,
						unit_amount: products[i].prices * 100,
						currency: 'usd',
					})

					line_items.push({
						price: price.id,
						quantity: 1
					});
				}
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items,
				mode: 'payment',
				success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
				cancl_url: `${url}/`
			});

		return { session: session.id };
		}
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
		
		addOrder: async (parent, args, context) => {
			if(context.user) {
			const order = await Order.create(args);
			const test = await User.findByIdAndUpdate(context.user._id, { $push: { orders: order._id } }, {new: true});
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