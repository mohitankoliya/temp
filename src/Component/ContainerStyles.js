import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: hidden;
  height: 105px;
`;

export const MainContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const GalleryContainer = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

export const PoppinsText = styled.text`
  font-family: Poppins;
  font-weight: normal;
  align-items: left;
  text-align: left;
`;

export const CategoryName = styled(PoppinsText)`
  font-family: Poppins;
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
  display: flex;
 
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: -34px;
  margin-left: 17px;
  z-index: 3;
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 500px;
`;

export const LeftAlignedColumnContainer = styled(ColumnContainer)`
  align-items: left;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const OverLay = styled.div`
  display: flex;
  width: 182px;
  height: 105px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 19.79%, rgba(0, 0, 0, 0.13) 45.83%, rgba(0, 0, 0, 0.63) 100%);
  position: absolute;
  border-radius: 15px;
`;
