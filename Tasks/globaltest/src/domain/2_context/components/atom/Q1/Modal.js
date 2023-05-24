import styled from "styled-components";

const ContextQ1Modal = () => {
  return (
    <>
      <S.Wrapper>
        <S.ModalContainer>
          <S.ModalContent>
            <h1>ContextQ1Modal</h1>
          </S.ModalContent>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
export default ContextQ1Modal;

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  left: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
  z-index: 1001;
  width: 300px;
  height: 100px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgray;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 35px;
`;

const ModalContent = styled.div`
  text-align: center;
`;

const S = { Wrapper, ModalContainer, ModalContent };
