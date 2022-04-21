import React from 'react';
import mapboxgl from 'mapbox-gl';
import logo from "./media/arttaglogo.png";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2I4ODY5IiwiYSI6ImNsMjg4eTZwdDA3MWMza3IxdmZldTgyejkifQ.G80DUdbJAj5zjtcrcP56yA';

class Mapbox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lng: -77.6746343139,
            lat: 43.0826663788,
            zoom: 15
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6746343139, 43.0826663788]
                    },
                    properties: {
                        title: 'Gene Polisseni Center',
                        description: ''
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6745810, 43.0842006]
                    },
                    properties: {
                        title: 'Student Alumni Union',
                        description: ''
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6750390, 43.0843808]
                    },
                    properties: {
                        title: 'George Eastman Hall',
                        description: ''
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6771443, 43.0848384]
                    },
                    properties: {
                        title: 'James E. Booth Hall',
                        description: ''
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6767841, 43.0853202]
                    },
                    properties: {
                        title: 'James E. Booth Hall',
                        description: ''
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.6757035, 43.0850880]
                    },
                    properties: {
                        title: 'Frank E. Gannett Hall',
                        description: ''
                    }
                }
            ]
        };

        // add markers to map
        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(
                        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                    )
            )
            .addTo(map);
        }

        
    }

    render() {
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}

export default Mapbox;