import React, {useState} from 'react';
import PageHeader from '../../components/page-header';
import InputBlock from '../../components/inputs';
import TextAreaBlock from '../../components/textarea';
import SelectBlock from '../../components/select';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';


function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        {week_day:0, to:'', from:''}
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                to:'',
                from:''
            }
        ]);
    }

    return (
    <div id="page-teacher-form" className="container">
        <PageHeader title='Que incrivel que você quer dar aulas.'
        description='O primeiro passo é preencher este formulário de inscrição' />
        <main>
            <fieldset>
                <legend>Seus dados</legend>
                <InputBlock label="Nome Completo" name="name"/>
                <InputBlock label="URL do seu avatar" name="avatar"/>
                <InputBlock label="Seu número de whatsapp" name="whatsapp"/>
                <TextAreaBlock label="Sua biografia" name="bio" />
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
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
                <InputBlock label="Custa da aula por hora" name="cost"/>
            </fieldset>

            <fieldset>
                <legend>
                    Horários Disponívels
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                    </button>
                </legend>

                {scheduleItems.map(scheduleItem => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
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
                            <InputBlock name="from" label="Das" type="time" />
                            <InputBlock name="to" label="Até" type="time" />
                        </div>
                    );                    
                })}
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br />
                    Preencha todos os dados
                </p>
                <button>
                    Salvar cadastro
                </button>
            </footer>

        </main>
    </div>
    );
}

export default TeacherForm;