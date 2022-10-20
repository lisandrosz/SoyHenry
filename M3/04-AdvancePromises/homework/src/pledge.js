"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

const executor = function (resolve, reject) {};

const $Promise = function (executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor is not a function");
  }

  this._state = "pending";
  this._value;
  this._internalResolve = (data) => {
    if (this._state === "pending") {
      this._value = data;
      this._state = "fulfilled";
    }
  };
  this._internalReject = (data) => {
    if (this._state === "pending") {
      this._value = data;
      this._state = "rejected";
    }
  };
  executor(this._internalResolve, this._internalReject);
};

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
