import PageHeading from "./PageHeading.tsx";

export default function HomePageHero() {
    return (
        <>
            <div className={'mb-20 mt-10 bg-gray-200 rounded-4xl p-10'}>
                <PageHeading text={'My Awesome Blog'} />
                <p>
                    Edit <code> ./src/shared/components/HomePageHero.tsx</code> file to customize this block.
                </p>
            </div>
        </>
    );
}