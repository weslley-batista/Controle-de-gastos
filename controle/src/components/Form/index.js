import React, { useState } from 'react'
import Grid from '../Grid';
import * as C from './styles'

const Form = ({handleAdd, transactionsList, setTransactionsList }) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if(!desc || !amount){
      alert("informe a descricao e valor")
      return;
    }else if(amount < 1){
      alert("o valor deve ser positivo")
      return;
    }

  const generateID = () => Math.round(Math.random() * 1000); //id aleatorip
  
  //informações que serão passadas para o array de items no App.js
  const transaction = {
    id: generateID(),
    desc: desc,
    amount: amount,
    expense: isExpense,
  };
  
  handleAdd(transaction);

  //reset sets
  setDesc("");
  setAmount("");
};


  return (
    <>
    <C.Container>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>

      <C.InputContent>
        <C.Label>valor</C.Label>
        <C.Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
      </C.InputContent>
    
      <C.RadioGroup>
        <C.Input 
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}  
        />
        <C.Label htmlFor='rIncome'>Entrada</C.Label>
        <C.Input 
          type="radio"
          id="rExpenses"
          name="group1"
          onChange={() => setExpense(!isExpense)}  
        />
        <C.Label htmlFor='rExpenses'>Saida</C.Label>
      </C.RadioGroup>
      <C.Button onClick={handleSave}>Adicionar</C.Button>
    </C.Container>
    <Grid itens={transactionsList}  setItens={setTransactionsList} />
    </>
  )
};

export default Form;