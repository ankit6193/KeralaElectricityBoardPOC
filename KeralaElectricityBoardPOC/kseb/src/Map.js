import React, { Component } from 'react'
import {
  Circle,
  CircleMarker,
  Map,
  Marker,
  Polyline,
  Popup,
  Tooltip,
  TileLayer,
} from 'react-leaflet'
import Button from '@material-ui/core/Button';

const center = [9.8, 76.5]

const polyline = [[9.86079307, 76.69274206], [9.90681485, 76.72578682], [9.90338131, 76.72379337]]
//const secondpolyline = [[9.86079307, 76.69274206],[9.90338131, 76.72379337]]

function buttonClicked (position) {
  console.log(position);
}

const MyPopupMarker = ({ map, position, children }) => (
  <Marker map={map} position={position}>
      <Popup>
        <Button  variant="contained" color="primary" onClick = {() => buttonClicked(position)} > Turn On </Button>
      </Popup>
  </Marker>
);

const MyMarkersList = ({ map, markers }) => {
  const items = markers.map(({ key, ...props }) => (
      <MyPopupMarker key={key} map={map} {...props} />
  ));
  return <div style={{display: 'none'}}>{items}</div>;
};

// const multiPolyline = [
//   [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
//   [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
// ]

function getPointsData() {
  return [[9.86079307, 76.69274206], [9.90681485, 76.72578682], [9.90338131, 76.72379337]];
}


export default class VectorLayersExample extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
                    point : "",
                    lines : "",
                    abs : "",
                    markers : ""
                };
  }
  

  componentDidMount(){
    var point = getPointsData();
    // var lines = getLinesData();
    // var abs = getABData();
    
    
    
    var markersData = this.setMarkerData(point);
    this.setState({
      point : point,
      lines : "",
      abs : "",
      markers : markersData
   })
   
  }

  setMarkerData(point) {
    var markersArray = [];
    var index = 1;
    point.forEach(element => {
        markersArray.push({key: 'marker'.index, position: element, children: 'Mypopup'.index})
        index++;
    });

    return markersArray;
  }
  render() {

    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <MyMarkersList markers={this.state.markers} />
        <Polyline color="red" positions={this.state.point} />
        {/* <Polyline color="black" positions={secondpolyline} /> */}
       
      </Map>
    )
  }
}