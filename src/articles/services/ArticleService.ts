import type {ArticleRecord} from "../models/ArticleRecord.ts";
import CategoryService from "./CategoryService.ts";

export default class ArticleService {
    private static _currentInstance: ArticleService | null = null;

    private readonly _articles: ArticleRecord[] = [
        {
            title: 'Why Hello There',
            slug: 'why-hello-there',
            fileName: 'Hello',
            createdAtFriendly: 'June 1st, 2026.',
            category: CategoryService.miscellaneous,
            summary: `
               A sample article to get you started.
            `,
        }
    ];

    public getArticle(slug: string): ArticleRecord | null {
        return this._articles.find(article => article.slug === slug) || null;
    }

    public getAll(): ArticleRecord[] {
        return this._articles;
    }

    public getLatestArticle(): ArticleRecord {
        return this._articles[0];
    }

    public static getInstance(): ArticleService {
        if (!this._currentInstance) {
            this._currentInstance = new ArticleService();
        }

        return this._currentInstance;
    }
}