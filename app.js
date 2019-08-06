"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const serviceRoute = require("./routes/service");
const contactRoute = require("./routes/contact");

class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jade");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router;
        router = express.Router();
        var index = new indexRoute.Index();
        var about = new aboutRoute.About();
        var service = new serviceRoute.Service();
        var contact = new contactRoute.Contact();

        router.get("/", index.index.bind(index.index));
        router.get("/about", about.about.bind(about.about));
        router.get("/service", service.service.bind(service.service));
        router.get("/contact", contact.contact.bind(contact.contact));

        this.app.use(router);
    }
}
var server = Server.bootstrap();
module.exports = server.app;
