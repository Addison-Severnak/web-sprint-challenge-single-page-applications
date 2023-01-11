import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';

import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <>
      <h1>The Pizza Pizza Shop</h1>
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </div>
      </nav>

      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/pizza'>
        <PizzaForm />
      </Route>
    </>
  );
};

export default App;
