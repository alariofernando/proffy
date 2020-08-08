import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHvw9Dk6xp6nA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=7e6AlAdCi7DjW-1VjlgZF4XlqM2RRUmVCmL3-8592nI" alt="Fernando Pires"/>
                <div>
                    <strong>Fernando Alario Pires</strong>
                    <span>Música</span>
                </div>
            </header>
                <p>
                    Professor de musica
                    <br/><br/>
                    Ensina Música
                </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100</strong>
                </p>
                <button>
                    <img src={whatsIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;