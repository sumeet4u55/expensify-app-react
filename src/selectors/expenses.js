import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const endAtMoment = moment(expense.endDate);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endAtMoment.isSameOrAfter(endAtMoment, 'day') : true;
      const textMatch = text ? expense.description.toLowerCase().includes(text.toLowerCase()): true;
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };

  export default getVisibleExpenses;