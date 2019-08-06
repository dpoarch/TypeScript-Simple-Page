"use strict";
var Route;
(function (Route) {
    class Contact {
        contact(req, res, next) {
            res.render("contact");
        }
    }
    Route.Contact = Contact;
})(Route || (Route = {}));
module.exports = Route;
