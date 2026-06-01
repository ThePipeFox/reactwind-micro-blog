export default function Footer() {
    return (
        <>
            <div
                className="flex flex-col items-center justify-center w-full mt-7 pt-5 pb-5 border-t border-gray-200 text-gray-500">
                <small className={"mb-2"}>
                    Copyright &copy; {new Date().getFullYear()} My Awesome Blog
                </small>
                <small> Edit <code> ./src/shared/components/Footer.tsx </code> to customize the footer. </small>
            </div>
        </>
    );
}