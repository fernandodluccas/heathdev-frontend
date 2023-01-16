import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { api } from '../api/axios';

interface GeneralData {
  fullName: string;
  birthDate: string;
  gender: string;
  photo: string;
  email: string;
  phone: string;
  rg: string;
  cpf: string;
  cns: string;
}

interface Address {
  state: string;
  city: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
}

interface User {
  id: string;
  username: string;
}

interface ProfessionalData {
  council: string;
  councilState: string;
  councilNumber: string;
  specialty: string;
  rqe: string;
  idUser: string;
  memedSync: boolean;
}

interface ContextData {
  generalData: GeneralData;
  address: Address;
  user: User;
  professionalData: ProfessionalData;
  loading: boolean;
}

const DataContext = React.createContext<ContextData>({} as ContextData);

interface DataProviderProps {
  children: React.ReactNode;
}

// const data = {
//   generalData: {
//     fullName: 'John Doe',
//     birthDate: '1990-01-01',
//     gender: 'male',
//     photo: 'https://example.com/photo.jpg',
//     email: 'john.doe@example.com',
//     phone: '+55 11 99999-9999',
//     rg: '12345678',
//     cpf: '12345678900',
//     cns: '12345678901234',
//   },
//   address: {
//     state: 'SP',
//     city: 'São Paulo',
//     street: 'Av. Paulista',
//     number: '1000',
//     neighborhood: 'Bela Vista',
//     complement: 'apto. 123',
//   },
//   user: {
//     id: '12345',
//     username: 'johndoe',
//   },
//   professionalData: {
//     council: 'CRM',
//     councilState: 'SP',
//     councilNumber: '123456',
//     specialty: 'Psiquiatria',
//     rqe: '12345678',
//     idUser: '12345',
//     memedSync: true,
//   },
// };

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  const [data, setData] = useState<ContextData>({} as ContextData);

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api.get('auth/me').then((response) => {
      setData((prevState) => ({
        ...prevState,
        user: response.data,
      }));

      api.get(`/users/${response.data.id}`).then((response) => {
        setData(response.data);
      });
    });
  }, [token]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

interface DataConsumerProps {
  children: (data: ContextData) => React.ReactNode;
}

const DataConsumer: React.FC<DataConsumerProps> = ({ children }) => {
  return (
    <DataContext.Consumer>{(data) => children(data)}</DataContext.Consumer>
  );
};

function useData(): ContextData {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export { DataContext, DataProvider, DataConsumer, useData };
