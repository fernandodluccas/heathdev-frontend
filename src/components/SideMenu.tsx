import { useState } from 'react';
import { StyledHeaderMenu } from './HeaderMenu';
import { MenuButton } from './MenuButton';
import { StyledMenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { Sidebar } from './Sidebar';
import { ReactComponent as HomeOutline } from '../icons/home_outline.svg';
import { ReactComponent as IdCard } from '../icons/id_card.svg';
import { ReactComponent as Building } from '../icons/building.svg';
import { ReactComponent as NotificationOutline } from '../icons/notification_outline.svg';
import { ReactComponent as HelpCircleOutline } from '../icons/help_circle_outline.svg';
import { ReactComponent as Settings } from '../icons/settings.svg';
import { ReactComponent as LongLeft } from '../icons/long_left.svg';
import styled from 'styled-components';
import { useData } from '../context/DataContext';

const ProfilePicture = styled.div`
  background: url(https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg);
  border: 1px solid rgba(1, 167, 204, 0.1);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
  position: relative;
  margin: 32px 16px;
`;

const OnlineDot = styled.div`
  background: #45ef89;
  border: 1px solid rgba(223, 241, 246, 0.1);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;
export const StyledSideMenuHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 20px 32px; */
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #333333;
`;

const UserEmail = styled.span`
  font-size: 13px;
  color: #6c6c6c;
`;

const SideMenu = () => {
  const { generalData, professionalData } = useData();
  const [expanded, setExpanded] = useState(false);

  const handleMenuToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Sidebar expanded={expanded}>
      <MenuButton expanded={expanded} onClick={handleMenuToggle} />
      <MenuList>
        <StyledSideMenuHeader>
          <ProfilePicture>
            <OnlineDot />
          </ProfilePicture>
          {expanded && (
            <UserInfoContainer>
              <UserName>{generalData.fullName}</UserName>
              <UserEmail>{professionalData.specialty}</UserEmail>
            </UserInfoContainer>
          )}
        </StyledSideMenuHeader>
        <StyledHeaderMenu expanded={expanded}>Ferramentas</StyledHeaderMenu>
        <StyledMenuItem
          expanded={expanded}
          icon={<HomeOutline />}
          text="Inicio"
          className="active"
        />
        <StyledMenuItem
          expanded={expanded}
          icon={<IdCard />}
          text="Consultório"
        />
        <StyledMenuItem
          expanded={expanded}
          icon={<Building />}
          text="Clinicas"
        />
        <StyledMenuItem
          expanded={expanded}
          icon={<HomeOutline />}
          text="Painel de atendimento"
        />
        <StyledHeaderMenu expanded={expanded}>Outros</StyledHeaderMenu>
        <StyledMenuItem
          expanded={expanded}
          icon={<NotificationOutline />}
          text="Notificações"
        />
        <StyledMenuItem
          expanded={expanded}
          icon={<HelpCircleOutline />}
          text="Central de ajuda"
        />
        <StyledMenuItem
          expanded={expanded}
          icon={<Settings />}
          text="Configurações"
        />
        <StyledMenuItem expanded={expanded} icon={<LongLeft />} text="Sair" />
      </MenuList>
    </Sidebar>
  );
};

export default SideMenu;
