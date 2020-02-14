import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';

const store = configStore();

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 1001 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 1095, createdAt: 1000 }));

console.log(store.getState());

store.dispatch(setTextFilter('Water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

setTimeout(()=>{
    store.dispatch(setTextFilter('gas'));
}, 2000)

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('app'));
