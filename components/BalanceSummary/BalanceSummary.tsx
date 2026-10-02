import styles from "./style.module.css"

interface BalanceSummaryProps {
    income: number;
    expense: number;
    balance: number;
}

export default function BalanceSummary({ income, expense, balance }: BalanceSummaryProps) {

return (
  <div className={styles.wrap}>
    <div>
      <p className={styles.label}>Balans</p>
      <p className={styles.balance}>{balance} AZN</p>
    </div>
    <div className={styles.split}>
      <div>
        <p className={styles.label}>Gəlir</p>
        <p className={`${styles.subFigure} ${styles.income}`}>{income} AZN</p>
      </div>
      <div>
        <p className={styles.label}>Xərc</p>
        <p className={`${styles.subFigure} ${styles.expense}`}>{expense} AZN</p>
      </div>
    </div>
  </div>
);
}
