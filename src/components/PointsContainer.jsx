import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { markerIcon } from '../icons/icons';

export default class PointsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: [43.238949, 76.889709] // almaty
    };
  }

  //   Заявки должны быть маркерами на карте
  // - При наведении на маркеры должен появляться popup элемент с ID заказа,
  // названием клиента и ценой заказа

  render() {
    const { currentPosition } = this.state;
    const { clientList } = this.props;
    return (
      <div>
        <MapContainer center={currentPosition} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            clientList.map(function(i){
              if(i.requestList.length > 0){
                return i.requestList.map(r => (
                  <Marker position={r.coords} icon={markerIcon} key={r.id}>
                    <Popup>
                      <div className='popup'>
                        <div className='popup__id'>{r.id}</div>
                        <div className='popup__name'>{i.name}</div>
                        <div className='popup__price'>
                          <div>
                            Сумма
                          </div>
                          <div>
                            {r.price}
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ));
              }
            })
          }
          {/* <Marker position={currentPosition} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
    );
  }
}