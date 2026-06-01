import SocialIcons from "./SocialIcons.tsx";
import {NavLink} from "react-router";
import Logo from "./Logo.tsx";

export default function SideBar() {
    return (
        <>
            <div id="sidebar"
                 className="align-center justify-between hidden md:flex flex-col bg-emerald-green text-body-dark h-screen p-7 ps-5 pe-5 fixed w-62.5">
                <div>
                    <div className="flex flex-col items-center justify-center mb-3">
                        <div className="mb-5">
                            <Logo/>
                        </div>
                    </div>
                    <span className="block text-center text-sm">
                       Add a summary of the blog here if you want to. You can
                        edit <code style={{wordBreak: 'break-word'}}> ./src/shared/components/SideBar.tsx </code>
                        to customize the sidebar.
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <NavLink to="/articles"
                             className="font-serif uppercase hover:text-body-light text-lg font-semibold">
                        Articles
                    </NavLink>
                    <NavLink to="/about"
                             className="font-serif uppercase hover:text-body-light text-lg font-semibold">
                        About
                    </NavLink>
                </div>

                <SocialIcons/>

            </div>
        </>
    );
}