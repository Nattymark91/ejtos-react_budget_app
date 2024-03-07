import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {

    const { dispatch, currency } = useContext(AppContext);

    const handleCurrency = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (

        
        <div class="form-group">
    
    <select
                className="form-control"
                value={currency}
                onChange={handleCurrency}
                style={{ backgroundColor: '#90EE90' , color: 'white' }}
            >
                
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
  </div>

    );
}

export default Currency;