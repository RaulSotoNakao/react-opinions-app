import './OpinionFilter.css';
import Card from '../../UI/Card/Card.js'
import FormItem from '../../UI/Form/FormItem';
import VerticalSlide from '../../UI/VerticalSlide/VerticalSlide.js'
import React, { useState } from 'react';

function OpinionFilter(props) {

    const yearFilterHandler = (event) => {
        props.onYearFilterChange(event.target.value);
    }

    let listVerticalSlide = [
        { label: 'January', numberOpinions: 0 },
        { label: 'February', numberOpinions: 0 },
        { label: 'March', numberOpinions: 0 },
        { label: 'April', numberOpinions: 0 },
        { label: 'May', numberOpinions: 0 },
        { label: 'June', numberOpinions: 0 },
        { label: 'July', numberOpinions: 0 },
        { label: 'August', numberOpinions: 0 },
        { label: 'September', numberOpinions: 0 },
        { label: 'October', numberOpinions: 0 },
        { label: 'November', numberOpinions: 0 },
        { label: 'December', numberOpinions: 0 },
    ]

    const mergeVerticalSlideWithNumberOpinionsMonth = () => {
        console.log(props.opinionList)
        console.log(listVerticalSlide)
         props.opinionList.map(opinion => {
            const monthIndex = opinion.date.getMonth();
            const opinionToReplace = { ...listVerticalSlide[monthIndex], numberOpinions: listVerticalSlide[monthIndex].numberOpinions + 1 }
            return listVerticalSlide[monthIndex] = opinionToReplace
        })
    }

    const verticalSlideContentJsx = (jsx) => {
        mergeVerticalSlideWithNumberOpinionsMonth();
        
        return listVerticalSlide.map(jsx)}

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
            {verticalSlideContentJsx((slide, i) => <VerticalSlide key={`${i}-slide`} label={slide.label} slideValue={slide.numberOpinions} />)}
        </Card>
    );
}

export default OpinionFilter;
