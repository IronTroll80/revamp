import styles from "./blogDetail.module.css";
import type { Blog } from "./blogList";

interface Props {
  blog: Blog;
  onBack: () => void;
}

const BODY_PARAGRAPHS = [
  "Lagos has long had a complicated relationship with its drinks. From the roadside mai-shayi stalls of the mainland to the rooftop bars of Victoria Island, what you drink says a lot about who you are and where you are going. In the last decade, two spirits have been locked in quiet competition for the soul of the city: whiskey and cognac.",
  "Cognac — led almost entirely by Hennessy — has dominated the premium nightlife market in Lagos for years. Walk into any high-end lounge from Quilox to Ozumba Mbadiwe and the table next to you almost certainly has a bottle of XO sweating in an ice bucket. Hennessy became more than a drink; it became a status symbol, embedded in Afrobeats lyrics, music videos, and the visual language of a generation that wanted the world to know it had arrived.",
  "Whiskey, on the other hand, arrived more quietly. Jameson crept in through the Irish pub network first, then spread into cocktail culture. Glenfiddich and Macallan followed, finding their audience among a slightly older, often more travelled Lagos professional class. Where cognac is for the turn-up, whiskey became the drink of the quiet flex — the bottle you put on the table when you want people to know without saying.",
  "The interesting thing happening right now is that these lines are blurring. A new generation of drinkers in Lagos is more curious and less tribal about what goes in their glass. They will order a Hennessy VSOP on Friday and a Johnnie Walker Blue on Saturday without any contradiction. They follow bartenders on Instagram. They watch cocktail reels. They ask questions.",
  "This shift is partly generational and partly economic. Premium spirits have become more accessible in Lagos — both through formal retail and through fast delivery platforms like Quicklie. When you can get a bottle of Redbreast 12 or a Hennessy Paradis to your table in under an hour, the conversation changes from 'what can I get' to 'what do I actually want'.",
  "So what does Lagos drink? The honest answer is: increasingly, both. And the next generation of Lagos drinkers is less interested in picking a side than in learning what makes each one special.",
];

export default function BlogDetail({ blog, onBack }: Props) {
  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={onBack}>
        <BackIcon /> Back to Blog
      </button>

      <div className={styles.hero}>
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{blog.category}</span>
        <h1>{blog.title}</h1>
        <div className={styles.meta}>
          <span>{blog.date}</span>
          <span className={styles.dot}>•</span>
          <span>{blog.readTime}</span>
        </div>

        <div className={styles.body}>
          {BODY_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.back} onClick={onBack}>
            <BackIcon /> Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}