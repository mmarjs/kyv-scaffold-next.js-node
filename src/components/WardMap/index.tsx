import React, { useEffect, useState } from "react";
import { WardMapContainer, WardSearchInputContainer, WardSearchContainer, SearchInput, ErrorMessage } from "./styles";
import { useRouter } from "next/router";
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

const WardMap: React.FC = () => {
    const router = useRouter();
    const [isError, setIsError] = useState<boolean>(false);
    
    useEffect(() => {
        createMap();
    }, []);

    const createMap = () => {
      mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaC1wcyIsImEiOiJjbDFkc3MzdnMwMDI1M2JtaWM3bjQ2cGgwIn0.GZ3p3cUa0oeQWoyStDS4pQ'
      const dataLayer = 'WARD25_OpenData_08072018_wgs8-4d4a1z'
      // init the map
      let zoom = 8
      if (window.innerWidth > 400) {
        zoom = 9
      }
      if (window.innerWidth > 600) {
        zoom = 10
      }
      let wardNum = false;
      let wardName = false;
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/masslbp/cjky8l3xz4xin2snwiqw6a2a1', // 25 wards -- Official (25 Ward Model - December 2018 (WGS84 - Latitude / Longitude))
        navigation: true,
        center: [-79.361, 43.699],
        zoom: zoom,
        minZoom: 8,
        maxZoom: 15,
        scrollZoom: false,
        bearing: -16.9 // So top line is flat
      })
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl())

      // map.fitBounds([[-79.7, 43.5], [-79.1, 43.9]], { padding: {top: 0, bottom: 0, left: 0, right: 0} })

      map.on('load', () => {
        // Add layer for hover state to activate
        map.addLayer({
          'id': 'ward-hover',
          'type': 'fill',
          'source': 'composite',
          'source-layer': dataLayer,
          'layout': {},
          'paint': {
            'fill-color': '#75BEE9',
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.8, 0.3]
          }
        })
        map.addLayer({
          'id': 'ward-hover-line',
          'type': 'line',
          'source': 'composite',
          'source-layer': dataLayer,
          'layout': {},
          'paint': {
            'line-color': '#D69961',
            'line-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0]
          }
        })

        // Hover popup for ward info
        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        })

        // Handle hover state event
        let hoveredWardId
        map.on('mousemove', 'wards', (e) => {
          map.getCanvas().style.cursor = 'pointer'

          if (e.features.length > 0) {
            if (hoveredWardId) {
              map.setFeatureState({ source: 'composite', 'sourceLayer': dataLayer, id: hoveredWardId }, { hover: false })
            }
            hoveredWardId = e.features[0].id
            map.setFeatureState({ source: 'composite', 'sourceLayer': dataLayer, id: hoveredWardId }, { hover: true })
          }

          const moved = e.features[0].properties.AREA_L_CD !== wardNum
          wardNum = e.features[0].properties.AREA_L_CD
          wardName = e.features[0].properties.AREA_NAME

          // Display popup; Track mouse movement on large screen sizes
          var coordinates = e.features[0].geometry.coordinates.slice()
          if (moved || window.innerWidth > 800) {
            popup.setLngLat(e.lngLat).setHTML(`Ward ${wardNum}: ${wardName}`).addTo(map)
          }
        })

        map.on('mouseleave', 'wards', () => {
          map.getCanvas().style.cursor = ''
          map.setFeatureState({ source: 'composite', 'sourceLayer': dataLayer, id: hoveredWardId }, { hover: false })
          hoveredWardId = false
          wardNum = false
          wardName = false
          popup.remove()
        })

        const slugify = (text) => {
          return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/—/g, '-')
            .replace(/'/g, '')
            .replace(/\./g, '')
        }

        // Handle clicking on a ward
        map.on('click', 'wards', (e) => {
          const features = map.queryRenderedFeatures(e.point, { layers: ['wards'] })
          router.push('/ward/' + slugify(features[0].properties.AREA_NAME))
        })

        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          country: 'ca',
          placeholder: '',
          flyTo: false,
          bbox: [-79.7, 43.5, -79.1, 43.9] // This is the bounds for the shapefile
        })
        
        document.getElementById('geocoder_input')?.appendChild(geocoder.onAdd(map))
        const geocoderInput = document.getElementById('geocoder_input')?.querySelector('input')
        geocoderInput.setAttribute('id', 'address')
        geocoderInput.setAttribute('placeholder', 'Your address...')

        geocoder.on('result', (e) => {
          // Get location from geocoder and pass to above function
          const features = map.queryRenderedFeatures(map.project([e.result.center[0], e.result.center[1]]), { layers: ['wards'] })
          if (features && features[0] && features[0].properties && features[0].properties.AREA_NAME) {
            setIsError(false);
            router.push('/ward/' + slugify(features[0].properties.AREA_NAME))
          } else {
            setIsError(true);
          }
        })

      })
    }
    return (
      <React.Fragment>
        <WardMapContainer id="map" />
        <WardSearchContainer>
          <p>Not sure which Ward you're in? Enter your address or postal code to find your Ward:</p>
          <WardSearchInputContainer>
            {isError && <ErrorMessage>Please enter a Toronto address to continue</ErrorMessage>}
            <SearchInput id="geocoder_input" />
          </WardSearchInputContainer>
        </WardSearchContainer>
      </React.Fragment>
    );
};

export default WardMap;