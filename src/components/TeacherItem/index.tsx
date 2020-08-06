import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = ()=> {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/37229572?s=460&u=c582816450d7548ede93d47f6c9affddf0aa2bdc&v=4" alt="Leo Schlanger"/>
        <div>
          <strong>Leo Schlanger</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Mestre da Matemática
        <br /><br />
        Conhece várias técnicas e matemática
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
} 

export default TeacherItem;