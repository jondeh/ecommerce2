import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow, Circle } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import customMarker from '../../data/media/place-marker.svg';
import '../../SCSS/Google.scss';
import { colors } from '../../data/variables';

const { primary, secondary, accent, textColor, altBlue} = colors;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: props.latLng.lat,
      lng: props.latLng.lng,
    },
  };
  }
  

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      // showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  style = {
    height: "100%",
    width: "90%",
    borderRadius: "15px",
    // border: `.5em solid ${altBlue}`,
    border: `.1em solid whitesmoke`,
    boxShadow: `0px 1px 5px grey`,
  }

  containerStyle = {
    // width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
  }

  render() {
    return (
      <div className="google-map">
        <Map
          style={this.style}
          containerStyle={this.containerStyle}
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
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          google={this.props.google}
          // onClick={this.onMapClicked}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
            // onClick={this.onMarkerClick}
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
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
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
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBX-lHHPS16S3hrDWNDRe65HyB3JIcE8Xo",
})(MapContainer);
