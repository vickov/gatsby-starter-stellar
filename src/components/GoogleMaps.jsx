import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GoogleMapReact from 'google-map-react';

const Marker = () => (
    <>
        <div className="pin" />
        <div className="pulse" />
    </>
);

const GoogleMaps = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                other {
                    googleMapsKey
                }
            }
        }
    }
    `);
    const { googleMapsKey } = data.site.siteMetadata.other;

    const mapConfig = {
        center: { 
            lat: 43.506101,
            lng: 16.463595,
        },
        zoom: 18,
    };

    const mapStyles = {
        width:'30%',
        height: '10%',
      };



    return (
        <div id="google-map-section" style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapsKey }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
            >
                <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'} 
                lat={mapConfig.center.lat} 
                lng={mapConfig.center.lng} />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;