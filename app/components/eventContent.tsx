'use client'

import { useState, useMemo } from "react";
import styles from "./eventContent.module.css";
import HomeEvent from "./homeEvent";

interface Event {
  id: number;
  title: string;
  tag: string;
  date: string;
  location: string;
  time: string;
  tickets: string;
  desc: string;
}

const ALL_EVENTS: Event[] = [
  { id: 1, title: "Palmwine and Dine Festival", tag: "Wine & Dine", date: "2025-06-15", location: "Marquee, Victoria Island", time: "8PM - 1AM", tickets: "Tickets", desc: "Vibes, Palmwine, Suya and Afrobeats. Come rep your culture at the palmwine and dine festival 2.0. Let's keep it lit." },
  { id: 2, title: "Afrobeats Night Out", tag: "Music", date: "2025-06-20", location: "Eko Hotel, VI", time: "9PM - 2AM", tickets: "Tickets", desc: "The biggest Afrobeats night in Lagos returns. Dance floor guaranteed to be packed." },
  { id: 3, title: "Lagos Tech Summit", tag: "Tech", date: "2025-07-05", location: "Landmark Event Centre", time: "9AM - 5PM", tickets: "Free", desc: "Join top tech leaders and innovators for a full day of talks, workshops, and networking." },
  { id: 4, title: "Art & Soul Exhibition", tag: "Art", date: "2025-07-12", location: "Nike Art Gallery, Lekki", time: "11AM - 7PM", tickets: "Tickets", desc: "A curated exhibition featuring works from emerging and established Nigerian artists." },
  { id: 5, title: "Garden Party Brunch", tag: "Wine & Dine", date: "2025-07-19", location: "Terra Kulture, Victoria Island", time: "11AM - 4PM", tickets: "Tickets", desc: "A relaxed garden brunch featuring gourmet food, live music, and art." },
  { id: 6, title: "Lagos Sports Fiesta", tag: "Sports", date: "2025-07-26", location: "Teslim Balogun Stadium", time: "10AM - 6PM", tickets: "Free", desc: "Competitions across football, basketball, athletics and more open to all." },
  { id: 7, title: "Jazz & Wine Evening", tag: "Wine & Dine", date: "2025-08-02", location: "Radisson Blu, Ikeja", time: "7PM - 11PM", tickets: "Tickets", desc: "An elegant evening of live jazz accompanied by a curated wine and tapas selection." },
  { id: 8, title: "Hip Hop Fest Lagos", tag: "Music", date: "2025-08-10", location: "Balmoral Events Centre", time: "8PM - 2AM", tickets: "Tickets", desc: "The biggest Hip Hop concert Lagos has seen. Featuring artists from across Africa." },
  { id: 9, title: "Product Design Summit", tag: "Tech", date: "2025-08-15", location: "Co-Creation Hub, Yaba", time: "10AM - 5PM", tickets: "Free", desc: "A day-long summit for designers, PMs, and builders to share ideas and tools." },
  { id: 10, title: "Street Food Festival", tag: "Wine & Dine", date: "2025-08-22", location: "Muri Okunola Park, VI", time: "12PM - 9PM", tickets: "Free", desc: "Taste Lagos street food culture at its finest. 50+ vendors, live performances, and good vibes." },
  { id: 11, title: "Contemporary Art Fair", tag: "Art", date: "2025-09-01", location: "Eko Convention Centre", time: "10AM - 8PM", tickets: "Tickets", desc: "Nigeria's largest contemporary art fair featuring over 100 artists and galleries." },
  { id: 12, title: "Sip & Paint Night", tag: "Art", date: "2025-09-07", location: "Harbour Point, VI", time: "6PM - 10PM", tickets: "Tickets", desc: "Unwind with wine in hand and create your own canvas painting guided by a professional artist." },
  { id: 13, title: "Fintech Forum 2025", tag: "Tech", date: "2025-09-14", location: "Eko Hotel, VI", time: "8AM - 4PM", tickets: "Free", desc: "Nigeria's leading fintech forum, bringing together banking, startups, and regulators." },
  { id: 14, title: "Lagos Food & Wine Festival", tag: "Wine & Dine", date: "2025-09-21", location: "Oceanview, Lekki", time: "2PM - 10PM", tickets: "Tickets", desc: "A premium festival celebrating the best of Nigerian cuisine and curated wines." },
  { id: 15, title: "Afrofusion Dance Battle", tag: "Music", date: "2025-09-28", location: "Freedom Park, Lagos Island", time: "4PM - 10PM", tickets: "Free", desc: "Watch the best dancers battle it out in a mix of Afrobeats, Amapiano, and street styles." },
  { id: 16, title: "Startup Pitch Night", tag: "Tech", date: "2025-10-04", location: "Co-Creation Hub, Yaba", time: "5PM - 9PM", tickets: "Free", desc: "Early stage startups pitch to investors and win funding to grow their ideas." },
  { id: 17, title: "Nigerian Film Premiere", tag: "Art", date: "2025-10-11", location: "Genesis Cinema, Lekki", time: "6PM - 10PM", tickets: "Tickets", desc: "An exclusive red carpet premiere of the most anticipated Nigerian film of the year." },
  { id: 18, title: "Wellness & Yoga Retreat", tag: "Sports", date: "2025-10-18", location: "Ilashe Beach, Lagos", time: "7AM - 2PM", tickets: "Tickets", desc: "A half-day wellness retreat combining yoga, meditation, and healthy meals by the water." },
  { id: 19, title: "Detty December Kickoff", tag: "Music", date: "2025-12-01", location: "Eko Atlantic, VI", time: "9PM - 4AM", tickets: "Tickets", desc: "The official start of Detty December Lagos. International and local acts, massive stage production." },
  { id: 20, title: "New Year's Eve Gala", tag: "Wine & Dine", date: "2025-12-31", location: "Civic Centre, Victoria Island", time: "9PM - 4AM", tickets: "Tickets", desc: "Ring in 2026 at the most exclusive New Year's Eve gala in Lagos. Black tie event." },
  { id: 21, title: "Maker Faire Lagos", tag: "Tech", date: "2025-10-25", location: "UNILAG, Akoka", time: "10AM - 6PM", tickets: "Free", desc: "A festival of invention and creativity, showcasing makers, builders, and tinkerers." },
  { id: 22, title: "CrossFit Open Lagos", tag: "Sports", date: "2025-11-01", location: "Lekki Phase 1", time: "8AM - 2PM", tickets: "Free", desc: "Compete in Lagos' biggest CrossFit open competition across multiple categories." },
  { id: 23, title: "Spoken Word Night", tag: "Art", date: "2025-11-08", location: "The Wheatbaker Hotel", time: "7PM - 11PM", tickets: "Tickets", desc: "An evening of poetry, storytelling, and spoken word from Lagos' most gifted voices." },
  { id: 24, title: "Highlife Revival Concert", tag: "Music", date: "2025-11-15", location: "MUSON Centre, Onikan", time: "7PM - 12AM", tickets: "Tickets", desc: "Celebrating the golden era of Highlife music with legendary and new generation artists." },
  { id: 25, title: "Lagos Marathon Expo", tag: "Sports", date: "2025-11-22", location: "Eko Hotel, VI", time: "9AM - 5PM", tickets: "Free", desc: "Pick up your race pack and visit exhibitors at the official Lagos Marathon pre-race expo." },
];

const PER_PAGE = 5;
const CATEGORIES = ["All Events", "Wine & Dine", "Music", "Tech", "Art", "Sports"];
const SORT_OPTIONS = [
  { value: "latest", label: "Latest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "az", label: "A - Z" },
  { value: "za", label: "Z - A" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleString("en", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    year: d.getFullYear(),
  };
}

export default function EventContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let result = ALL_EVENTS.filter((e) => {
      const matchQ = !q || e.title.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q) || e.location.toLowerCase().includes(q);
      const matchCat = !category || e.tag === category;
      return matchQ && matchCat;
    });

    if (sort === "latest") result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    else if (sort === "oldest") result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    else if (sort === "az") result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "za") result.sort((a, b) => b.title.localeCompare(a.title));

    return result;
  }, [query, category, sort]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilter = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setter(e.target.value);
    setPage(1);
  };

  const pageNumbers = () => {
    const pages: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 5 && i > 3 && i < totalPages) {
        if (pages[pages.length - 1] !== "...") pages.push("...");
        continue;
      }
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className= {styles.container}>
        <div className = {styles.hero}></div>
        <div className={styles.wrapper}>
        
        <div className={styles.controls}>
            <div className={styles.searchBox}>
            <SearchIcon />
            <input
                type="text"
                placeholder="Search Events"
                value={query}
                onChange={handleFilter(setQuery)}
            />
            </div>
            <select value={category} onChange={handleFilter(setCategory)}>
            {CATEGORIES.map((c) => (
                <option key={c} value={c === "All Events" ? "" : c}>{c}</option>
            ))}
            </select>
            <select className={styles.sortSelect} value={sort} onChange={handleFilter(setSort)}>
            {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
            </select>
        </div>

        <div className= {styles.sectionTitle}>
            <div>
                <p>Our top Picks</p>
                <h2>Quicklie's Top Events</h2>
            </div>
        </div>
        <HomeEvent showTitle = {false}/>

        <div className={styles.eventsList}>
            {pageItems.length === 0 ? (
            <div className={styles.noResults}>No events found.</div>
            ) : (
            pageItems.map((e) => {
                const d = formatDate(e.date);
                return (
                <div key={e.id} className={styles.eventItem}>
                    <div className={styles.eventDate}>
                    <span className={styles.month}>{d.month}</span>
                    <span className={styles.day}>{d.day}</span>
                    <span className={styles.year}>{d.year}</span>
                    </div>

                    <div className={styles.eventImgPlaceholder} />

                    <div className={styles.eventBody}>
                    <span className={styles.eventTag}>{e.tag}</span>
                    <div className={styles.eventTitle}>{e.title}</div>
                    <div className={styles.eventMeta}>
                        <span><LocationIcon /> {e.location}</span>
                        <span><ClockIcon /> {e.time}</span>
                        <span><TicketIcon /> {e.tickets}</span>
                    </div>
                    <p className={styles.eventDesc}>{e.desc}</p>
                    </div>

                    <div className={styles.eventActions}>
                    <button className={styles.btnOutline}>Event Details</button>
                    <button className={styles.btnSolid}>Buy Ahead</button>
                    </div>
                </div>
                );
            })
            )}
        </div>

        {pageItems.length > 0 && (
            <>
            <p className={styles.pageInfo}>
                Showing {pageItems.length} of {filtered.length}
            </p>
            {totalPages > 1 && (
                <div className={styles.pagination}>
                <button className={styles.pgBtn} onClick={() => goPage(page - 1)} disabled={page === 1}>
                    &#8249;
                </button>
                {pageNumbers().map((p, i) =>
                    p === "..." ? (
                    <button key={`dots-${i}`} className={`${styles.pgBtn} ${styles.dots}`}>...</button>
                    ) : (
                    <button
                        key={p}
                        className={`${styles.pgBtn} ${p === page ? styles.active : ""}`}
                        onClick={() => goPage(p as number)}
                    >
                        {p}
                    </button>
                    )
                )}
                <button className={styles.pgBtn} onClick={() => goPage(page + 1)} disabled={page === totalPages}>
                    &#8250;
                </button>
                </div>
            )}
            </>
        )}
        </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M2 9a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" /><path d="M16 2v4M8 2v4" />
    </svg>
  );
}