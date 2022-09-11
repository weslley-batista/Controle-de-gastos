import React, { useState } from 'react'
import * as C from './styles'


const Form = () => {

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
  };

  return (
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
  )
};

export default Form;