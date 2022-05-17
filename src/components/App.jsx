import { useState } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import Feedback from './Feedback/Feedback';
import Controls from './Controls/Controls';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const currentBtn = e.target.value;

    switch (currentBtn) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const positiveFeedback = (good / total) * 100;

    return Math.round(positiveFeedback);
  };

  return (
    <Container>
      <h1>Please leave feedback</h1>
      <Section>
        <Controls onIncrement={handleFeedback} />
      </Section>

      <h2>Statistic</h2>
      <Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
