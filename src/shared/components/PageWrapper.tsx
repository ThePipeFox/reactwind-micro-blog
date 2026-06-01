import {type ReactNode} from "react";
import SideBar from "./SideBar.tsx";
import TopBar from "./TopBar.tsx";
import Footer from "./Footer.tsx";
import {Helmet} from "react-helmet";
import {AppConfiguration} from "../configuration/AppConfiguration.ts";

type PageWrapperProps = {
    children?: ReactNode,
    pageTitle?: string,
    canonicalLink?: string | null,
    metaDescription?: string | null,
};

const siteTitle = "My Awesome Blog";

export default function PageWrapper({
                                        children,
                                        pageTitle = siteTitle,
                                        canonicalLink = null,
                                        metaDescription = null,
                                    }: PageWrapperProps) {

    pageTitle = pageTitle === siteTitle ? pageTitle : `${pageTitle} | ${siteTitle}`;
    canonicalLink = !canonicalLink || canonicalLink === ""
        ? AppConfiguration.siteBaseUri
        : `${AppConfiguration.siteBaseUri}/${canonicalLink}`;
    metaDescription = !metaDescription || metaDescription === "" ? siteTitle : metaDescription;

    return (
        <>
            <Helmet>
                <title> {pageTitle} </title>
                <link rel="canonical" href={canonicalLink!}/>
                <meta property="og:title" content={pageTitle}/>
                <meta property="og:description" content={metaDescription!}/>
                <meta property="og:url" content={canonicalLink!}/>
                <meta name="twitter:title" content={pageTitle}/>
                <meta name="twitter:description" content={metaDescription!}/>
            </Helmet>
            <TopBar/>
            <div className="flex color-body-default">
                <SideBar/>
                <section id="main"
                         role="main"
                         className="flex flex-col items-center md:ms-62.5 pt-7 pe-7 ps-7 w-full">
                    <section id="content" className="w-full lg:max-w-5xl mx-auto min-h-[90vh] flex flex-col">

                        <div className="flex-1">
                            {children}
                        </div>

                        <Footer/>
                    </section>
                </section>
            </div>
        </>
    );
}