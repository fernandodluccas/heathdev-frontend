import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Select from '../components/Select';
import Form from '../components/Form';
import FormGroup from '../components/FormGroup';
import Label from '../components/Label';
import InputContainer from '../components/InputContainer';
import { Checkbox, CheckboxWrapper } from '../components/ToggleButton';
import { HeaderForm } from '../components/HeaderForm';
import { ChangeEvent, useState } from 'react';
import { useData } from '../context/DataContext';
import { api } from '../api/axios';

const councilOptions = ['CRM', 'CRO', 'COREN'];

export const councilStateOptions = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO',
];

const specialtyOptions = [
  'Cardiologia',
  'Cirurgia Cardíaca',
  'Cirurgia Geral',
  'Cirurgia Pediátrica',
  'Dermatologia',
  'Endocrinologia',
  'Gastroenterologia',
  'Geriatria',
  'Ginecologia',
  'Hematologia',
  'Infectologia',
  'Nefrologia',
  'Neurologia',
  'Oncologia',
  'Ortopedia',
  'Otorrinolaringologia',
  'Pediatria',
  'Pneumologia',
  'Psiquiatria',
  'Reumatologia',
  'Urologia',
];

export function ProfessionalDataForm() {
  const { user, professionalData } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: professionalData,
  });

  const [active, setActive] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked);
  };

  const onSubmit = (data: any) => {
    api.patch(`professional-data/${user.id}`, data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Informações pessoais"
        subtitle="Atualize seus dados profissionais aqui."
        buttonText="Editar"
        handleSubmit={handleSubmit(onSubmit)}
      />
      <FormGroup>
        <Label>Conselho / Estado conselho</Label>
        <InputContainer>
          <Select {...register('council', { required: true })}>
            {councilOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select {...register('councilState', { required: true })}>
            {councilStateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Número do Conselho</Label>
        <InputContainer>
          <Input
            type="number"
            {...register('councilNumber', { required: true })}
          />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Especialidade / RQE</Label>
        <InputContainer>
          <Select {...register('specialty', { required: true })}>
            {specialtyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Input type="number" {...register('rqe', { required: true })} />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>ID user / Sincronização MEMED</Label>
        <InputContainer>
          <Input type="number" {...register('idUser', { required: true })} />
          <CheckboxWrapper>
            <Checkbox
              type="checkbox"
              checked={active}
              active={active}
              {...register('memedSync')}
              onChange={(e) => handleChange(e)}
            />
            <label>{active ? 'Ativo' : 'Inativo'}</label>
          </CheckboxWrapper>
        </InputContainer>
      </FormGroup>
    </Form>
  );
}
