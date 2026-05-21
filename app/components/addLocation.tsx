"use client";

import { useState } from "react";
import { LuMapPin, LuPlus } from "react-icons/lu";
import dynamic from "next/dynamic";

import styles from "./addLocation.module.css";

const MapView = dynamic(() => import("./mapView"), {
  ssr: false,
});

interface Props {
  state: string;
}

interface LocationData {
  lat: number;
  lng: number;
  address: string;
}

export default function AddLocation({ state }: Props) {
  const [active, setActive] = useState(state);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState<LocationData>({
    lat: 6.5244,
    lng: 3.3792,
    address: "Lagos",
  });

  const searchAddress = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );

      const data = await res.json();

      if (data.length > 0) {
        const result = data[0];

        setLocation({
          lat: Number(result.lat),
          lng: Number(result.lon),
          address: result.display_name,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.checkoutItemDetails}>
        <span>
          <LuMapPin /> Deliver to
        </span>

        <p>75, Lamidi lane, Ikeja, Lagos.</p>
      </div>

      <div
        className={styles.checkoutItemButton}
        onClick={() => setActive("selectLocation")}
      >
        Change Location
      </div>

      {/* SELECT LOCATION MODAL */}
      {active === "selectLocation" && (
        <div className={styles.itemModal}>
          <div className={styles.itemModalContent}>
            <h3>Select Location</h3>

            <div className={styles.locations}>
              <div className={styles.locationOption}>
                <div>
                  <span>
                    <LuMapPin /> Home
                  </span>
                  <p>75, Lamidi lane, Ikeja, Lagos.</p>
                </div>
                <input type="radio" name="location" />
              </div>

              <div className={styles.locationOption}>
                <div>
                  <span>
                    <LuMapPin /> Work
                  </span>
                  <p>75, Lamidi lane, Ikeja, Lagos.</p>
                </div>
                <input type="radio" name="location" />
              </div>
            </div>

            <button
              className={styles.addLocationButton}
              onClick={() => setActive("addLocation")}
            >
              <LuPlus /> Add New Location
            </button>

            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setActive("default")}
              >
                Cancel
              </button>

              <button
                className={styles.confirmButton}
                onClick={() => setActive("default")}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD LOCATION MODAL */}
      {active === "addLocation" && (
        <div className={styles.addLocationModal}>
          <div className={styles.addLocationModalContent}>
            <h3>Add New Location</h3>

            <div className={styles.addLocationForm}>
              <div className={styles.map}>
                <MapView
                  lat={location.lat}
                  lng={location.lng}
                  address={location.address}
                />
              </div>

              <div className={styles.address}>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button onClick={searchAddress}>
                  {loading ? "Searching..." : "Search"}
                </button>

                <input type="text" placeholder="Label For Address" />

                <p>Selected: {location.address}</p>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setActive("selectLocation")}
              >
                Cancel
              </button>

              <button
                className={styles.confirmButton}
                onClick={() => setActive("default")}
              >
                Save Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}