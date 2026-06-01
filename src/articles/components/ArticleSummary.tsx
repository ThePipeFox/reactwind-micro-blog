import type {ArticleRecord} from "../models/ArticleRecord.ts";
import {NavLink} from "react-router";

export default function ArticleSummary({article}: { article: ArticleRecord }) {
    return (
        <>
            <article>
                <NavLink to={`/articles/${article.slug}`}>
                    <h3 className="mb-1 text-xl text-body-dark hover:text-purple-accent font-serif">
                        {article.title}
                    </h3>
                </NavLink>
                <h4 className="mb-4 text-body-medium font-serif text-sm">
                    <strong> {article.category.friendlyTitle} </strong> // {article.createdAtFriendly}
                </h4>
                <p className="text-base">
                    {article.summary}
                    <br />
                    <NavLink to={`/articles/${article.slug}`}
                             className="text-purple-accent hover:underline font-bold">
                        Read the full article
                    </NavLink>
                </p>
            </article>
        </>
    );
}