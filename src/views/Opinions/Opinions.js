import './Opinions.css';
import OpinionList from '../../components/Opinions/OpinionList/OpinionList.js';
import Card from '../../components/UI/Card/Card.js';
import OpinionFilter from '../../components/Opinions/OpinionFilter/OpinionFilter.js';
import React, { useState } from 'react';
import NewOpinion from './NewOpinion.js'

const initialPeopleOpinions = [
    {
        title: 'Wizard of pop-corns',
        comment: 'good, but more information is needed',
        date: new Date(2020, 6, 7),
        note: 5
    },
    {
        title: 'Wizard of pop-corns',
        comment: 'good, but more information is needed',
        date: new Date(2020, 7, 7),
        note: 5
    },
    {
        title: 'Wizard of pop-corns',
        comment: 'good, but more information is needed',
        date: new Date(2020, 6, 7),
        note: 5
    },
    {
        title: 'Wizard of pop-corns',
        comment: 'good, but more information is needed',
        date: new Date(2020, 7, 7),
        note: 5
    },
    {
        title: 'Wizard of pop-corns',
        comment: 'good, but more information is needed',
        date: new Date(2020, 7, 7),
        note: 5
    },
    {
        title: 'Wizard of chocolate',
        comment: 'boooring!',
        date: new Date(2019, 6, 7),
        note: 2
    },
    {
        title: 'Wizard of ice-cream',
        comment: 'good taste and amazing!',
        date: new Date(2018, 9, 8),
        note: 9
    }
];

function Opinions(props) {

    const [filteredYear, setFilteredYear] = useState('2020')


    const [peopleOpinions, setPeopleOpinions] = useState(initialPeopleOpinions)

    function parseDate(s) {
        var b = s.split(/\D/);
        return new Date(b[0], --b[1], b[2]);
    }
    const addOpinionHandler = (newOpinionHandler) => {
        const date = newOpinionHandler.date ? parseDate(newOpinionHandler.date) : undefined;
        const opinionHandlerParsed = { ...newOpinionHandler, date }
        setPeopleOpinions(prevOpinions => [...prevOpinions, opinionHandlerParsed]);
    }

    const yearFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const opinionFilteredByYear = peopleOpinions.filter(opinion => `${opinion.date && opinion.date.getFullYear()}` === filteredYear);

    return (
        <div>
            <NewOpinion onAddOpinionHandler={addOpinionHandler} />
            <Card className="opinions">
                <OpinionFilter onYearFilterChange={yearFilterChangeHandler} selected={filteredYear} opinionList={opinionFilteredByYear}></OpinionFilter>
            </Card>
            <OpinionList opinionList={opinionFilteredByYear} />
        </div>
    );
}

export default Opinions;
