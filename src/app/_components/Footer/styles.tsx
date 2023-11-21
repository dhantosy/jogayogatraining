import styled from 'styled-components'
import theme from '@/styles/theme';

export const FooterNav = styled.footer`
  padding: 80px 0 40px;
  background-color: ${theme.colors.tealBright};
  background-image: url('/assets/images/bg-footer.png');
  background-position: left bottom;
  background-size: 55%;
  background-repeat: no-repeat;
  color: ${theme.colors.backgroundMint};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;

  }
`;

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
`;

export const Logo = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${theme.colors.white};
  padding: 20px;

  @media screen and (max-width: 1024px) {
    width: 100px;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  margin-top: 100px;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: 16px;
  max-width: 360px;
  line-height: 1.5;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }
`;

export const Info = styled.div`
  & {
    display: flex;
    gap: 15px;
    align-items: baseline;
    margin-bottom: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoIcon = styled.span`
  width: 18px;
  position: relative;
  top: 4px;
  flex: 0 0 18px;
`;

export const MenuItem = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const MenuTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CopyrightSocial = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const CopyrightSocialItem = styled.div`
  width: 30px;
  display: block;
`;


