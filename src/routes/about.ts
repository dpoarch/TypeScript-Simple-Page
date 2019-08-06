/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

module Route {

  export class About {

    public about(req: express.Request, res: express.Response, next: express.NextFunction) {
      //render page
      res.render("about");
    }
  }
}

export = Route;