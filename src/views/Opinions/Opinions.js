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

    const opinionFilteredByYear = props.opinions.filter(opinion => `${opinion.date && opinion.date.getFullYear()}` === filteredYear);
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
    const opinionContent = opinionFilteredByYear.length > 0 ? opinionJsxContent.defaultContent(opinionFilteredByYear) : opinionJsxContent.notFoundContent();

    return (
        <div>
            <Card className="opinions">
                <OpinionFilter onYearFilterChange={yearFilterChangeHandler} selected={filteredYear}></OpinionFilter>
            </Card>
            <Card className="opinions">
                {opinionContent}
            </Card>
        </div>
    );
}

export default Opinions;
