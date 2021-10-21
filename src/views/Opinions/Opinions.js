import './Opinions.css';
import OpinionList from '../../components/Opinions/OpinionList/OpinionList.js';
import Card from '../../components/UI/Card/Card.js';
import OpinionFilter from '../../components/Opinions/OpinionFilter/OpinionFilter.js';
import React, { useState } from 'react';


function Opinions(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const yearFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const opinionFilteredByYear = props.opinions.filter(opinion => `${opinion.date && opinion.date.getFullYear()}` === filteredYear);

    return (
        <div>
            <Card className="opinions">
                <OpinionFilter onYearFilterChange={yearFilterChangeHandler} selected={filteredYear} opinionList={opinionFilteredByYear}></OpinionFilter>
            </Card>
            <OpinionList opinionList={opinionFilteredByYear} />
        </div>
    );
}

export default Opinions;
