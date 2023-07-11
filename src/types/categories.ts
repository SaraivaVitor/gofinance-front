export type CategoriesType = {
  created_at: Date;
  id: number;
  description: string;
  title: string;
  type: "receipt" | "debit";
  user_id: number;
};
