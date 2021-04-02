import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import '../../SCSS/Google.scss';
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    console.log("ADDRESS", address)
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.props.setAddress(address);
    console.log("ding", address)
    geocodeByAddress(address)
    .then(async results => {
      console.log("RESULTS: ", address, results)
      console.log("getLatLng(results[0]):", getLatLng(results[0]))
      let thisLatLng = await getLatLng(results[0]);
      console.log("latLng THEN: ", thisLatLng)
      this.props.setLatLng(thisLatLng);
      // return getLatLng(results[0])
    })
    // .then(latLng => {
    //   console.log("latLng THEN: ", latLng)
    //   this.props.setLatLng(latLng);
    //   }).catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="google-find-container">
            <input
                  value={this.state.address}
              {...getInputProps({
                placeholder: 'start typing your address ...',
                className: 'location-search-input',
            })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBX-lHHPS16S3hrDWNDRe65HyB3JIcE8Xo",
  })(LocationSearchInput);


