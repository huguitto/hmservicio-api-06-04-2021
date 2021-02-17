const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 10 * 1000, // 15 segundos
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests.",
});

module.exports = limiter;
