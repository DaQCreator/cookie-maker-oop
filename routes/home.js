const express = require('express');
const { getCookiesSettings } = require("../../cookie-maker/utils/get-cookies-settings");

class HomeRouter {
  constructor(cmapp) {
    this.cmapp = cmapp;
    this.router = express.Router();
    this.setUpRoutes();
  }
  setUpRoutes() {
    this.router.get('/', this.home);
  }
  home = (req, res) => {
    const {sum, addons, base, allBases, allAddons} = getCookiesSettings(req);

    res.render('home/index', {
      cookie: {
        base,
        addons,
      },
      allBases,
      allAddons,
      sum,
    });
  };
};

const home = new HomeRouter();


module.exports = {
  HomeRouter,
};
