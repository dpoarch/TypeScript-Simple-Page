"use strict";
var Route;
(function (Route) {
    class Service {
        service(req, res, next) {
            res.render("service");
        }
    }
    Route.Service = Service;
})(Route || (Route = {}));
module.exports = Route;
