import "./home.css";
import PropTypes from "prop-types";


function userOpinion(props) {

  return (
    <>
      <div className="userOpinion">
        <div className="interContent">
          <div className="user">
            <img src={props.img} alt={props.name} />
            <h4>{props.name}</h4>
          </div>
          <p>{props.description}</p>
          <div className="rating"> </div>
        </div>
      </div>
    </>
  );
}

userOpinion.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default userOpinion;
