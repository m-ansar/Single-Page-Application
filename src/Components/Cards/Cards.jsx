import "../../Style/Cards.css";

const Cards = (
  Icon,
  Title,
  Price,
  User,
  Budget,
  Retargeting,
  StyleBTN,
  onClick,
  Children
) => {
  return (
    <div className="pricing-card">
      <div className="icon">{Icon}</div>
      <h2 className="title">{Title}</h2>
      <p className="price">{Price}</p>
      <p className="pr-month">Per Month</p>
      <div className="detail">
        <p className="user">{User} New Users</p>
        <p className="budget">Rs.{Budget} budget</p>
        <p className="retargeting">{Retargeting}</p>
      </div>
      <button style={StyleBTN} onClick={onClick}>
        {Children}
      </button>
    </div>
  );
};

export default Cards;
