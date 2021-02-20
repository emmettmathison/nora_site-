var path = require("path");

module.exports = function (app) {
  app.get("/bio", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/bio.html"));
  });
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/contact.html"));
  });
  app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/portfolio.html"));
  });
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
};
