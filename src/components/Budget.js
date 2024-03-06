import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);

    const { budget, expenses, currency } = useContext(AppContext);
    const handleBudget = (event) => {
        const newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, i) => {
            return (total += i.cost);
        }, 0);

        if (newBudget > 20000) {
            alert("The value cannot exceed funds  £ 20,000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert("The value cannot be less than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" step="10" value={budget} onChange={handleBudget}></input>
            </span>
        </div>
    );
};
export default Budget;
