import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onLeaveFeedback(option)}
          className={styles.feedbackBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
