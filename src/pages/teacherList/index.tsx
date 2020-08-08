import React from 'react';

import './styles.css';
import PageHeader from '../../components/page-header';
import TeacherItem from '../../components/teacher-item';
import InputBlock from '../../components/inputs'

function TeacherList() {
    return (
    <div id="page-teacher-list" className="container">
        <PageHeader title='Estes são os Proffys disponíveis'>
            <form id="search-teachers">
                <InputBlock label="Matéria" name="subject"/>
                <InputBlock label="Dia da semana" name="week_day"/>
                <InputBlock label="Hora" name="time" type="time"/>
                
            </form>
        </PageHeader>
        <main>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </main>
    </div>
    )
}

export default TeacherList;