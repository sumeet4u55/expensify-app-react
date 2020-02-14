import selectExpenses from '../../selectors/expenses';

const expenses = [
    {
        id: '1',
        description: 'Rent',
        amount: 1200,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Coffee',
        amount: 150,
        createdAt: -1000
    },
    {
        id: '3',
        description: 'Dilli',
        amount: 1095,
        createdAt: 1000
    }
];

test('Shhould filter by text value', () => {
    const result = selectExpenses(expenses, {text: 'Rent'});
    expect(result).toEqual([{
        id: '1',
        description: 'Rent',
        amount: 1200,
        createdAt: 0
    }]);
});

test('Should filter by sortBy amount value', () => {
    const result = selectExpenses(expenses, {sortBy: 'amount'});
    expect(result).toEqual([{
        id: '1',
        description: 'Rent',
        amount: 1200,
        createdAt: 0
    },
    {
        id: '3',
        description: 'Dilli',
        amount: 1095,
        createdAt: 1000
    },
    {
        id: '2',
        description: 'Coffee',
        amount: 150,
        createdAt: -1000
    }]);
});