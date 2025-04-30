import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function IconsSearch(title) {
    switch (title) {
      case 'Happy Customers':
        return <FaRegThumbsUp size="36" />;
      case 'Registered Members':
        return <MdPeople size="36" />;
      case 'Available Products':
        return <MdOutlineProductionQuantityLimits size="36" />;
      case 'Saved Trees':
        return <GiTreeDoor size="36" />;
    }
  }

  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={style.item}>
            <StatisticsItem
              title={title}
              total={total}
              icon={IconsSearch(title)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
