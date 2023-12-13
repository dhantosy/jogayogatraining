import styled from 'styled-components'

export const Section = styled.section`
  margin: 80px auto 30px;
  position: relative;
  z-index: 2;
  display: flex;
  gap: 50px;

  > div {
    flex: 1 1 calc(50% - 50px);
  }

  @media screen and (max-width: 768px) {
    margin: 30px auto 20px;
    flex-direction: column;
    gap: 30px;

    > div {
      flex: 1 1 100%;
    }
  }
`;
