import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up removeexpense', () => {
    const result = removeExpense({id: '1234abc'});
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234abc'
    });
});

test('should set up editExpense', () => {
    const result = editExpense('1234abc', {description: 'test Obj', amount: 30});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234abc',
        updates: {description: 'test Obj', amount: 30}
    });
});

test('should set up addExpense with data', () => {
    const data = {
        description: 'Rent',
        amount: 200,
        note: 'none',
        createdAt: 1000
    };
    const result = addExpense(data);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    });
});

test('should set up addExpense with no data', () => {
    const data = {
        amount: 0,
        createdAt: 0,
        description: '',
        note: ''
    };
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    });
});