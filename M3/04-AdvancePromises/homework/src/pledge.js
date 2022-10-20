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

    if (this._handlerGroups.length > 0) {
      for (let i = 1; i <= this._handlerGroups.length; i++) {
        this._callHandlers(i);
      }
    }
  };
  this._internalReject = (data) => {
    if (this._state === "pending") {
      this._value = data;
      this._state = "rejected";
    }
    if (this._handlerGroups.length > 0) {
      for (let i = 1; i <= this._handlerGroups.length; i++) {
        this._callHandlers(i);
      }
    }
  };
  this._handlerGroups = [];
  this._callHandlers = (num) => {
    this._state === "fulfilled"
      ? this._handlerGroups[num - 1].successCb(this._value)
      : null;

    if (this._state === "rejected") {
      if (typeof this._handlerGroups[num - 1].errorCb === "function") {
        this._handlerGroups[num - 1].errorCb(this._value);
      }
    }
  };

  this.then = (cb1, cb2) => {
    this._handlerGroups.push({
      successCb: typeof cb1 === "function" ? cb1 : false,
      errorCb: typeof cb2 === "function" ? cb2 : false,
    });
    this._callHandlers(this._handlerGroups.length);
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
