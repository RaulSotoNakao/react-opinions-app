
import './OpinionContent.css'
import OpinionDate from '../OpinionDate/OpinionDate.js'
import Card from '../../UI/Card/Card';

function OpinionContent(props) {

  return (
    <Card className="opinion-body">
      <div className="opinion-side-section">
        <div className="opinion-item-date">
          <OpinionDate date={props.date} />
        </div>
      </div>
      <div className="opinion-content-section">
        <div className="opinion-content-item">
          <p className="opinion-content-paragraph">
            {props.title}
          </p>
        </div>
        <div className="opinion-content-item">
          <p className="opinion-content-paragraph">
            {props.comment}
          </p>
        </div>
        <div className="opinion-content-item">
          <p className="opinion-content-paragraph">
            {props.note}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default OpinionContent;
