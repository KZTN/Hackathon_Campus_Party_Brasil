import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import styles from "./GoogleMapStyles.json";
import "./styles.scss";
import CardMap from "../CardMap";
import dataset from "../../data/dataset.json";

export default function Map({ history }) {
  const [elem, setElem] = useState({ lat: -22.858608, lng: -47.0505616 });
  const [me, setMe] = useState({});
  const [PointIsSelected, setPointIsSelected] = useState(false);
  const [Point, setPoint] = useState({});
  async function getCords() {
    const apigeolocation = await fetch(
      "https://location.services.mozilla.com/v1/geolocate?key=test"
    ).then((el) => el.json());
    /*     setElem({
      lat: apigeolocation.location.lat,
      lng: apigeolocation.location.lng,
    });
    setMe({
      lat: apigeolocation.location.lat,
      lng: apigeolocation.location.lng,
    }); */
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => {
        getCords();
      },
      (err) => {
        console.log(err);
        if (err.code === 2) {
          getCords();
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }, []);
  function handleClick(point) {
    setPointIsSelected(true);
    setPoint(point);
  }
  return (
    <>
      <GoogleMap
        onClick={() => setPointIsSelected(false)}
        streetViewControl={false}
        defaultCenter={{ lat: elem.lat, lng: elem.lng }}
        zoom={16}
        defaultOptions={{
          styles: styles,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          icon={{
            url: require("./pin_me.png"),
            scaledSize: new window.google.maps.Size(60, 60),
          }}
          position={{
            lat: elem.lat,
            lng: elem.lng,
          }}
        />
        {dataset.map((point) => (
          <Marker
            onClick={() => handleClick(point)}
            icon={{
              url: require("./pin.png"),
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            position={{
              lat: point.lat,
              lng: point.lng,
            }}
          />
        ))}
      </GoogleMap>
      {PointIsSelected ? (
        <CardMap
          name={Point.name}
          address={Point.address}
          city={Point.region}
          rate={Point.rate}
          thumbnail={Point.thumbnail}
          rating={Point.rating}
          comments={Point.comments}
        />
      ) : null}
    </>
  );
}
