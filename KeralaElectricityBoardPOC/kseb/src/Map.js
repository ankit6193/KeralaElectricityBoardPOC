import React, { Component } from 'react'
import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

const center = [9.8, 76.5]

const polyline = [[9.86079307, 76.69274206], [9.90681485, 76.72578682], [9.90338131, 76.72379337]]

// const multiPolyline = [
//   [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
//   [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
// ]


export default class VectorLayersExample extends Component<{}> {
  render() {
    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline color="red" positions={polyline} />
        {/* <Polyline color="red" positions={multiPolyline} /> */}
       
      </Map>
    )
  }
}