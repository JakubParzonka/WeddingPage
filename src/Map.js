import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '400px'
};

export default function Map({ apiKey, data }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    })

    return isLoaded ? (
        <>
            <p>
                {data.id}
            </p>
            <GoogleMap 
                mapContainerStyle={containerStyle}
                zoom={data.zoom}
                center={data.location}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <>
                    {data.isMarkerShown && <Marker clickable position={{ lat: data.location.lat, lng: data.location.lng }} />}
                </>
            </GoogleMap>
        </>
    ) : <></>
}