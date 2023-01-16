import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../icons/home_outline.svg';
import { ReactComponent as ChevronRight } from '../icons/chevron_right.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import { ReactComponent as NotificationsIcon } from '../icons/notification_outline.svg';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  color: #909090;
`;

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #505050;
  margin-top: 8px;
`;

const HomeLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  color: #01a7cc;
  & > svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.span`
  font-size: 14px;
  color: #707070;
  margin-top: 4px;
`;

const StyledChevronRight = styled(ChevronRight)`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  margin-right: 32px;
`;

const StyledNotificationsIcon = styled(NotificationsIcon)`
  margin-right: 32px;
`;

const ClinicName = styled.span`
  font-size: 16px;
  color: #000000;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledColumn>
        <StyledRow>
          <HomeLink>
            <HomeIcon />
            <StyledChevronRight />
          </HomeLink>
          <span>Inicio</span>
          <StyledChevronRight />
          <CurrentPage>Perfil</CurrentPage>
        </StyledRow>
        <StyledParagraph>
          {new Intl.DateTimeFormat('pt-BR', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }).format(new Date())}
        </StyledParagraph>
      </StyledColumn>
      <StyledRow>
        <StyledSettingsIcon />
        <StyledNotificationsIcon />
        <StyledColumn>
          <ClinicName>Clinica OdontoLife</ClinicName>
          <StyledText>Unidade 2 - Consultorio 1</StyledText>
        </StyledColumn>
      </StyledRow>
    </StyledHeader>
  );
};
