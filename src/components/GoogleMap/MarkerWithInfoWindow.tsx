import React, { forwardRef, useEffect, useState } from "react";
import { InfoWindow, Marker, useMarkerRef } from "@vis.gl/react-google-maps";
import { Button } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import styles from "./map.module.scss";

export const MarkerWithInfowindow = forwardRef(function MarkerWithInfowindow(
  { location, catsLabel, setInfowindowOpen, infowindowOpen },
  ref,
) {
  // const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useMarkerRef();
  return (
    <>
      <Marker
        ref={(marker) => {
          markerRef(marker);
          ref?.(marker);
        }}
        onClick={() => setInfowindowOpen(infowindowOpen ? "" : location.id)}
        position={{ lat: Number(location.lat), lng: Number(location.lng) }}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          style={{
            paddingRight: "0px",
            paddingBottom: "0px",
            maxWidth: "609px!important",
            maxHeight: "426px",
            minWidth: "0px",
            width: "270px",
          }}
          className={`${styles["acc-distributor-map-info-box"]}`}
          headerDisabled
        >
          <Button
            style={{ position: "absolute", top: 0, right: 0 }}
            variant="outline"
            onClick={() => setInfowindowOpen(false)}
          >
            <BsX size={20} />
          </Button>
          <h2 className="m-0 pb-3">{location.name}</h2>
          <p className="font-size-sm font-weight-400">{`Address: ${location.address}`}</p>
          <p className="font-size-sm font-weight-400">{`Select Industry: ${
            location.category ? location.category : catsLabel
          }`}</p>
          <p className="font-size-sm font-weight-400">{`State: ${location.state}`}</p>
        </InfoWindow>
      )}
    </>
  );
});
