import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import years30 from '../../public/years30.png';

const position = [43.4054, 24.6242]; // Coordinates for Pleven

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export default function AboutUs() {
    return (
        <div>
            {/* Red Section */}
            <div className="bg-red-600 pt-10 relative z-10">
                <h1 className="text-center pb-4 font-bold font-serif text-2xl md:text-4xl lg:text-5xl">
                    Light Ads Neon
                </h1>
                <div className="mx-auto">
                    <img className="mx-auto" src={years30} alt="30 years" />
                </div>
                <p className="text-center w-3/5 mx-auto font-semibold md:text-xl mb-6">
                    Light ads Neon was established in 1991, having its major business activity manufacture and assembly of neon, illuminated, non-illuminated advertisements, volumetric letters, mounting of facings.
                </p>
                <p className="text-center w-4/5 mx-auto font-semibold md:text-xl mb-6">
                    In the process of our development, we managed to purchase all necessary machinery for manufacturing of advertisements, to create a team of specialists, therefore, establishing ourselves on the market.
                </p>
                <p className="text-center w-4/5 mx-auto font-semibold md:text-xl pb-6">
                    We have extensive experience in the field of visual communication and have introduced the latest advanced LED Widescreen (LFD) technology.
                </p>

                {/* Wavy Separator SVG */}
                <div className="overflow-hidden leading-none rotate-180">
                    <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-20">
                        <path
                            d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z"
                            style={{ stroke: 'none', fill: '#1c1917' }} // stone-800
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Black Section */}
            <div className="bg-[#1c1917]">
                <h1 className="text-red-600 text-center pb-10 font-bold font-serif text-3xl md:text-4xl lg:text-5xl">
                    Contacts
                </h1>

                <div className="flex flex-row font-semibold w-full h-auto text-white text-sm md:text-lg lg:text-xl">
                    {/* Left Column */}
                    <div className="w-1/2 flex justify-center">
                        <div className="pl-2 md:pl-10 lg:pl-20 py-4 w-full max-w-md text-left">
                            <p className="mb-2">Town: Pleven</p>
                            <p className="mb-2">Address: Kara Kolio 13</p>
                            <p className="mb-2">E-mail: office@lightreklama.com</p>
                            <p className="mb-2">Viber: +359 882 263 038</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-1/2 flex justify-center">
                        <div className="pl-2 md:pl-10 lg:pl-20 py-4 w-full max-w-md text-left">
                            <p className="mb-2">Phone: +359 64 84 67 09</p>
                            <p className="mb-2">Mobile: +359 885 506 618</p>
                            <p className="mb-2">Mobile: +359 888 353 976</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-red-600 text-center mt-20 pb-10 font-bold font-serif text-3xl md:text-4xl lg:text-5xl">
                    Our Location
                </h1>

                <MapContainer
                    center={position}
                    zoom={16}
                    scrollWheelZoom={false}
                    className="shadow-lg z-10 h-64 md:h-96 lg:h-[30rem]"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            Light Ads - Neon<br />
                            ул. "Кара Кольо" 13, Плевен
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
