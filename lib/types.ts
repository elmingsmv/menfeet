export type TransactionKind = "Gəlir" | "Xərc";
export type TransactionCategory = "Qida" | "Neqliyyat" | "Əyləncə" | "Tibb və sağlamlıq" | "Maaş" | "Başqa";


export interface Transaction {
    id: string;
    description: string;
    amount: number;
    kind: TransactionKind;
    category: TransactionCategory;
}

export interface CategoryTotal {
    category: TransactionCategory,
    total: number
}


export type NewTransaction = Omit<Transaction, "id">;