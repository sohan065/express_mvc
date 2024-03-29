// dependencies
require("dotenv").config();
const app = require("./app");

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
