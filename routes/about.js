"use strict";
var Route;
(function (Route) {
    class About {
        about(req, res, next) {
            res.render("about");
        }
    }
    Route.About = About;
})(Route || (Route = {}));
module.exports = Route;
