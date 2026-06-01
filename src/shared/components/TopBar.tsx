import SocialIcons from "./SocialIcons.tsx";
import Logo from "./Logo.tsx";
import FeatherIcon from "feather-icons-react";
import {useRef, useState} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {NavLink} from "react-router";


export default function TopBar() {

    const [menuExpanded, setMenuExpanded] = useState(false);
    const dropDownMenuRef = useRef(null);
    const menuButtonClicked = () => {
        setMenuExpanded(!menuExpanded);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useOnClickOutside(dropDownMenuRef, () => {
        setMenuExpanded(false);
    });

    return (
        <>
            <header role="masthead"
                    className="flex items-center justify-between bg-emerald-green text-body-dark md:hidden p-5 ps-3 pe-3">
                <div>
                    <Logo/>
                </div>
                <div className="flex items-center justify-center relative">
                    <button onClick={menuButtonClicked}>
                        <FeatherIcon icon="menu" className="me-5"/>
                    </button>
                    <SocialIcons/>

                    {menuExpanded && (
                        <div className="absolute bg-emerald-green top-14 right-3 p-1 ps-3 pe-3 flex items-center rounded-b-lg"
                             ref={dropDownMenuRef}>
                            <NavLink to="/articles" className="font-serif uppercase me-3 text-lg"> Articles </NavLink>
                            <NavLink to="/about" className="font-serif uppercase text-lg"> About </NavLink>
                        </div>
                    )}

                </div>
            </header>
        </>
    );
}