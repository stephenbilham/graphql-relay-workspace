const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const app = express();
const port = 4000;

app.use(
	"/graphql",
	expressGraphQL({
		graphiql: true,
		schema,
	})
);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
