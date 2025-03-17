import { BenefitsStyle } from "./styles/stylescomponents";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Card = ({ image, title, description }: Props) => {
  return (
    <BenefitsStyle>
      <div className="div_img_benefits">
        <img src={image} alt={title} />
      </div>
      <div className="div_description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </BenefitsStyle>
  );
};

export default Card;
