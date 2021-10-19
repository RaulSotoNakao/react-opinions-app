
import './OpinionDate.css'

function OpinionDate(props) {

  const monthDate = props.date.toLocaleDateString('en-US', { month: 'long' });
  const dayDate = props.date.toLocaleDateString('en-US', { day: '2-digit' });
  const yearDate = props.date.toLocaleDateString('en-US', { year: 'numeric' });

  return (
      <p className="opinion-paragraph-date">
        {dayDate} {monthDate}  {yearDate}
      </p>
  );
}

export default OpinionDate;
