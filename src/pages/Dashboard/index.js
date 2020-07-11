import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import { withScriptjs, withGoogleMap } from "react-google-maps";
import MapContainer from "../../components/Map";
import "./styles.scss";
import Header from '../../components/Header'
export default function Dashboard() {
  const history = useHistory();
  const MapWrapped = withScriptjs(withGoogleMap(MapContainer));

  useEffect(() => {
    if(!localStorage.getItem("id")) {
      history.push("/");
    }
  });

  return (
    <>
      <section id="dashboard">
        <Header/>
        <div className="map">
          <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </section>
    </>
  );
}
