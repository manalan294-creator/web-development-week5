# SpendWise

SpendWise is a simple budgeting web app that helps a user track their monthly budget, add expenses, and see how much money remains after spending. The app uses JavaScript to store values, calculate totals, and update the page in real time.

## What the project does

The project allows a user to:
- enter a monthly budget,
- add daily or monthly expenses,
- calculate the total spending,
- view the remaining balance,
- review the results in the browser console.

## JavaScript concepts implemented

This project applies the main JavaScript ideas covered in the course:

1. Variables
   - `monthlyBudget` stores the total monthly budget.
   - `expenses` stores the list of expense objects.
   - `budgetDisplay`, `expensesDisplay`, and `balanceDisplay` store the HTML elements that show the results.

2. Data types
   - Numbers are used for budget amounts and expenses.
   - Strings are used for category names such as "Rent" and "Groceries".
   - Arrays and objects are used to store multiple expenses and their values.

3. User input
   - The app uses `window.prompt()` to collect values from the user.
   - Users can also type directly into an input field and submit it with the form.

4. Calculations
   - `calculateTotalExpenses()` adds up all expense amounts.
   - `calculateRemainingBalance()` subtracts the total expenses from the monthly budget.
   - Results are formatted using `Intl.NumberFormat` to display values as currency.

5. Functions
   - `formatCurrency()` formats money values.
   - `setBudget()` stores the budget in a variable and updates the page.
   - `addExpense()` adds an item to the expense list.
   - `calculateTotalExpenses()` and `calculateRemainingBalance()` organize the budgeting logic into reusable functions.
   - `renderSummary()` and `renderExpenseList()` update the user interface.

## How the code is organized

- `index.html` contains the structure of the page.
- `style.css` styles the layout and makes the app easy to read.
- `script.js` contains the JavaScript logic for budget data and calculations.

## How to run the project

1. Open the project folder in a browser.
2. Open `index.html` directly in the browser, or run a local web server.
3. Click the budget buttons to enter your values and view the remaining balance.

## Example calculation

For example:
- Monthly budget: $2500
- Rent: $950
- Groceries: $320
- Transport: $90

Total expenses = $1360
Remaining balance = $2500 - $1360 = $1140

This is exactly the kind of budgeting logic that the JavaScript functions in the app perform.
