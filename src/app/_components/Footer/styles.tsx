import styled from 'styled-components'
import theme from '@/styles/theme';

export const FooterNav = styled.footer`
  padding: 80px 0 40px;
  background-color: ${theme.colors.tealBright};
  /* background-image: url('/assets/images/bg-footer.png');
  background-position: left bottom;
  background-size: 55%;
  background-repeat: no-repeat; */
  color: ${theme.colors.backgroundMint};
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding: 60px 0 80px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  z-index: 3;

  .featured {
    margin: 0 0 50px;
    font-size: 16px;

    > div {

      &:first-child {
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;

    .featured {
      margin: 0;
    }
  }
`;

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
`;

export const Logo = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
  padding: 1px;
  width: 150px;
  height: 150px;

  @media screen and (max-width: 1024px) {
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  margin-top: 80px;
  position: relative;
  z-index: 3;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: 16px;
  max-width: 360px;
  line-height: 1.5;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;

  > a:first-child {
    flex: 0 0 200px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;

    > a:first-child {
      flex: initial;
    }
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

export const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 800px;
  height: 470px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-bottom: 70%;
    height: auto;
  }
`;
