import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from '../components/Form';
import FormGroup from '../components/FormGroup';
import { HeaderForm } from '../components/HeaderForm';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import Label from '../components/Label';
import Select from '../components/Select';
import { ReactComponent as CloudUp } from '../icons/cloud_up.svg';
import { useData } from '../context/DataContext';
import { api } from '../api/axios';

const FormText = styled.p`
  font-size: 14px;
  color: #909090;
`;

const FormPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
`;

const PhotoInputWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  cursor: pointer;

  & > input[type='file'] {
    display: none;
  }
`;
const IconWrapper = styled.div`
  background: rgba(1, 167, 204, 0.16);
  padding: 6px 8px;
  border-radius: 50%;

  & > svg {
    color: #01a7cc;
  }
`;

const GrayText = styled.span`
  font-size: 14px;
  line-height: 150%;
  font-weight: 500;
  color: #505050;
`;

const BlueText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #01a7cc;
`;

const Picture = styled.div`
  background: url(https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg);
  border: 1px solid rgba(1, 167, 204, 0.1);
  width: 100%;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
`;

const PhotoInputContainer = styled.div`
  display: flex;
  width: 66.6666%;
  gap: 32px;
  align-items: stretch;
`;

export function PersonalDataForm() {
  const { user, generalData } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: generalData,
  });

  function onSubmit(data: any) {
    data.user = {
      connect: {
        id: user.id,
      },
    };

    delete data.userId;

    api.patch(`/general-data/${user.id}`, data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Informações pessoais"
        subtitle="Atualize suas informações aqui."
        buttonText="Editar"
        handleSubmit={handleSubmit(onSubmit)}
      />
      <FormGroup>
        <Label>Nome / Sobrenome</Label>
        <InputContainer>
          <Input {...register('fullName', { required: true })} />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>Nascimento / Sexo</Label>
        <InputContainer>
          <Input type="date" {...register('birthDate', { required: true })} />
          <Select {...register('gender', { required: true })}>
            <option value="MALE">Masculino</option>
            <option value="FEMALE">Feminino</option>
          </Select>
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <FormPhotoWrapper>
          <Label>Sua foto</Label>
          <FormText>Isso será exibido no seu perfil.</FormText>
        </FormPhotoWrapper>
        <PhotoInputContainer>
          <Picture />

          <PhotoInputWrapper>
            <IconWrapper>
              <CloudUp />
            </IconWrapper>
            <GrayText>
              <BlueText>Clique para fazer upload</BlueText> ou arraste e solte
              SVG, PNG ou JPG (máximo de 800x800)
            </GrayText>
            <Input
              type="file"
              accept="image/*"
              {...register('photo', { required: true })}
            />
          </PhotoInputWrapper>
        </PhotoInputContainer>
      </FormGroup>
      <FormGroup>
        <Label>E-mail / Telefone</Label>
        <InputContainer>
          <Input type="email" {...register('email', { required: true })} />
          <Input type="tel" {...register('phone', { required: true })} />
        </InputContainer>
      </FormGroup>
      <FormGroup>
        <Label>RG / CPF / CNS</Label>
        <InputContainer>
          <Input type="number" {...register('rg', { required: true })} />
          <Input type="number" {...register('cpf', { required: true })} />
          <Input type="number" {...register('cns', { required: true })} />
        </InputContainer>
      </FormGroup>
    </Form>
  );
}
