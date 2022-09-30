var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let nueva = function (matchFunc, startEl) {
    if (matchFunc(startEl)) {
      resultSet.push(startEl);
    }
    const hijos = startEl.children;
    for (let i = 0; i < hijos.length; i++) {
      if (hijos[i].hasChildNodes()) {
        nueva(matchFunc, hijos[i]);
      } else {
        if (matchFunc(hijos[i])) {
          resultSet.push([hijos[i]]);
        }
      }
    }
    return resultSet;
  };
  nueva(matchFunc, startEl);

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let firstCharacter = selector[0];
  if (firstCharacter === "#") return "id";
  if (firstCharacter === ".") return "class";
  else {
    for (let i = 0; i < selector.length; i++) {
      if (selector[i] === ".") return "tag.class";
    }
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (elemento) {
      if ("#" + elemento.id.toLowerCase() === selector.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    };
  } else if (selectorType === "class") {
    matchFunction = function (elemento) {
      if (elemento.classList.length > 1) {
        const array = elemento.classList.values();
        for (const value of array) {
          if ("." + value === selector) return true;
        }
        return false;
      } else {
        if ("." + elemento.className === selector) {
          return true;
        } else {
          return false;
        }
      }
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento) {
      const arrSelector = selector.split(".");
      if (arrSelector[0] === elemento.tagName.toLowerCase()) {
        const array = elemento.classList.values();
        for (const value of array) {
          if (value === arrSelector[1]) return true;
        }
        return false;
      } else {
        return false;
      }
    };
  } else if (selectorType === "tag") {
    matchFunction = function (elemento) {
      if (elemento.tagName.toLowerCase() === selector) {
        return true;
      } else {
        return false;
      }
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
