import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const expenseList = (props) => (
    <div>
        <h1>Rendering List</h1>
        {props.expenses.map(val => <ExpenseListItem {...val} />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(expenseList);

export default ConnectedExpenseList;