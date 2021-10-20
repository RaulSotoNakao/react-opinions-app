import './OpinionFilter.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem';
import VerticalSlide from '../../UI/VerticalSlide/VerticalSlide.js'
import React, { useState } from 'react';

function OpinionFilter(props) {

    const [yearSelected, setYearSelected] = useState({ year: '0' });

    const yearFilterHandler = (event) => {
        console.log(event.target.value);
        setYearSelected({ year: event.target.value })
    }

    return (
        <Card className="opinion-filter">
            <Card className="opinion-filter">
                <FormItem label="Filter Opinion by year">
                    <select name="select" onChange={yearFilterHandler}>
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
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
