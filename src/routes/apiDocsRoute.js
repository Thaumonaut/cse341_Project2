const express = require("express");
const router = express.Router();

const swaggerUi = require("swagger-ui-express");
const docs = require("../middleware/swagger_output.json");

router.use("/docs", swaggerUi.serve /** #swagger.ignore = true */);
router.get("/docs", swaggerUi.setup(docs) /** #swagger.ignore = true */)

module.exports = router