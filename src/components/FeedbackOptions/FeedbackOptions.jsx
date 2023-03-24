import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option) => (
        <button
          key={shortid.generate()}
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
