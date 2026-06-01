import {NavLink} from "react-router";


export default function Logo() {
    return (
        <>
            <NavLink to="/"
                     className="flex items-center justify-center">
                <h1 className="text-body-dark font-logo text-2xl font-stretch-condensed font-bold">
                    My Awesome Blog
                </h1>
            </NavLink>
        </>
    );
}