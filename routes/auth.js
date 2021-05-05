"use strict";

/** Routes for authentication. */
const {UnauthorizedError} = require('../expressError');
const jsonschema = require("jsonschema");
const users = require('../init_data.json').data;
const express = require("express");
const router = express.Router();
const { createToken } = require("../helpers/tokens");
const userAuthSchema = require("../schemas/userAuth.json");
const bcrypt = require("bcrypt");
const BCRYPT_WORK_FACTOR = 12;

/** POST /auth/token:  { id, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new UnauthorizedError(errs);
    }
    const { id, password } = req.body;

    if (users[id]) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, users[id].hashed_password);
      if (isValid) {
    const token = createToken(users[id]);
    return res.json({ token });}
  } 
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
