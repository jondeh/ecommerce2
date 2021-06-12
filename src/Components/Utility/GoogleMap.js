import React, { useState, useContext, useEffect } from 'react'
import {
  GoogleApiWrapper,
  Map,
  Marker,
  InfoWindow,
  Circle
} from 'google-maps-react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import customMarker from '../../data/media/place-marker.svg'
import '../../SCSS/Google.scss'
import { colors } from '../../data/variables'
import { CustomContext } from '../../context/CustomContext'
import { UserContext } from '../../context/UserContext'

const { primary, secondary, accent, textColor, altBlue } = colors

export function MapContainer (props) {
  const { customLatLng } = useContext(CustomContext)
  const { user } = useContext(UserContext)

  // console.log({customLatLng}, {userLatLng})
  // let latLng = customLatLng ? customLatLng : userLatLng ? userLatLng : null
  // latLng = {lat: 40.4593505, lng: -111.7574137}
  let latLng = customLatLng.lat
    ? customLatLng
    : user
    ? { lat: user.lat, lng: user.lng }
    : null

  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})
  const [mapCenter, setMapCenter] = useState(latLng)

  console.log('latLng: ', latLng)
  useEffect(() => {
    setMapCenter(latLng)
  }, [latLng])

  const style = {
    height: '100%',
    width: '100%',
    borderRadius: '15px',
    // border: `.5em solid ${altBlue}`,
    border: `.1em solid whitesmoke`,
    boxShadow: `0px 1px 5px grey`
  }

  const dashStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '15px',
    // border: `.5em solid ${altBlue}`,
    border: `.1em solid whitesmoke`,
    boxShadow: `0px 1px 5px grey`
    // position: 'absolute',        // todo - uncomment when circle
    // transform: 'translateY(-100%)'
  }

  const containerStyle = {
    // width: "90%",
    marginLeft: '5%',
    marginRight: '5%'
  }

  return (
    <div className='google-map'>
      <Map
        style={style}
        containerStyle={props.type === 'custom' ? containerStyle : dashStyle}
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
          lng: mapCenter.lng
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng
        }}
        google={props.google}
        // onClick={onMapClicked}
      >
        {props.type === 'custom' && (
          <Marker
            position={{
              lat: mapCenter.lat,
              lng: mapCenter.lng
            }}
            // onClick={onMarkerClick}
            name={'Current location'}
            // opacity={.5}
            icon={{
              url: customMarker
              // anchor: new google.maps.Point(32,32),
              // scaledSize: new google.maps.Size(64,64)
            }}
          />
        )}
        {props.type === 'custom' && (
          <Circle
            radius={35}
            center={{
              lat: mapCenter.lat,
              lng: mapCenter.lng
            }}
            // onMouseover={() => console.log('mouseover')}
            // onClick={() => console.log('click')}
            // onMouseout={() => console.log('mouseout')}
            strokeColor={'mediumseagreen'}
            strokeOpacity={0.9}
            strokeWeight={5}
            fillColor={accent}
            fillOpacity={0.2}
          />
        )}

        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBD_VFmfWUeF5hBVa36PJttNWIW9G6f950'
})(MapContainer)
