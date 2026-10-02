import type { CategoryTotal, Transaction, TransactionCategory } from "./types";

export function calculateIncome(transactions: Transaction[]): number {
    return transactions.filter((t) => t.kind === "Gəlir").reduce((acc, t) => acc + t.amount, 0);
}

export function calculateExpense(transactions: Transaction[]): number {
    return transactions.filter((t) => t.kind === "Xərc").reduce((acc, t) => acc + t.amount, 0);
}

export function calculateCategoryTotals(transactions: Transaction[]): CategoryTotal[] {
    const totals = new Map<TransactionCategory, number>();

    for (const t of transactions) {
        if (t.kind !== "Xərc") continue;

        const current = totals.get(t.category) ?? 0;
        totals.set(t.category, current + t.amount);
    }

    return Array.from(totals.entries()).map(([category, total]) => ({
        category,
        total,
    }));
}