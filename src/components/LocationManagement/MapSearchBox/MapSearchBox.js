import React from 'react';
import "./MapSearchBox.css";


class MapSearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
        }
    }

    componentDidMount() {
        const {map, mapApi} = this.props;
        this.searchBox = new mapApi.places.SearchBox(this.searchInput);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
        this.searchBox.bindTo('bounds', map);
    }

    componentWillUnmount() {
        // https://developers.google.com/maps/documentation/javascript/events#removing
        const {mapApi} = this.props;
        mapApi.event.clearInstanceListeners(this.searchInput);
    }

    clearSearchBox = () => {
        this.searchInput.value = '';
    }


    onPlacesChanged = () => {
        const {map, addplace} = this.props;
        const selected = this.searchBox.getPlaces();
        const { 0: place } = selected;
        if (!place.geometry) return;
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }

        addplace(selected);
        this.searchInput.blur();
    }


    render() {
        return <input id={"inputBox"}
                      ref={(ref) => {
            this.searchInput = ref;

        }} onFocus={this.clearSearchBox} placeholder="Enter an address..." type="text"/>;
    }
}


export default MapSearchBox;