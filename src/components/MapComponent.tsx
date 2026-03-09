"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet with React
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const center: [number, number] = [-4.2634, 15.2422]; // Brazzaville coordinates

export default function MapComponent() {
  return (
    <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-3xl">
      <MapContainer 
        center={center} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // Darker variant if possible, or just standard
        />
        
        {/* Main Office / Delivery Hub */}
        <Marker position={center}>
          <Popup>
            <div className="font-bold text-primary">Biso Express Hub</div>
            <div className="text-xs">Nous livrons dans un rayon de 10km !</div>
          </Popup>
        </Marker>

        {/* Delivery Zone Radius */}
        <Circle 
          center={center}
          radius={5000}
          pathOptions={{ color: '#FF7A00', fillColor: '#FF7A00', fillOpacity: 0.1 }}
        />
      </MapContainer>
    </div>
  );
}
