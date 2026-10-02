"use client"
import type { NewTransaction, TransactionKind, TransactionCategory } from "@/lib/types";
import { KINDS, CATEGORIES } from "@/lib/data";
import { useState } from "react";
import styles from "./style.module.css"


interface TransactionFormProps {
    onAdd: (transaction: NewTransaction) => void;
}



export default function TransactionForm({ onAdd }: TransactionFormProps) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState<TransactionCategory | "">("")
    const [kind, setKind] = useState<TransactionKind | "">("")




    function handleAdd() {
        if (!category) return "Kateqoriya seçilməyib!";
        if (!kind) return "Növ seçilməyib!";
        if (!description) return "Açıqlama yazılmayıb!";


        const newTransaction: NewTransaction = {
            description,
            amount: Number(amount),
            kind,
            category,
        };

        onAdd(newTransaction);

        setDescription("");
        setAmount("");
        setCategory("");
        setKind("");
    }

  return (
  <div className={styles.form}>
    <div className={styles.row}>
      <select
        className={styles.select}
        value={kind}
        onChange={(e) => setKind(e.target.value as TransactionKind)}
      >
        <option value="">Seçin</option>
        {KINDS.map((k) => (
          <option value={k} key={k}>
            {k}
          </option>
        ))}
      </select>

      <input
        className={styles.input}
        placeholder="Təsvir"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className={styles.input}
        placeholder="Məbləğ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>

    <div className={styles.row}>
      <select
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value as TransactionCategory)}
      >
        <option value="">Kateqoriya seçin</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button className={styles.button} onClick={handleAdd}>
        Əlavə et
      </button>
    </div>
  </div>
);

}

