import PageWrapper from "../../shared/components/PageWrapper.tsx";
import ArticleService from "../services/ArticleService.ts";
import ArticleSummary from "../components/ArticleSummary.tsx";
import PageHeading from "../../shared/components/PageHeading.tsx";

export default function ArticleIndexPage() {
    const articles = ArticleService
        .getInstance()
        .getAll()
        .map(article => <ArticleSummary article={article} key={article.slug}/>);

    return (
        <>
            <PageWrapper pageTitle={"Article Index"}
                         canonicalLink={"articles"}
                         metaDescription={"Browse foxy articles on software engineering, art and other topics."}>

                <PageHeading text="Article Index"/>

                {articles}

            </PageWrapper>
        </>
    );
}