import React from "react";
import Header from "../components/Header/Header";
import Summary from "../components/Summary/Summary";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import TransactionList from "../components/TransactionList/TransactionList";
const Home = () => {
  return (
    <>
      <Header />
      <Summary />
      <TransactionForm />
      <TransactionItem />
      <TransactionList />
    </>
  );
};

export default Home;
