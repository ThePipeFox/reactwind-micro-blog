import PageWrapper from "../components/PageWrapper.tsx";
import PageHeading from "../components/PageHeading.tsx";

export default function AboutPage() {
    const metaDescription = `About Page`;

    return (
        <>
            <PageWrapper pageTitle={"About"}
                         canonicalLink={"about"}
                         metaDescription={metaDescription}>
                <PageHeading text="About"/>

                <p>
                    This is your basic <i> About Me </i> or <i> About the Blog page. </i>
                    Make it your own :)
                </p>

            </PageWrapper>
        </>
    );
}