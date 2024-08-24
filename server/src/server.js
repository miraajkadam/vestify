"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var app = (0, express_1.default)();
var server = (0, http_1.createServer)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('server is listing on port 3000');
});
