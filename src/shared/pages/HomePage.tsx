import PageWrapper from "../components/PageWrapper.tsx";
import HomePageHero from "../components/HomePageHero.tsx";
import PageHeading from "../components/PageHeading.tsx";
import ArticleSummary from "../../articles/components/ArticleSummary.tsx";
import ArticleService from "../../articles/services/ArticleService.ts";

export default function HomePage() {
    const latestArticle = ArticleService.getInstance().getLatestArticle();

    return (
        <>
            <PageWrapper metaDescription={"Geeking out about software, art and other things in between in a foxy way."}>
                <HomePageHero />

                <PageHeading text={"Latest Article"} bottomMargin={"regular"}/>

                <ArticleSummary article={latestArticle}/>
            </PageWrapper>
        </>
    );
}