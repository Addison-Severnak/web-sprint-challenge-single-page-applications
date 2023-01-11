import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from "axios";

import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ''
}

const initialFormErrors = {
  name: ''
}

const initialOrders = []

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ res.data, ...orders ])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder);
  }

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
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}  
        />
      </Route>
    </>
  );
};

export default App;
