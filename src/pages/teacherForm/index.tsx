import React from 'react';
import PageHeader from '../../components/page-header';

import './styles.css';
import InputBlock from '../../components/inputs';

function TeacherForm() {
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
            </fieldset>
        </main>
    </div>
    );
}

export default TeacherForm;