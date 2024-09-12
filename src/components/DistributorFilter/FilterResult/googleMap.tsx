import dynamic from "next/dynamic";
import CustomImage from "@Components/Utilities/CustomImage";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import Markers from "@Components/GoogleMap/Markers";
import { useEffect, useState } from "react";

const GoogleMap = (props) => {
  const map = useMap("locations-map");
  const { locations, catsLabel, distributorsContent } = props;

  useEffect(() => {
    map?.panTo({
      lat: parseFloat(locations?.at(0)?.items?.at(0)?.lat) || 0,
      lng: parseFloat(locations?.at(0)?.items?.at(0)?.lng) || 0,
    });
  }, [locations, map]);

  return (
    <>
      <div style={{ height: "800px", width: "100%" }}>
        {locations.length > 0 ? (
          <Map
            defaultCenter={{ lat: 0, lng: 0 }}
            defaultZoom={3}
            id="locations-map"
            minZoom={3}
            streetViewControl={false}
          >
            <Markers
              locations={locations.at(0)?.items ?? []}
              catsLabel={catsLabel}
              key={`${locations.at(0)?.items?.length}-${
                locations.at(0)?.items?.at(0)?.id
              }`}
            />
          </Map>
        ) : (
          <Map
            defaultCenter={{ lat: 0, lng: 0 }}
            defaultZoom={3}
            style={{ width: "800px", height: "400px" }}
            minZoom={3}
          >
            <Markers
              locations={distributorsContent ?? []}
              catsLabel={catsLabel}
            />
          </Map>
        )}
      </div>
    </>
  );
};

export default GoogleMap;
