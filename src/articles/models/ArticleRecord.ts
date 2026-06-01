import type {Category} from "./Category.ts";

export type ArticleRecord = {
    title: string;
    slug: string;
    fileName: string;
    createdAtFriendly: string;
    category: Category;
    summary: string;
};