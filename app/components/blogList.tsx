'use client'

import { useState, useMemo } from "react";
import styles from "./blogList.module.css";
import BlogDetail from "./blogDetail";

export interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const ALL_BLOGS: Blog[] = [
  { id: 1, title: "Whiskey vs Cognac: What Lagos Drinks", category: "Culture", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 18, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80" },
  { id: 2, title: "The Rise of Craft Beer in Nigeria", category: "Trends", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 15, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80" },
  { id: 3, title: "Top 5 Wines for Your Next Owambe", category: "Culture", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 12, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80" },
  { id: 4, title: "How to Store Your Spirits Right", category: "Tips", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 10, 2026", readTime: "3 min read", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80" },
  { id: 5, title: "Amaro: The Italian Bitter Taking Lagos By Storm", category: "Trends", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 8, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80" },
  { id: 6, title: "Club vs Lounge: A Night Out Guide", category: "Culture", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 5, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" },
  { id: 7, title: "Whiskey Cocktails You Can Make at Home", category: "Tips", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Feb 2, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80" },
  { id: 8, title: "A History of Palm Wine in West Africa", category: "Culture", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Jan 29, 2026", readTime: "8 min read", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80" },
  { id: 9, title: "Understanding Tequila: Beyond the Shot Glass", category: "Trends", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Jan 25, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80" },
  { id: 10, title: "Why Everyone in Lagos is Drinking Gin Now", category: "Trends", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Jan 20, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80" },
  { id: 11, title: "Mocktails That Actually Taste Good", category: "Tips", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Jan 15, 2026", readTime: "3 min read", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" },
  { id: 12, title: "Hennessy XO: Worth the Price?", category: "Culture", excerpt: "Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit", date: "Jan 10, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80" },
];

const CATEGORIES = ["All Blogs", "Culture", "Trends", "Tips"];
const SORT_OPTIONS = [
  { value: "latest", label: "Latest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "az", label: "A - Z" },
  { value: "za", label: "Z - A" },
];
const PAGE_SIZE = 9;

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("latest");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Blog | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let list = ALL_BLOGS.filter((b) => {
      const matchQ = !q || b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q);
      const matchCat = !category || b.category === category;
      return matchQ && matchCat;
    });
    if (sort === "latest") list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    else if (sort === "oldest") list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    else if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "za") list.sort((a, b) => b.title.localeCompare(a.title));
    return list;
  }, [query, category, sort]);

  const handleFilter = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setter(e.target.value);
    setVisible(PAGE_SIZE);
  };

  const featured = filtered[0];
  const grid = filtered.slice(1, visible + 1);
  const hasMore = visible + 1 < filtered.length;

  if (selected) return <BlogDetail blog={selected} onBack={() => setSelected(null)} />;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>The Quicklie Blog</h1>
        <p>Learn more about your drinks.</p>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <SearchIcon />
          <input type="text" placeholder="Search Blogs" value={query} onChange={handleFilter(setQuery)} />
        </div>
        <select value={category} onChange={handleFilter(setCategory)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c === "All Blogs" ? "" : c}>{c}</option>
          ))}
        </select>
        <select className={styles.sortSelect} value={sort} onChange={handleFilter(setSort)}>
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.noResults}>No blogs found.</div>
      ) : (
        <>
          {featured && (
            <div className={styles.featured} onClick={() => setSelected(featured)}>
              <div className={styles.featuredText}>
                <span className={styles.featuredCategory}>{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className={styles.meta}>{featured.date} • {featured.readTime}</span>
              </div>
              <img src={featured.image} alt={featured.title} />
            </div>
          )}

          <div className={styles.grid}>
            {grid.map((b) => (
              <div key={b.id} className={styles.card} onClick={() => setSelected(b)}>
                <img src={b.image} alt={b.title} />
                <div className={styles.cardBody}>
                  <span className={styles.cardCategory}>{b.category}</span>
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <span className={styles.meta}>{b.date} • {b.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreWrap}>
              <button className={styles.loadMore} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load more
              </button>
            </div>
          )}
        </>
      )}
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