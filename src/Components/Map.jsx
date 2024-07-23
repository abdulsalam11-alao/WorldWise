// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function Map() {
  // const navigate = useNavigate();
  const [MapPosition] = useState([40, 0]);
  // const [searchParam, setSearchParam] = useSearchParams();
  // const lat = searchParam.get("lat");
  // const lng = searchParam.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={MapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={MapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
