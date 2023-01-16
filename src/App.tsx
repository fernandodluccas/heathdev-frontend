import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './components/Heder';
import { Navigation } from './components/Navigation';
import SideMenu from './components/SideMenu';
import { AddressForm } from './pages/AddressForm';
import { PassowrdForm } from './pages/PasswordForm';
import { PersonalDataForm } from './pages/PersonalDataForm';
import { ProfessionalDataForm } from './pages/ProfessionalDataForm';
import { DataProvider } from './context/DataContext';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
    outline: 0;
    border: 0;
    font-family:  "Popins", sans-serif;

    body{
      font-size: 16px;
    }
  }
  
  button{
    cursor: pointer;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <DataProvider>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <SideMenu />
          <Wrapper>
            <Header />
            <Navigation />
            <Routes>
              <Route path="/" element={<PersonalDataForm />} />
              <Route path="/address" element={<AddressForm />} />
              <Route
                path="/professional-data"
                element={<ProfessionalDataForm />}
              />
              <Route path="/password" element={<PassowrdForm />} />
            </Routes>
          </Wrapper>
        </AppWrapper>
      </Router>
    </DataProvider>
  );
};

export default App;
