import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const position = [43.4054, 24.6242]; // Coordinates for the address in Pleven

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});


export default function AboutUs() {

    return <div>
        <h1>Our Location</h1>
        <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
            className="rounded-xl shadow-lg z-10"
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
}