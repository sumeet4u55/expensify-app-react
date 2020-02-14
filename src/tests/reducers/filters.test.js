import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('setup default values' ,() => {
    const result = filterReducer(undefined, {type: '@@INIT' });
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sortbby amount' ,() => {
    const result = filterReducer(undefined, {type: 'SORT_BY_AMOUNT' });
    expect(result.sortBy).toEqual('amount')
});