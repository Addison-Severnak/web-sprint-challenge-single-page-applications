import React from 'react';

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        errors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className='pizza-form-wrapper'>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='form-submit'>
                    <h2>Build Your Own Pizza</h2>

                    <div className='errors'>
                        <div>{errors.name}</div>
                    </div>
                </div>

                <div className='pizza-form-inputs'>
                    <h4>Build Your Own Pizza</h4>

                    <label>Name
                        <input id='name-input'
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>

                    <label>Choice of Size
                        <select id='size-dropdown'
                            onChange={onChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>- Select a Pizza Size -</option>
                        </select>
                    </label>
                </div>

                <div className='form-toppings'>
                    <h4>Add Toppings</h4>

                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='topping1'
                            checked={values.topping1}
                            onChange={onChange}
                        />
                    </label>

                    <label>Jalapenos
                        <input
                            type='checkbox'
                            name='topping2'
                            checked={values.topping2}
                            onChange={onChange}
                        />
                    </label>

                    <label>Black Olives
                        <input
                            type='checkbox'
                            name='topping3'
                            checked={values.topping3}
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type='checkbox'
                            name='topping4'
                            checked={values.topping4}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-special'>

                <label>Special Instructions
                        <input id='special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}