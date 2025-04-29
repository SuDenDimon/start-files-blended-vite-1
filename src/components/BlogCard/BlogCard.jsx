import styles from './BlogCard.module.css';
const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <>
      <h2>BlogCard</h2>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            className={styles.cardPoster}
            src="<https://source.unsplash.com/600x400/?computer>"
            alt="card__image"
          />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.tag}>Technology</span>
          <h2 className={styles.cardTitle}>What's new in 2022 Tech</h2>
          <p className={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userBox}>
            <img
              className={styles.avatar}
              src="<https://i.pravatar.cc/40?img=1>"
              alt="Jane Doe"
            />
            <div>
              <h3 className={styles.userName}>Jane Doe</h3>
              <small className={styles.date}>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
