import "./home.css";
import PropTypes from "prop-types";


function OneService(props) {
  return (
    <>
      <div className="oneService">
        <img src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
      </div>
    </>
  );
}
OneService.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default OneService;
