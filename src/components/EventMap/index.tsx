import React, { useEffect, useState } from "react"
import { EventMapContainer } from "./styles"
import mapboxgl from 'mapbox-gl'
import mapboxSdk from '@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js'

interface EventMapProps {
    address: string;
}

const EventMap: React.FC<EventMapProps> = ({ address }) => {
    const [marker, setMarker] = useState<any>();

    useEffect(() => {
        createMap();
    }, [address]);

    const createMap = () => {
        if(marker) marker.remove()
        mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaC1wcyIsImEiOiJjbDFkc3MzdnMwMDI1M2JtaWM3bjQ2cGgwIn0.GZ3p3cUa0oeQWoyStDS4pQ'
        const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
        if(address) {
            mapboxClient.geocoding.forwardGeocode({
                query: address,
                autocomplete: false,
                limit: 1
            })
            .send()
            .then((response) => {
                if (!response || !response.body || !response.body.features || !response.body.features.length) {
                    return;
                }
                const feature = response.body.features[0];
                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: feature.center,
                    zoom: 10
                });
                const popup = new mapboxgl.Popup({ offset: 70 }).setText(address);
                const marker = new mapboxgl.Marker({ "color": "#b40219", "scale": 2 }).setLngLat(feature.center).setPopup(popup).addTo(map);
                setMarker(marker);
            });
        }
        
    }
    return (
        <EventMapContainer id="map" />
    );
};

export default EventMap;