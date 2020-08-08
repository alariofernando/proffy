import React from 'react';

import './styles.css';
import PageHeader from '../../components/page-header';
import TeacherItem from '../../components/teacher-item';
import InputBlock from '../../components/inputs';
import SelectBlock from '../../components/select';

function TeacherList() {
    return (
    <div id="page-teacher-list" className="container">
        <PageHeader title='Estes são os Proffys disponíveis'>
            <form id="search-teachers">
                <SelectBlock label="Matéria"
                 name="subject"
                 options= {[
                     {label: "Artes", value: "artes"},
                     {label: "Matemática", value: "matematica"},
                     {label: "Música", value: "musica"},
                     {label: "Português", value: "portugues"},
                     {label: "Geografia", value: "geografia"},
                     {label: "História", value: "historia"},
                     {label: "Filosofia", value: "filosofia"},

                 ]}/>
                <SelectBlock label="Dia da semana"
                 name="week_day"
                 options={[
                    {label:"Domingo", value: '0'},
                    {label:"Segunda-feira", value: '1'},
                    {label:"Terça-feira", value: '2'},
                    {label:"Quarta-feira", value: '3'},
                    {label:"Quinta-feira", value: '4'},
                    {label:"Sexta-feira", value: '5'},
                    {label:"Sábado", value: '6'},
                    
                 ]}/>
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