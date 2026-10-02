import styles from "./style.module.css";
import { CategoryTotal } from "@/lib/types";

interface CategoryBreakdownProps {
    categoryTotals: CategoryTotal[];
}

export default function CategoryBreakdown({ categoryTotals }: CategoryBreakdownProps) {
    if (categoryTotals.length === 0) return null;

    const max = Math.max(...categoryTotals.map((c) => c.total));

    return (
        <div>
            <p className={styles.heading}>Xərclər kateqoriya üzrə</p>
            {categoryTotals.map((c) => (
                <div key={c.category} className={styles.row}>
                    <span className={styles.label}>{c.category}</span>
                    <div className={styles.barTrack}>
                        <div
                            className={styles.barFill}
                            style={{ width: `${(c.total / max) * 100}%` }}
                        />
                    </div>
                    <span className={styles.amount}>{c.total} AZN</span>
                </div>
            ))}
        </div>
    );
}