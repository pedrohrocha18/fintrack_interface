import { ButtonStyle } from "./styles/stylescomponents";
type Props = {
  title: string;
  showHaveAccount?: boolean;
};

const Button = ({ title, showHaveAccount }: Props) => {
  return (
    <>
      <ButtonStyle>{title}</ButtonStyle>
      {showHaveAccount ? (
        <div>
          <a className="haveAccount" href="/login" style={{ fontSize: "11px", textDecoration: "underline" }}>
            Já possui conta? Clique e faça o login.
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Button;
