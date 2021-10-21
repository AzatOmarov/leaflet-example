import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: require('../assets/images/map-pointer.svg'),
  iconRetinaUrl: require('../assets/images/map-pointer.svg'),
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  iconSize: new L.Point(25, 65),
  className: 'leaflet-div-icon'
});

export { markerIcon };