import React, { useEffect, useState } from 'react';
import InputNumber from './InputNumber/InputNumbers';

export default function Info({ transactions }) {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [total, setTotal] = useState(0);
  const [transactionsLength, setTransactionsLength] = useState(0);

  const totalColor = total > 0 ? '#009688' : '#c0392b';

  useEffect(() => {
    const mapTrans = transactions.map(({ type, value }) => {
      let acc = [];
      if (type === '+') {
        acc.push(value);
      }
      return acc;
    });

    const calculateIncome = mapTrans.reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

    const calculateExpenses = transactions.reduce((acc, curr) => {
      // console.log(acc - curr.value);
      // return curr.type === '-' && acc + curr.value;
      if (curr.type === '-') {
        return acc - curr.value;
      } else {
        return acc + curr.value;
      }
    }, 0);

    const calculateTotal = calculateIncome - calculateExpenses;
    // console.log('saldo: ' + calculateIncome);
    // console.log('despesas: ' + calculateExpenses);
    // console.log('total: ' + calculateTotal);
    setIncome(calculateIncome);
    setExpenses(calculateExpenses);
    setTotal(calculateTotal);
    setTransactionsLength(transactions.length);
  }, [transactions]);

  return (
    <div style={styles.flexRow}>
      <InputNumber title="Lançamentos:" length={transactionsLength} />
      <InputNumber title="Receitas:" color="#009688" value={income} />
      <InputNumber title="Despesas:" color="#c0392b" value={total} />
      <InputNumber title="Saldos:" color={totalColor} value={expenses} />
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
};
