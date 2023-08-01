import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
  const [filteredYear, setFilter] = useState("2020")

  let filteredInfoText = "2019, 2021 & 2022"

  if (filteredYear === "2019") {
    filteredInfoText = "2020, 2021 & 2022"
  } else if (filteredYear === "2021") {
    filteredInfoText = "2019, 2020 & 2022"
  } else if (filteredYear === "2022") {
    filteredInfoText = "2019, 2020 & 2021"
  } else {
    filteredInfoText = "2019, 2021 & 2022"
  }

  const filterExpensesHandler = (selectedYear) => {
    setFilter(selectedYear)
    props.onFilterExpenses(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    // filter returns a new array
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenses={filterExpensesHandler}
        />
        {/* <p>Data for years {filteredInfoText} is hidden.</p> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
