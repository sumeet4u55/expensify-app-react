import expensesReducer from '../../reducers/expenses';

test('shhhould test for default', () => {
    const result = expensesReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual([]);
});

