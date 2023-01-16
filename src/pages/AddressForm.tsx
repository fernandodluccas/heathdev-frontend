import { useForm } from 'react-hook-form';
import Form from '../components/Form';
import FormGroup from '../components/FormGroup';
import { HeaderForm } from '../components/HeaderForm';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import Label from '../components/Label';
import Select from '../components/Select';
import { councilStateOptions } from './ProfessionalDataForm';
import { useData } from '../context/DataContext';
import { api } from '../api/axios';

export function AddressForm() {
  const { user, address } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: address,
  });

  function onSubmit(data: any) {
    api.patch(`address/${user.id}`, data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Informações pessoais"
        subtitle="Atualize seu endereço aqui."
        buttonText="Editar"
        handleSubmit={handleSubmit(onSubmit)}
      />
      <FormGroup>
        <Label>UF / Municipio de residência</Label>
        <InputContainer>
          <Select {...register('state', { required: true })}>
            {councilStateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Input {...register('city', { required: true })} />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Logradouro / Número / Bairro</Label>
        <InputContainer>
          <Input {...register('street', { required: true })} />
          <Input type="number" {...register('number', { required: true })} />
          <Input {...register('neighborhood', { required: true })} />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Complemento</Label>
        <InputContainer>
          <Input {...register('complement', { required: true })} />
        </InputContainer>
      </FormGroup>
    </Form>
  );
}
