const express = require('express');
const router = express.Router();
const bcrypt = require("bcriptjs");
const jwt = require('jsonwebtoken');
const {check, validationResult} = require("express-validator");


