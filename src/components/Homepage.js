import React from 'react';

import { useHistory } from 'react-router-dom';

export default function Homepage() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            <button
                onClick={routeToPizza}
                id='order-pizza'
            >
                Order Now!
            </button>
        </div>
    )
}