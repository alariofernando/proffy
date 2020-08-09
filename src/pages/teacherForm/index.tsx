import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/page-header';
import InputBlock from '../../components/inputs';
import TextAreaBlock from '../../components/textarea';
import SelectBlock from '../../components/select';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';


function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


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

    function setScheduleItemValue(postion: number, field: string, value:string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === postion) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }


    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        console.log(
            {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost
            }
        );
    }

    return (
    <div id="page-teacher-form" className="container">
        <PageHeader title='Que incrivel que você quer dar aulas.'
        description='O primeiro passo é preencher este formulário de inscrição' />
        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>Seus dados</legend>
                <InputBlock 
                label="Nome Completo" 
                name="name" 
                value={name} 
                onChange={(e) => {setName(e.target.value);}}
                />

                <InputBlock 
                label="URL do seu avatar" 
                name="avatar" 
                value={avatar} 
                onChange={(e) => {setAvatar(e.target.value);}}
                />

                <InputBlock 
                label="Seu número de whatsapp" 
                name="whatsapp" 
                value={whatsapp} 
                onChange={(e) => {setWhatsapp(e.target.value);}}
                />

                <TextAreaBlock 
                label="Sua biografia" 
                name="bio" 
                value={bio} 
                onChange={(e) => {setBio(e.target.value);}}
                />
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
                <SelectBlock label="Matéria"
                 name="subject"
                 value={subject}
                 onChange= {(e) => {setSubject(e.target.value);}}
                 options= {[
                     {label: "Artes", value: "artes"},
                     {label: "Matemática", value: "matematica"},
                     {label: "Música", value: "musica"},
                     {label: "Português", value: "portugues"},
                     {label: "Geografia", value: "geografia"},
                     {label: "História", value: "historia"},
                     {label: "Filosofia", value: "filosofia"},
                    ]}
                />

                <InputBlock 
                label="Custa da aula por hora" 
                name="cost"
                value={cost}
                onChange={(e) => {setCost(e.target.value);}}
                />
            </fieldset>

            <fieldset>
                <legend>
                    Horários Disponívels
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                    </button>
                </legend>

                {scheduleItems.map((scheduleItem, index) => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <SelectBlock label="Dia da semana"
                            name="week_day"
                            onChange={e => {setScheduleItemValue(index, 'week_day', e.target.value)}}
                            value={scheduleItem.week_day}
                            options={[
                                {label:"Domingo", value: '0'},
                                {label:"Segunda-feira", value: '1'},
                                {label:"Terça-feira", value: '2'},
                                {label:"Quarta-feira", value: '3'},
                                {label:"Quinta-feira", value: '4'},
                                {label:"Sexta-feira", value: '5'},
                                {label:"Sábado", value: '6'},
                                
                            ]}/>
                            <InputBlock 
                            name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleItem.from}
                            onChange={e => {setScheduleItemValue(index, 'from', e.target.value)}}
                            />
                            <InputBlock 
                            name="to" 
                            label="Até" 
                            type="time"
                            value={scheduleItem.to}
                            onChange={e => {setScheduleItemValue(index, 'to', e.target.value)}} 
                            />
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
                <button type="submit">
                    Salvar cadastro
                </button>
            </footer>
            </form>
        </main>
    </div>
    );
}

export default TeacherForm;