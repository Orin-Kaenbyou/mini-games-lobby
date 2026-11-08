export type Category = "dice" | "cards" | "slots"

export interface Game {
    id: string;
    title: string;
    category: Category;
    description: string;
    minBet: number;
}