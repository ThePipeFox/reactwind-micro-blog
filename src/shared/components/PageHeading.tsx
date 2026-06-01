export default function PageHeading({text, bottomMargin = "regular"}: {
    text: string,
    bottomMargin?: "regular" | "small"
}) {
    return (
        <>
            <h1 className={`text-emerald-green font-serif text-3xl mb-${bottomMargin === "regular" ? "10" : "3"}`}>
                <strong className="text-purple-accent"> {'<'} </strong>
                {text}
                <strong className="text-purple-accent"> {'/>'} </strong>
            </h1>
        </>
    );
}