import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import Input from '../../components/Input';

import { Container, BoxDeficiencias } from './styles';

import { FiAlertCircle } from 'react-icons/fi';

interface DeficienciasProps {
  id: string;
  tipos_deficiencias: string;
}

interface DataProps {
  id: string;
  tipos_deficiencias: string;
  acima_de_60: string;
  de_18_a_60: string;
  de_0_a_18: string;
}

const Deficientes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [tiposDeficiencias, setTiposDeficiencias] = useState<DeficienciasProps[]>([]);

  useEffect(() => {
    api.get('/deficiencias').then(response => setTiposDeficiencias(response.data));
  }, []);

  const hanleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <dd>
        <FiAlertCircle size={100} />
        Lançar a quantidade de pessoas atentidas em cada uma das deficiências abaixo,
        por faixa etária.
      </dd>
      <BoxDeficiencias>
        <form onSubmit={hanleSubmit} method="POST">
          { tiposDeficiencias.map((deficiencias) => (
            <article>
              <div className="titulo-deficiencias">
                <p>Deficiência</p>
                <span>{deficiencias.tipos_deficiencias}</span>
                <input type="text" name="id_deficiencias" id="id_deficiencias" value={deficiencias.id} />
              </div>

              <div>
                <label htmlFor="acimade60">+ de 60 anos</label>
                <input name="acima_de_60" id="acimade60" placeholder="Quantidade" />
              </div>

              <div>
                <label htmlFor="de18a60">18 a 60 anos</label>
                <input name="de_18_a_60" id="de18a60" placeholder="Quantidade"/>
              </div>

              <div>
                <label htmlFor="de0a18">0 a 18 anos</label>
                <input name="de_0_a_18" id="de0a18" placeholder="Quantidade"/>
              </div>
            </article>
          )) }

          <button type="submit">Enviar</button>
        </form>
      </BoxDeficiencias>
    </Container>
  );
}

export default Deficientes;
