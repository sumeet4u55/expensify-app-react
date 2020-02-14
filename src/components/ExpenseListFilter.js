import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null,
    }
    
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (val) => {
        this.setState(() => {
            return {
                calendarFocused: val
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text"  value={this.props.filters.text} onChange={(e) => {
                    console.log(e.target.value);
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
        
                    e.target.value == 'date' ? this.props.dispatch(sortByDate()): this.props.dispatch(sortByAmount(sortByAmount()));
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}
const mapStateProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateProps)(ExpenseListFilter);