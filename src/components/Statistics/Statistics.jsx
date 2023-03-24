import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={styles.feedbackList}>
    <li className={styles.feedbackListItem}>Good: {good}</li>
    <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
    <li className={styles.feedbackListItem}>Bad: {bad}</li>
    <li className={styles.feedbackListItem}>Total: {total}</li>
    <li className={styles.feedbackListItem}>
      Positive feedback: {positivePercentage} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
