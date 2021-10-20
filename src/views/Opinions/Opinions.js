import './Opinions.css';
import OpinionContent from '../../components/Opinions/OpinionContent/OpinionContent.js';
import Card from '../../components/UI/Card/Card.js';
import OpinionFilter from '../../components/Opinions/OpinionFilter/OpinionFilter.js';
import React, { useState } from 'react';


function Opinions(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const yearFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }


    const opinionStructure = (arrowFunctionJsx) => props.opinions
        .filter(opinion => `${opinion.date && opinion.date.getFullYear()}` === filteredYear)
        .map(arrowFunctionJsx)

    return (
        <div>
            <Card className="opinions">
                <OpinionFilter onYearFilterChange={yearFilterChangeHandler} selected={filteredYear}></OpinionFilter>
            </Card>
            <Card className="opinions">
                {opinionStructure((opinion, index) => (
                    <OpinionContent
                        key={`${index}-opinion`}
                        title={opinion.title}
                        comment={opinion.comment}
                        note={opinion.note}
                        date={opinion.date}
                    ></OpinionContent>
                ))}
            </Card>
        </div>
    );
}

export default Opinions;
