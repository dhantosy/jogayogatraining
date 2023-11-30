import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 30px auto 40px;
  position: relative;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    flex: 0 0 calc(50% - 60px);
  }
`;

export const CardHorizontal = styled.div`
  padding: 40px 0 0;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 40px 0 80px;
  }
`;

export const CardHorizontalWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 0 0 200px;
  padding-bottom: 30%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
`;

export const CardHorizontalContent = styled.div`
  position: relative;
  z-index: 2;

  .link {
    display: inline-block;
    margin-top: 30px;
  }
`;

export const CardHorizontalTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.orange};
`;

export const CardHorizontalDetail = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 0 0 20px;
  font-weight: 600;

  .flex {
    display: flex;
    gap: 10px;
    font-size: 14px;

    & > div:first-child {
      font-weight: 400;
    }
  }
`;

export const CardHorizontalDescription = styled.div`
  position: relative;
  z-index: 2;
`;

export const Icon = styled.div`
  position: relative;
  width: 25px;
  top: 2px;
`;

export const CardHorizontalBottom = styled.div`
  position: relative;
  padding: 30px 0px 0px 60px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: calc(100% + 170px);
    left: 30px;
    top: -140px;
    opacity: 0.2;
    border-radius: 20px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 3px;
  width: 130px;
  margin: 20px 0 10px;
  color: ${theme.colors.orange};
`;
