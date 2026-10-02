import { Transaction } from "@/lib/types";
import styles from "./style.module.css";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void
}



export default function TransactionList({ transactions, onDelete }: TransactionListProps) {
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id} className={styles.row}>
          <div className={styles.left}>
            <p className={styles.description}>{t.description}</p>
            <p className={styles.meta}>{t.category}</p>
          </div>
          <div className={styles.right}>
            <span
              className={`${styles.amount} ${t.kind === "Gəlir" ? styles.income : styles.expense
                }`}
            >
              {t.kind === "Gəlir" ? "+" : "-"}
              {t.amount} AZN
            </span>
            <button className={styles.deleteButton} onClick={() => onDelete(t.id)}>
              ×
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}