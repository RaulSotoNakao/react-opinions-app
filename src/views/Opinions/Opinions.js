import './Opinions.css';
import OpinionContent from '../../components/Opinions/OpinionContent/OpinionContent.js';
import Card from '../../components/UI/Card/Card.js'

function Opinions(props) {
    return (
        <Card className="opinions">
            <OpinionContent
                title={props.opinions[0].title}
                comment={props.opinions[0].comment}
                note={props.opinions[0].note}
                date={props.opinions[0].date}
            ></OpinionContent>
            <OpinionContent
                title={props.opinions[1].title}
                comment={props.opinions[1].comment}
                note={props.opinions[1].note}
                date={props.opinions[1].date}
            ></OpinionContent>
            <OpinionContent
                title={props.opinions[2].title}
                comment={props.opinions[2].comment}
                note={props.opinions[2].note}
                date={props.opinions[2].date}
            ></OpinionContent>

        </Card>
    );
}

export default Opinions;