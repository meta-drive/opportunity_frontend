import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  margin: 20px;
  padding: 30px;
  max-width: 1280px;
  width: 90%;
  background-color: #E8E6E6;
  display: flex;
  flex-direction: column;
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPersonalContainer = styled.div`
  max-width: 300px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin-bottom: 30px;
  }
`;

export const RightPersonalContainer = styled.div`
  width: 100%;
`;

export const EmblemsContainer = styled.div`
  margin: 20px 0;
`;

export const GoalsContainer = styled.div`
  margin: 20px 0;
`;

