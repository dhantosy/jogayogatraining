import styled from 'styled-components'
import theme from '@/styles/theme';

export const HeaderNav = styled.header<{ $active?: boolean; }>`
  position: fixed;
  background-color: ${theme.colors.white};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  color: ${theme.colors.greenMain};
  box-shadow: ${props => props.$active ? '0 5px 5px rgba(0,0,0,0.1)' : 'none'};

  @media screen and (max-width: 1024px) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greenMain};
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const MenuItem = styled.div`
  position: relative;
  text-align: center;

  @media screen and (max-width: 1024px) {

    &.desktop {
      display: none;
    }

    &.mobile {
      display: block;
    }
  }
`;

export const Logo = styled.div<{ $active?: boolean; }>`
  display: flex;
  gap: 15px;
  align-items: center;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 10;

  &.mobile {
    display: none;
    padding: 0;
  }

  @media screen and (max-width: 1024px) {

    &.desktop {
      display: none;
    }

    &.mobile {
      display: flex;
    }
  }
`;

export const LogoName = styled.div`
  color: ${theme.colors.greenMain};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.2;

  @media screen and (max-width: 360px) {
    & {
      font-size: 14px;
    }
  }
`;

export const Text = styled.div`
  font-size: 18px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.orange};
  }

  &.mobileMenu {
    text-align: center;
    display: inline-block;
  }
`;

export const TextHasDropdown = styled.div`
  padding: 30px 0;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: ${theme.colors.white};
  top: 50px;
  left: 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 240px;
  color: ${theme.colors.greenMain};
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
`;

export const DropdownText = styled.div`
  padding: 10px 25px;
  opacity: 0.9;
  font-weight: 500;
  transition: font-weight 0.1s ease-in-out;

  &:hover {
    font-weight: 700;
  }
`;

export const Icon = styled.div`
  width: 50px;
  padding: 17px 0 13px 0;
  line-height: 1;
  cursor: pointer;
`;

export const MobileMenuContainer = styled.div<{ $isMobileMenuActive?: boolean; }>`
  display: ${props => props.$isMobileMenuActive ? 'block' : 'none'};
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  background-color: ${theme.colors.backgroundPink};
  padding: 50px 20px;
  z-index: 9;
  border-right: 15px solid ${theme.colors.white};
  border-left: 15px solid ${theme.colors.white};
  border-bottom: 15px solid ${theme.colors.white};
`;

export const TextMobile = styled.div`
  gap: 15px;
  align-items: center;
  padding: 15px 0;
  font-size: 28px;
  transition: all 0.2s;

  &:hover {
    font-size: 30px;
    color: ${theme.colors.orange};
    font-weight: 500;
  }
`;

export const IconMobileArrow = styled.div`
  flex: 0 0 20px;
  display: flex;
`;

export const HeaderContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
