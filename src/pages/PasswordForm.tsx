import { useForm } from 'react-hook-form';
import { api } from '../api/axios';
import Form from '../components/Form';
import FormGroup from '../components/FormGroup';
import { HeaderForm } from '../components/HeaderForm';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import Label from '../components/Label';
import { useData } from '../context/DataContext';

export function PassowrdForm() {
  const { user } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user.username,
      password: '********',
    },
  });

  function onSubmit(data: any) {
    api.patch(`users/${user.id}`, data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Informações pessoais"
        subtitle="Atualize sua senha aqui."
        buttonText="Mudar senha"
        handleSubmit={handleSubmit(onSubmit)}
      />
      <FormGroup>
        <Label>Usuário / Senha</Label>
        <InputContainer>
          <Input {...register('username', { required: true })} />
          <Input
            type="password"
            {...register('password', { required: true })}
          />
        </InputContainer>
      </FormGroup>
    </Form>
  );
}
