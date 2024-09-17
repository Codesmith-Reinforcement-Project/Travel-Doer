const resultCard = ({ value, key, price }) => {
  return (
    <div>
      <div>This is the resultCard!</div>
      <div>{value.location}</div>
      <div>{price}</div>
    </div>
  );
};

export default resultCard;
