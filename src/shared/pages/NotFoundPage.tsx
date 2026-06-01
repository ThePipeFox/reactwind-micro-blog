import PageWrapper from "../components/PageWrapper.tsx";
import {NavLink} from "react-router";
import PageHeading from "../components/PageHeading.tsx";

export default function NotFoundPage() {
    return (
        <>
            <PageWrapper pageTitle={"Content Not Found"}
                         canonicalLink={"not-found"}
                         metaDescription={"The page you are looking for does not exist"}>
                <div className="min-h-120">
                    <PageHeading text="404"/>
                    <p>
                        That means we couldn't find whatever it is you were looking for.
                        <br/>
                        We do have other stuff though, so click
                        <NavLink to="/" className="text-purple-accent font-semibold hover:underline"> here </NavLink>
                        to go back to the home page.
                    </p>
                </div>
            </PageWrapper>
        </>
    );
}