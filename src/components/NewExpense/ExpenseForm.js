import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("") // we always get a string in event.target.value, so the default is a ''
  const [enteredDate, setEnteredDate] = useState("") // we always get a string in event.target.value, so the default is a ''

  const titleChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredTitle(event.target.value)
  }

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  // const inputChangeHandler = (identifier, value) => {
  //     if (identifier === 'title') {
  //         setEnteredTitle(value);
  //     } else if (identifier === 'date') {
  //         setEnteredDate(value);
  //     } else {
  //         setEnteredAmount(value);
  //     }
  // }

  const submitHandler = (event) => {
    event.preventDefault() // this is inbuilt into JS, prevents browser from refreshing

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData) // the value which we get will be a function
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }

  const cancelExpenseHandler = () => {
    props.onCancelExpense()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            step='2022-12-31'
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit' onClick={cancelExpenseHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
