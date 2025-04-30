import styles from './BlogCard.module.css';
import { formatDistanceToNow } from 'date-fns';
const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  const formattedDate = formatDistanceToNow(postedAt);

  return (
    <>
      <h2>BlogCard</h2>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img className={styles.cardPoster} src={poster} alt="card__image" />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.tag}>{tag}</span>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardText}>{description}</p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userBox}>
            <img className={styles.avatar} src={avatar} alt={userName} />
            <div>
              <h3 className={styles.userName}>{userName}</h3>
              <small className={styles.date}>{formattedDate}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
