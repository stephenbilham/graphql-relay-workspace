const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();
const port = 4000;

app.use(
	"/graphql",
	expressGraphQL({
		graphiql: true,
		schema: { name: "stev" },
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
