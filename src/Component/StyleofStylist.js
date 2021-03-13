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

export const StylistName = styled(PoppinsText)`
  font-family: Poppins;
  
  display: flex;
  font-weight: normal;
  font-size: 12px;
  line-height: 31px;
  
  text-align: center;
  
  color: #2D2D2D;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: 0px;
  z-index: 3;
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 500px;
  Height :100px;
`;

export const LeftAlignedColumnContainer = styled(ColumnContainer)`
  align-items: left;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const OverLay = styled.div`
  display: flex;
  width: 64.59px;
  height: 63.82px;
  position: absolute;
  border-radius: 28.0789px;
`;
