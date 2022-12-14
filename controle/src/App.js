import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import GlobalStyle from "./styles/global";



const App = () => {
    const data = localStorage.getItem("transactions"); // pegando dados do local storage
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );  
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    
    //executa seu codigo quando houve mundaça no transactionList
    useEffect(() => {
        const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

        //soma todos os valores
        const expense = amountExpense.reduce((acc, cur) =>  acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) =>  acc + cur, 0).toFixed(2);

        const total =  Math.abs(income - expense).toFixed(2);

        setExpense(`R$ ${income}`)
        setIncome(`R$ ${expense}`)
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

    }, [transactionsList])

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];
    
        setTransactionsList(newArrayTransactions);
    
        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
      };

    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            {/* passando o handleAdd para receber informações dos items */}
            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
            <GlobalStyle/>
        </>
    )
};

export default App;