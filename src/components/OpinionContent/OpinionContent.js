
import './OpinionContent.css'
import OpinionDate from '../OpinionDate/OpinionDate.js'

function OpinionContent(props) {

  return (
    <div className="opinion-body">
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
    </div>

  );
}

export default OpinionContent;
