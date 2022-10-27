const cds = require("@sap/cds");
const { auth, requiresAuth } = require("express-openid-connect");
const express = require('express');
const config = require('./config/config');
const jsonwebtoken = require('jsonwebtoken');
module.exports = cds.server;

const settings = {
  authRequired: false, // deactivate auth for all routes
  auth0Logout: true, // logout from IdP
  authorizationParams: { // required to retrieve JWT including permissions (our roles) 
    response_type: "code",
    scope: "openid",
    audience: "https://cap-auth0-SAPcertif-api.com",
  },
};

cds.on("bootstrap", (app) => {
  // initialize openid-connect with auth0 configuration
  app.use(auth(settings));
//  app.use('/', requiresAuth());
  app.get('/profile', requiresAuth(), (req, res) => {
    const jwtDecoded = jsonwebtoken.decode(req.oidc.accessToken.access_token);
    res.send(JSON.stringify({ ...req.oidc.user, ...jwtDecoded.permissions }));
    });
});

module.exports = cds.server;