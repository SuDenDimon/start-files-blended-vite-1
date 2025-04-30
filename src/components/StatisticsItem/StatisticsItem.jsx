import style from './StatisticsItem.module.css';
const StatisticsItem = ({ title, total, icon }) => {
  return (
    <>
      <h3>StatisticsItem</h3>
      <div>{icon}</div>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
