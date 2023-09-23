const { Router } = require("express");

const router = Router();

router.get("/healthcheck", (req, res) => {
  return res.json({ message: "Ok" });
});

module.exports = {
  router,
};
