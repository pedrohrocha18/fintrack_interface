import { ButtonStyle } from "./styles/stylescomponents";
type Props = {
  title: string;
  showHaveAccount?: boolean;
  href: string;
};

const Button = ({ title, showHaveAccount, href }: Props) => {
  return (
    <>
      <ButtonStyle>
        <a href={href}>{title}</a>
      </ButtonStyle>
      {showHaveAccount ? (
        <a
          className="haveAccount"
          href="/login"
          style={{ fontSize: "11px", textDecoration: "underline" }}
        >
          Já possui conta? Clique e faça o login.
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default Button;
