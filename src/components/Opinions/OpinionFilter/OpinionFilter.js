import './OpinionFilter.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem';
import VerticalSlide from '../../UI/VerticalSlide/VerticalSlide.js'

function OpinionFilter(props) {

    const yearFilterHandler = (event) => {
        props.onYearFilterChange(event.target.value);
    }

    return (
        <Card className="opinion-filter">
            <Card className="opinion-filter">
                <FormItem label="Filter Opinion by year">
                    <select value={props.selected} onChange={yearFilterHandler}>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2000">2000</option>
                    </select>
                </FormItem>
            </Card>
            <VerticalSlide label="January" />
            <VerticalSlide label="February" />
            <VerticalSlide label="March" />
            <VerticalSlide label="April" />
            <VerticalSlide label="May" />
            <VerticalSlide label="June" />
            <VerticalSlide label="July" />
            <VerticalSlide label="August" />
            <VerticalSlide label="September" />
            <VerticalSlide label="October" />
            <VerticalSlide label="November" />
            <VerticalSlide label="December" />
        </Card>
    );
}

export default OpinionFilter;
