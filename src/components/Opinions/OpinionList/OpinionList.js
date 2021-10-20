
import './OpinionList.css'
import OpinionContent from '../OpinionContent/OpinionContent.js'
import Card from '../../UI/Card/Card';
function OpinionList(props) {

    const opinionJsxContent = {
        defaultContent: (opinionList) =>
            opinionList.map((opinion, index) => (
                <OpinionContent
                    key={`${index}-opinion`}
                    title={opinion.title}
                    comment={opinion.comment}
                    note={opinion.note}
                    date={opinion.date}
                ></OpinionContent>
            ))
        ,
        notFoundContent: () => <h2>No opinions found</h2>
    }
    const opinionContent = props.opinionList.length > 0 ? opinionJsxContent.defaultContent(props.opinionList) : opinionJsxContent.notFoundContent();


    return (
        <Card className="opinions">
            {opinionContent}
        </Card>
        );
}

export default OpinionList;
