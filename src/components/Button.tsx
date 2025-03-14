import { ButtonStyle } from "./styles/stylescomponents";
type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return <ButtonStyle>{title}</ButtonStyle>;
};

export default Button;
