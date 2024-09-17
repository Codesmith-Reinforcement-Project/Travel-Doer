import Results from '../pages/Results';

const ResultCard = ({ cardClick, props }) => {
  return (
    <div onClick={cardClick}>
      <div>{props.value.location}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default ResultCard;
