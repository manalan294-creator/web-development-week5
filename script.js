let monthlyBudget = 0;
let expenses = [];

const budgetDisplay = document.getElementById("budgetDisplay");
const expensesDisplay = document.getElementById("expensesDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const expenseList = document.getElementById("expenseList");
const budgetInput = document.getElementById("budgetInput");
const budgetForm = document.getElementById("budgetForm");

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function calculateTotalExpenses(expenseListData) {
  return expenseListData.reduce((sum, item) => sum + item.amount, 0);
}

function calculateRemainingBalance(budget, expenseListData) {
  const totalExpenses = calculateTotalExpenses(expenseListData);
  return budget - totalExpenses;
}

function setBudget(amount) {
  const parsedAmount = Number(amount);

  if (Number.isNaN(parsedAmount) || parsedAmount < 0) {
    alert("Please enter a valid budget value.");
    return;
  }

  monthlyBudget = parsedAmount;
  budgetInput.value = parsedAmount;
  renderSummary();
}

function addExpense(category, value) {
  const parsedValue = Number(value);

  if (!category || Number.isNaN(parsedValue) || parsedValue < 0) {
    alert("Please provide a valid expense category and amount.");
    return;
  }

  expenses.push({ category, amount: parsedValue });
  renderExpenseList();
  renderSummary();
}

function renderExpenseList() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    expenseList.innerHTML = '<li class="empty-state">No expenses added yet.</li>';
    return;
  }

  expenses.forEach((expense) => {
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
      <span class="category">${expense.category}</span>
      <span class="amount">${formatCurrency(expense.amount)}</span>
    `;
    expenseList.appendChild(expenseItem);
  });
}

function renderSummary() {
  const totalExpenses = calculateTotalExpenses(expenses);
  const remainingBalance = calculateRemainingBalance(monthlyBudget, expenses);

  budgetDisplay.textContent = formatCurrency(monthlyBudget);
  expensesDisplay.textContent = formatCurrency(totalExpenses);
  balanceDisplay.textContent = formatCurrency(remainingBalance);

  console.log("SpendWise Summary");
  console.log("Monthly budget:", formatCurrency(monthlyBudget));
  console.log("Total expenses:", formatCurrency(totalExpenses));
  console.log("Remaining balance:", formatCurrency(remainingBalance));
}

function promptBudget() {
  const userBudget = window.prompt("Enter your monthly budget:");
  setBudget(userBudget);
}

function promptForExpense() {
  const category = window.prompt("Enter expense category (e.g. Rent, Groceries, Transport):");
  const amount = window.prompt("Enter expense amount:");
  addExpense(category, amount);
}

function resetPlanner() {
  monthlyBudget = 0;
  expenses = [];
  budgetInput.value = "";
  renderExpenseList();
  renderSummary();
}

budgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userBudget = budgetInput.value;
  setBudget(userBudget);
});

document.getElementById("promptBudgetBtn").addEventListener("click", promptBudget);
document.getElementById("addExpenseBtn").addEventListener("click", promptForExpense);
document.getElementById("resetBtn").addEventListener("click", resetPlanner);

setBudget(2500);
addExpense("Rent", 950);
addExpense("Groceries", 320);
addExpense("Transport", 90);

console.log("SpendWise has loaded successfully.");
