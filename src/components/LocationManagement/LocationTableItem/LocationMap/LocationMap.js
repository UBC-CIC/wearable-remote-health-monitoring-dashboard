import * as React from "react";
import GoogleMap from "google-map-react";
import {fitBounds} from "google-map-react";


class LocationMap extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            center: [49.263232, -123.25429],
            zoom: 17,
        }
    }

    componentDidMount() {
       this.centerMap();
    }

    // helps set the zoom and center coordinates for the map
    centerMap = () => {
        const { path } = this.props;
        let wIndex = this.findWestPoint(path);
        let eIndex = this.findEastPoint(path);
        let bounds = {
            nw: {
                lat: path[wIndex].lat,
                lng: path[wIndex].lng,
            },
            se: {
                lat: path[eIndex].lat,
                lng: path[eIndex].lng,
            }
        }
        const { center, zoom } = fitBounds(bounds, {width: 250, height: 250});
        this.setState({
            center: center,
            zoom: zoom,
        })
    }

    // finds furthest west point
    findWestPoint = (path) => {
        let furthestWestIndex = 0;
        let furthestWestLat = path[0].lat;
        for (let i = 0; i < path.length; i++) {
            if (path[i].lat < furthestWestLat) {
                furthestWestIndex = i;
                furthestWestLat = path[i].lat;
            }
        }
       return furthestWestIndex;
    }
    // finds furthest east point
    findEastPoint = (path) => {
        let furthestEastIndex = 0;
        let furthestEastLat = path[0].lat;
        for (let i = 0; i < path.length; i++) {
            if (path[i].lat > furthestEastLat) {
                furthestEastIndex = i;
                furthestEastLat = path[i].lat;
            }
        }
        return furthestEastIndex;
    }

    mapOptions = (maps) => {
        return {
            streetViewControl: false,
            scaleControl: false,
            fullscreenControl: false,
            zoomControl: false,
            clickableIcons: false,
        }
    }

    apiActions = (map, maps) => {
        const {path} = this.props;

        // define polygon
        let polygon = new maps.Polygon({
            paths: path,
            strokeWeight: 2,
            fillOpacity: 0.3,
            fillColor: "#20b2c9",
            strokeColor: "#20b2c9",
        })
        // add the polygon to the map
        polygon.setMap(map);
    }


    render() {
        const {center, zoom} = this.state;
        return(
            <div style={{width: "250px", height: "250px"}}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        libraries: ['drawing', 'geometry', 'places'],
                    }}
                    center={center}
                    zoom={(zoom > 1)? zoom-1 : zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiActions(map, maps)}
                    options={this.mapOptions}
                />
            </div>
        )
    }

}


export default LocationMap;