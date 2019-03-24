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

function buttonClicked (position) {
  console.log(position);
}

const MyPopupMarker = ({ map, position, value }) => (
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

const data = {
              "1":
                {
                  point : [9.86079307, 76.69274206],
                  value : 1
                },
              "2":
                {
                  point :[9.90681485, 76.72578682],
                  value : 0
                },
              "3":
                {
                  point :[9.90338131, 76.72379337],
                  value : 1
                },
                
                // "9.86079307, 76.69274206" :
                
                // {
                //     isAB : true,
                //     state : "open",
                //     dependency : [[key1,key2]]
                // }
            }


function setData() {

  var points = [];
  var markers = [];
  var index = 1;
  Object.keys(data).forEach(function(k){
    console.log(data[k]);
    points.push(data[k].point);
    if(data[k].value == 1){
      markers.push({key: 'marker'.index, position: data[k].point, value: data[k].value})
    }
    index++;
  })

  return [points,markers];
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

    var result = setData();
    var point = result[0];
    // var lines = getLinesData();
    // var abs = getABData();
    
    
    
    var markersData = result[1];
    this.setState({
      point : point,
      lines : "",
      abs : "",
      markers : markersData
   })
   
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