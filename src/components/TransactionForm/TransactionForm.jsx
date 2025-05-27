import React from "react";

const TransactionForm = () => {
  return (
    <div>
      <form>
        <input name="Description" type="text" />
        <input name="Amount" type="number" step="0.01" />
        <select name="Type">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default TransactionForm;
