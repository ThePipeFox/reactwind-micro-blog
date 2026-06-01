import ArticleService from "../services/ArticleService.ts";
import {Navigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import PageWrapper from "../../shared/components/PageWrapper.tsx";
import PageHeading from "../../shared/components/PageHeading.tsx";
import FeatherIcon from "feather-icons-react";
import toast, {Toaster} from "react-hot-toast";
import {AppConfiguration} from "../../shared/configuration/AppConfiguration.ts";
import ArticleLinkCopiedToast from "../components/ArticleLinkCopiedToast.tsx";

export default function ArticlePage() {
    const articlesFolder = 'articles';
    const articleFileExtension = '.md';
    const {slug} = useParams();
    const [content, setContent] = useState<string>("");
    const [hasError, setHasError] = useState<boolean>(false);
    const article = ArticleService.getInstance().getArticle(slug as string);
    const shareButtonClicked = () => {

        navigator.clipboard.writeText(`${AppConfiguration.siteBaseUri}/articles/${slug}`).then(() => {
            toast(
               <ArticleLinkCopiedToast />,
                {
                    duration: 7000,
                    style: {
                        background: "transparent",
                        margin: "0",
                        padding: "0",
                        boxShadow: "none",
                    }
                });
        });
    };

    useEffect(() => {
        if (!article) {
            return;
        }

        fetch(`/${articlesFolder}/${article.fileName}${articleFileExtension}`)
            .then(async res =>  {
                const errorMessage = "Failed to fetch article.";
                if (!res.ok) {
                    throw new Error(errorMessage);
                }

                const text = await res.text();

                if (text.startsWith("<!doctype html>")) {
                    throw new Error(errorMessage);
                }

                return text;
            })
            .then(text => {
                setContent(text);
            })
            .catch(() => { setHasError(true); });

    }, [article]);

    if (!article || hasError) {
        return (<> <Navigate to="/not-found"></Navigate> </>);
    }

    return (
        <>
            <Toaster/>
            <PageWrapper pageTitle={article.title}
                         canonicalLink={article.slug}
                         metaDescription={article.summary}>
                <PageHeading text={article.title} bottomMargin={'small'}></PageHeading>
                <div className="flex items-center mb-10 text-body-medium font-serif">
                    <strong className="inline-flex me-2"> {article.category.friendlyTitle} </strong>
                    <span className="inline-flex"> // {article.createdAtFriendly} </span>
                    <button type="button"
                            className="inline-flex items-center justify-center ms-2 cursor-pointer p-0 hover:text-purple-accent"
                            title="Share Article"
                            onClick={shareButtonClicked}>
                        <FeatherIcon icon="share-2" size={20}/>
                    </button>
                </div>

                <Markdown components={{
                    h1: ({children}) => (
                        <h1 className="font-semibold text-3xl text-body-dark mb-7 font-serif">
                            {children}
                        </h1>),
                    h2: ({children}) => (
                        <h2 className="text-2xl mb-5 mt-3 text-body-dark font-serif border-b border-emerald-green pt-2">
                            {children}
                        </h2>
                    ),
                    p: ({children}) => (
                        <p className="mb-2">
                            {children}
                        </p>),
                    a: ({...props}) => (
                        <a {...props} className="text-purple-accent font-semibold hover:underline" target="_blank"/>
                    ),
                    ul: ({...props}) => (<ul {...props} className="list-disc ms-7 mb-2"/>),
                    code: ({...props}) => (<code {...props} className="bg-gray-200 text-body-default text-sm p-1"/>),
                    pre: ({...props}) => (<pre {...props} className="bg-gray-200 mb-2 p-3 overflow-x-auto" />)

                }}>
                    {content}
                </Markdown>
            </PageWrapper>
        </>
    );
}