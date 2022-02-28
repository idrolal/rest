import { YMaps, Map, Placemark } from "react-yandex-maps";


export function MapsApi() {
  const mapData = {
    center: [61.933582, 30.590250],
    zoom: 10,
  };
  
  const coordinates = [
    [61.933582, 30.590250],
  ];

  return (
    <YMaps>
    <Map style={{paddingTop: '200px', height: "700px", width: "250px" }} defaultState={mapData} >
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
  );
}
