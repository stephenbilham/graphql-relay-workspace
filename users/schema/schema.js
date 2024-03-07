import graphql from "graphql";

const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } = graphql;

const UserType = new GraphQLObjectType({
	name: "User",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
	},
});

// entry point
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				// return _.find(users, { id: args.id });
			},
		},
	},
});

export default new GraphQLSchema({
	query: RootQuery,
});
å;
