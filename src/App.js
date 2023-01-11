import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';

import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

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
        <PizzaForm
          values={formValues}   
        />
      </Route>
    </>
  );
};

export default App;
