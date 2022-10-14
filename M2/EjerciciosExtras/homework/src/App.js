import React from "react";
import { Route } from "react-router-dom";
import Buscador from "../src/components/Buscador/Buscador";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <React.Fragment>
      <Route path={"/filter/posts"}></Route>

      <Route path={"/"} component={Buscador} />

      <Route path={"/users/:id/posts"}></Route>
      <Route path={"/user/:userid/post/:id/coments"}></Route>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
