import {createBrowserRouter} from "react-router";
import HomePage from "./shared/pages/HomePage.tsx";
import AboutPage from "./shared/pages/AboutPage.tsx";
import ArticleIndexPage from "./articles/pages/ArticleIndexPage.tsx";
import ArticlePage from "./articles/pages/ArticlePage.tsx";
import NotFoundPage from "./shared/pages/NotFoundPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/about",
        Component: AboutPage
    },
    {
        path: "/articles",
        children: [
            { index: true, Component: ArticleIndexPage },
            { path: ":slug", Component: ArticlePage },
        ]
    },
    {
        path: "not-found",
        Component: NotFoundPage
    },
    {
        path: "*",
        Component: NotFoundPage
    }
]);

export default router;