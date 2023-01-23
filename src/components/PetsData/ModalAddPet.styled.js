import styled from "styled-components";

// export const List = styled.ul`
//   margin: 40px 0 0;
//   display: flex;
//   flex-direction: column;
//   gap: 48px;

//   @media (min-width: 768px) {
//     margin: 72px 0 0;
//     flex-direction: row;
//     flex-wrap: wrap;
//     row-gap: 72px;
//     column-gap: 32px;
//   }
// `;
export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;

export const BoxPet = styled.section`
  width: 100%;
  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 0px;
  }
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
