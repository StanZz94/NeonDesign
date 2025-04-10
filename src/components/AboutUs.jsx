import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import years30 from '../../public/years30.png';

const position = [43.4054, 24.6242]; // Coordinates for the address in Pleven

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});


export default function AboutUs() {

    return <div>
        <div className='bg-red-600 pt-10 '>
            <h1 className='text-center pb-4 font-bold font-serif text-2xl lg:text-4xl'>Light Ads Neon</h1>
            <div className='mx-auto'><img className='mx-auto' src={years30} alt='30 years' /></div>
            <p className='text-center w-3/5 mx-auto font-semibold md:text-xl mb-6'>Light ads Neon was established in 1991, having its major business activity manufacture and assembly of neon, illuminated, non-illuminated advertisements, volumetric letters, mounting of facings.</p>
            <p className='text-center w-4/5 mx-auto font-semibold md:text-xl mb-6'>In the process of our development, we managed to purchase all necessary machinery for manufacturing of advertisements, to create a team of specialists, therefore, establishing ourselves on the market.</p>
            <p className='text-center w-4/5 mx-auto font-semibold md:text-xl pb-6'>We have extensive experience in the field of visual communication and have introduced the latest advanced LED Widescreen (LFD) technology.</p>

        </div>

        <div>
            <h1>Our Location</h1>
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="shadow-lg z-10 h-64 md:h-96 lg:h-[32rem] mb-20"
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
}