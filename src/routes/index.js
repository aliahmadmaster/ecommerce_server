const routeStatic = require("./routes/static.route");
const routeAuth = require("./routes/auth.route");
const routeUser = require("./routes/user.route");
const router = require("express").Router();

router.use("/static", routeStatic);
router.use("/auth", routeAuth);
router.use("/user", routeUser);

module.exports = router;
