import React from 'react';
import {connect} from 'react-redux'
import {editExpense, removeExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseFormPage';

const EditExpensePage = (props) => {
    console.log(props)
    let expense = props.expenses && props.expenses.find((val) => props.match.params.id == val.id);
    return (
        <div>
            <ExpenseForm 
                expense={expense}
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={(e) => {
                e.preventDefault();
                let id = props.match.params.id;
                props.dispatch(removeExpense({id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage);