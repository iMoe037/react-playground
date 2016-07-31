import React from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import { searchNearby } from 'utils/googleApiHelpers';
import { geoLocate } from 'utils/geoLocate';
import Header from 'components/Header/Header'


export class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const { google } = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }

    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      })
      .catch((status, result) => {
        console.log('Error Fetching Nearby ', status);
      })
  }
  render() {
    return (
      <div>
        <Map
          google={ this.props.google }
          // onReady={this.onReady.bind(this)}
          // visible={false}
          />

          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)