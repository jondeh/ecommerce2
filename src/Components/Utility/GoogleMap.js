import React, { useState, useContext, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow, Circle } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import customMarker from '../../data/media/place-marker.svg';
import '../../SCSS/Google.scss';
import { colors } from '../../data/variables';
import { CustomContext } from '../../context/CustomContext';

const { primary, secondary, accent, textColor, altBlue} = colors;

export function MapContainer(props) {
  const { latLng } = useContext(CustomContext);

    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const [mapCenter, setMapCenter] = useState(latLng);

    useEffect(() => {
      setMapCenter(latLng);
    }, [latLng])
  

  // const onMarkerClick = (props, marker, e) => {
  //   setSelectedPlace(props);
  //   setActiveMarker(marker);
  // }

  // const onMapClicked = (props) => {
  //   if (showingInfoWindow) {
  //     setShowingInfoWindow(false);
  //     setActiveMarker(null);
  //   }
  // };
 
  // const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // };

  const style = {
    height: "100%",
    width: "90%",
    borderRadius: "15px",
    // border: `.5em solid ${altBlue}`,
    border: `.1em solid whitesmoke`,
    boxShadow: `0px 1px 5px grey`,
  }

  const containerStyle = {
    // width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
  }

    return (
        <div className="google-map">
        <Map
            style={style}
            containerStyle={containerStyle}
            zoom={19}
            draggable={false}
            mapType={'satellite'}
            // mapTypeControl={false}
            // zoomControl={false}
            // scaleControl={false}
            // streetViewControl={false}
            // rotateControl={false}
            // fullscreenControl={false}
            disableDefaultUI={true}
            initialCenter={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
            }}
            center={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
            }}
            google={props.google}
            // onClick={onMapClicked}
        >
            <Marker
            position={{
                lat: mapCenter.lat,
                lng: mapCenter.lng,
            }}
            // onClick={onMarkerClick}
            name={"Current location"}
            // opacity={.5}
            icon={{
                url: customMarker,
                // anchor: new google.maps.Point(32,32),
                // scaledSize: new google.maps.Size(64,64)
            }}
            />
            <Circle
            radius={35}
            center={{
                lat: mapCenter.lat,
                lng: mapCenter.lng,
            }}
            // onMouseover={() => console.log('mouseover')}
            // onClick={() => console.log('click')}
            // onMouseout={() => console.log('mouseout')}
            strokeColor={primary}
            strokeOpacity={.9}
            strokeWeight={5}
            fillColor={accent}
            fillOpacity={0.4}
            />

            <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            >
            <div>
                <h1>{selectedPlace.name}</h1>
            </div>
            </InfoWindow>
        </Map>
        </div>
    );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBX-lHHPS16S3hrDWNDRe65HyB3JIcE8Xo",
})(MapContainer);
