"use client";

import { useEffect, useMemo, useState } from "react";
import style from "./page.module.css"
import BalanceSummary from "@/components/BalanceSummary/BalanceSummary";
import { Transaction, NewTransaction } from "@/lib/types";
import TransactionList from "@/components/TransactionList/TransactionList";
import TransactionForm from "@/components/TransactionForm/TransactionForm";
import { calculateCategoryTotals, calculateExpense, calculateIncome } from "@/lib/budget";
import CategoryBreakdown from "@/components/CategoryBreakdown/CategoryBreakdown";


export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions, hydrated]);



  function handleAdd(newTransaction: NewTransaction) {
    setTransactions([...transactions, { ...newTransaction, id: crypto.randomUUID() }])
  }

  function handleDelete(id: string) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  const income = useMemo(() => calculateIncome(transactions), [transactions])
  const expense = useMemo(() => calculateExpense(transactions), [transactions])
  const balance = income - expense;
  const categoryTotals = useMemo(() => calculateCategoryTotals(transactions), [transactions]);


  return (
    <main className={style.main}>
      <header className={style.header}>
        <p className={style.eyebrow}>Büdcə dəftəri</p>
        <h1 className={style.title}>Fərdi büdcə izləyici</h1>
      </header>

      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
      <BalanceSummary income={income} expense={expense} balance={balance} />
      <CategoryBreakdown categoryTotals={categoryTotals} />
    </main>
  );
}