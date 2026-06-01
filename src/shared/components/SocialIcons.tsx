import FeatherIcon from "feather-icons-react";

export default function SocialIcons() {
    return (
        <>
            <div className="flex align-center justify-center">
                <a href="javascript:void(0)"
                   target="_blank"
                   className="me-3 hover:text-body-light"
                   title="Milos Pesic on LinkedIn">
                    <FeatherIcon icon="linkedin"></FeatherIcon>
                </a>
                <a href="javascript:void(0)"
                   target="_blank"
                   className="hover:text-body-light"
                   title="Milos Pesic on GitHub">
                    <FeatherIcon icon="github"></FeatherIcon>
                </a>
            </div>
        </>
    );
}