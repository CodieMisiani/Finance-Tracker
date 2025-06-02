import React, { useState } from "react";
import Header from "../components/Header/Header";
import Summary from "../components/Summary/Summary";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import TransactionList from "../components/TransactionList/TransactionList";

const initialFormData = {
  type: "",
  description: "",
  amount: "",
  category: "",
  date: "",
};

const Dashboard = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    setFormData(initialFormData); // reset form after submit
  };

  return (
    <>
      <Header />
      <Summary />
      <TransactionForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      <TransactionItem />
      <TransactionList />
    </>
  );
};

export default Dashboard;
