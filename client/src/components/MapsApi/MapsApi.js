import { YMaps, Map, Placemark } from "react-yandex-maps";


export function MapsApi() {
  const mapData = {
    center: [60.397129, 29.515466],
    zoom: 10,
  };
  
  const coordinates = [
    [60.397129, 29.515466],
  ];

  return (
    <YMaps>
    <Map style={{paddingTop: '200px', height: "700px", width: "250px" }} defaultState={mapData} >
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
  );
}
