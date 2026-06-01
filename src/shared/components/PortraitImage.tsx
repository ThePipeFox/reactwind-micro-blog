import portraitImage from "../../assets/images/milos-pesic.webp";

export default function PortraitImage({size = 128, border = 'green'}: { size?: number, border?: 'green' | 'gray' }) {
    return (
        <>
            <div
                className={`flex items-center justify-center rounded-full border ${border === 'green' ? 'border-emerald-green-emphasis' : 'border-gray-300'}`}
                 style={{height: size + 'px', width: size + 'px'}}>
                <img src={portraitImage}
                     alt="Milos Pesic"
                     className="h-full w-full object-cover object-top rounded-full"/>
            </div>
        </>
    );
}