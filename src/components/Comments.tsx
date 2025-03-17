import { CommentsStyle } from "./styles/stylescomponents";

type Props = {
  image: any;
  title: string;
  description: string;
};

const Comments = ({ image, title, description }: Props) => {
  return (
    <CommentsStyle>
      <div className="div_img_comments">
        <img src={image} alt={title} />
      </div>
      <div className="div_comments">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </CommentsStyle>
  );
};

export default Comments;
