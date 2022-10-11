const redux = require("redux");

const initialState = {
  contador: 0,
};

function contador(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTO":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "DECREMENTO":
      return {
        ...state,
        contador: state.contador - 1,
      };
  }
}
const store = redux.createStore(contador);

const incremento = {
  type: "INCREMENTO",
};

const decremento = {
  type: "DECREMENTO",
};

store.dispatch(incremento);

console.log(store.getState());
