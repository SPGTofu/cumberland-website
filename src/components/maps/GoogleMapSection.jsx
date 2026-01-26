import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function GoogleMapSection({ center }) {
  return (
    <GoogleMap
      mapContainerStyle={{ width: "90%", height: "100%" }}
      center={center}
      zoom={15}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}