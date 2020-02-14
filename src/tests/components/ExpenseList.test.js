import React from 'react';
import {shallow} from 'enzyme';
import { expenseList as ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('shhould render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})

