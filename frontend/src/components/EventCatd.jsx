import styles from './EventCard.module.css';

const EventCard = ({
  title,
 date,
 description,
 location,
  ...rest
}) => {

  
  return (
    <>
    <div className={styles.card}>
        <p>{title}</p>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
    </div>
    </>
  )
};

export default EventCard;
