const Card = ({ src, title, contents }) => {
    return (
      <li className="card">
        <div className="cont-img">
          <img src={src} alt={title} />
        </div>
        <div className="card-details">
          <h3>{title}</h3>
          <p>{contents}</p>
        </div>
      </li>
    );
};

export default Card;