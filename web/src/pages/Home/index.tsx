import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <span>VACINAÇÃO CONTRA O COVID-19</span>
        <h1>PESSOAS COM DEFICIÊNCIA</h1>
        <p>
          <b>OBJETIVO:</b> Quantificar a população com deficiência visual, auditiva,
          intelectual (down, autismo) física, com o intuito de firmar parceria com as
          instituições de referência no atendimento às pessoas com deficiência para aplicação
          da vacina, tão logo haja a disponibilidade de volume para organizar o atendimento
          ao público-alvo em questão.
        </p>

        <p>
          <b>PARCERIAS:</b> Secretaria de Estado de Saúde, Secretarias Municipais de Saúde
          (a ser formalizada) e Instituições de referência que atuem no setor das pessoas com deficiência.
        </p>
      </div>

      <div>
        <Link to="/formulario">Entrar</Link>
      </div>
    </Container>
  );
}

export default Home;
