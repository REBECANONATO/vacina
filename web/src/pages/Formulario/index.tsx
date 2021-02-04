import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { FiAlignLeft, FiPhone, FiList } from 'react-icons/fi';
import { FaRegBuilding, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import { Container } from './styles';

import api from '../../services/api';

interface FormProps {
  nome_instituicao: string;
  endereco: string;
  municipio: string;
  dirigente: string;
  telefone: string;
  whatsapp: string;
  possui_cnes: string;
  instituicao_possui: string;
}

const Formulario: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: FormProps) => {
    const response = await api.post('/instituicao', data);
    history.push(`/deficiencias/${response.data.id}`);

  }, []);

  return (
    <Container>
      <h1>FORMULÁRIO DE INFORMAÇÕES PARA LOGÍSTICA E ORGANIZAÇÃO DA CAMPANHA</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input icon={FiAlignLeft} label="Instituição" name="nome_instituicao" />
          <Input icon={FaRegBuilding} label="Endereço" name="endereco" />
          <Input icon={FiAlignLeft} label="Município" name="municipio" />
          <Input icon={CgProfile} label="Dirigente" name="dirigente" />
        </div>

        <div>
          <InputMask mask="(99) 9999-9999" icon={FiPhone} label="Telefone" name="telefone" />
          <InputMask mask="(99) 99999-9999" icon={FaWhatsapp} label="WhatsApp" name="whatsapp" />
          <Input icon={AiOutlineFieldNumber} label="Possui CNES?" name="possui_cnes" />
          <Input icon={FiList} label="Instituição Possui:" name="instituicao_possui" />
        </div>

        <button type="submit">Avançar</button>
      </Form>
    </Container>
  );
}

export default Formulario;
