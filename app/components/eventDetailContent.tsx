'use client'

import { useState, useEffect, useCallback } from "react";
import styles from "./eventDetailContent.module.css";
import { LuScissors } from "react-icons/lu";

const photos = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1200&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
];

const thumbs = photos.map((p) => p.replace("w=1200", "w=600"));

export default function EventDetailContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const shift = useCallback(
    (dir: number) => {
      if (lightboxIndex === null) return;
      setLightboxIndex((lightboxIndex + dir + photos.length) % photos.length);
    },
    [lightboxIndex]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") shift(-1);
      if (e.key === "ArrowRight") shift(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, shift]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className= {styles.container}>
        <div className={styles.page}>
        <div className={styles.hero} />

        <div className={styles.infoCard}>
            <div className={styles.infoLeft}>
            <h1 className={styles.title}>Lagos Night Out</h1>

            <div className={styles.metaRow}>
                <div className={styles.metaGroup}>
                <div className={styles.metaLabel}>
                    <CalendarIcon />
                    Date and Time
                </div>
                <div className={styles.metaValue}>
                    <span>Monday, June 21, 2025</span>
                    <span>8:00 PM – 00:00 AM</span>
                </div>
                </div>

                <div className={styles.metaGroup}>
                <div className={styles.metaLabel}>
                    <LocationIcon />
                    Location
                </div>
                <div className={styles.metaValue}>
                    <span>99, Floriana Crescent, Victoria Island, Lagos</span>
                </div>
                </div>

                <div className={styles.metaGroup}>
                <div className={styles.metaLabel}>
                    <KeyIcon />
                    Mode of Access
                </div>
                <div className={styles.metaValue}>
                    <span>Tickets</span>
                </div>
                </div>
            </div>

            <div className={styles.tags}>
                <span className={styles.tag}>Music</span>
                <span className={styles.tag}>Celebrity Performance</span>
            </div>
            </div>

            <div className={styles.infoDivider}>
            <span className={styles.scissors}><LuScissors/></span>
            </div>

            <div className={styles.infoRight}>
            <p>View Full Event Experience At</p>
            <a href="https://www.lagniteout.com" target="_blank" rel="noreferrer">
                www.lagniteout.com
            </a>
            <button
                className={styles.btn}
                onClick={() => window.open("https://www.lagniteout.com", "_blank")}
            >
                Go now
            </button>
            </div>
        </div>

        <div className={styles.bodySection}>
            <div className={styles.desc}>
            <p>
                Step into the glitz and energy of a Lagos night. This BYOB party
                channels the highlife of Victoria Island. Expect amapiano and
                afrobeats shaking the floor, LED lights setting the mood, and a
                table full of assorted bottles.
            </p>
            <p>
                No Bottles? No Wahala – Just Hit Up Quickie For Fast Chilled
                Delivery. Your Lagos Night Starts When Your Bottle Lands.
            </p>
            </div>

            <div className={styles.hostBlock}>
            <h3 className={styles.hostTitle}>Host</h3>
            <div className={styles.hostCard}>
                <div className={styles.hostInfo}>
                <h4>MC TooPreezy</h4>
                <p>The Number One Party-Planner In All Of Lagos</p>
                </div>
                <div className={styles.hostAvatar} />
            </div>
            </div>
        </div>

        <div className={styles.photosSection}>
            <h2>Photos And Images</h2>
            <div className={styles.photosGrid}>
            {thumbs.map((src, i) => (
                <div
                key={i}
                className={`${styles.photo} ${i === 0 ? styles.photoLarge : ""}`}
                onClick={() => openLightbox(i)}
                >
                <img src={src} alt={`Event photo ${i + 1}`} />
                <div className={styles.photoOverlay}>
                    <span>View</span>
                </div>
                </div>
            ))}
            </div>
        </div>

        {lightboxIndex !== null && (
            <div className={styles.lightbox} onClick={closeLightbox}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
                &#x2715;
            </button>
            <img
                src={photos[lightboxIndex]}
                alt=""
                onClick={(e) => e.stopPropagation()}
            />
            <div
                className={styles.lightboxNav}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={() => shift(-1)}>&#8249;</button>
                <button onClick={() => shift(1)}>&#8250;</button>
            </div>
            </div>
        )}
        </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}