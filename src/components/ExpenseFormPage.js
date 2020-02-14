import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


class ExpenseForm extends React.Component {
    
    constructor(props){
        super(props);
        if(props.expense){
            const {description, note, amount, createdAt} = props.expense;
            this.state = {
                description,
                note: note || '',
                amount,
                createdAt: moment(createdAt),
                calendarFocused: false,
                errorState: false
            }
        } else {
            this.state = {
                description: '',
                note: '',
                amount: '',
                createdAt: moment(),
                calendarFocused: false,
                errorState: false
            }
        }
        
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({
            note: note
        })
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({
            description: description
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({
                amount
            })
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => {
                return {
                    createdAt
                }
            });
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => {
                return {
                    errorState: true
                }
            })
        } else {
            console.log('Submitted!');
            this.setState(() => {
                return {
                    errorState: false,
                }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat( this.state.amount, 10 ) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    { this.state.errorState && <p style={{color: 'red'}}>Please provide description and amount</p>}
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                     <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add notes for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
export default ExpenseForm;