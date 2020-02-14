import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('should set up setEndDate', () => {
    const endDate = 1000;
    const result = setEndDate(endDate);
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate
      });
});

test('should set up setEndDate', () => {
    const startDate = 1000;
    const result = setStartDate(startDate);
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate
      });
});

test('should set up setTextFilter', () => {
    const text = 'Coffee';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
      });
});

test('should set up sortByAmount', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set up sortByDate', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    });
});