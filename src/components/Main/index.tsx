import * as S from "./styles";

const Main = ({ title = "React Avançado", description = "Descrição" }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default Main;
