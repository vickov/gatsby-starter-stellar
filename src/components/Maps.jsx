import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Maps = () => {
    
    const mapConfig = {
        center: { 
            lat: 43.506101,
            lng: 16.463595,
        },
        zoom: 18,
    };


    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      
    return (
        <LoadScript
       googleMapsApiKey='AIzaSyBbFgCgwOGf1cK5YACwl4WkNTfsblnHUwo'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={18}
                center={mapConfig.center}
            >
            <Marker position={{lat: 43.506101, lng: 16.463595}} />
            </GoogleMap>
            </LoadScript>
    );
};

export default Maps;
//                