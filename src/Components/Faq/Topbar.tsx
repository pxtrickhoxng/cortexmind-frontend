import brainseek from "../../assets/icons/brainseek-final.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-3 md:px-20 lg:px-28 font-medium">
      <Link className="flex items-center text-white hover:opacity-65 ml-42" to="/" draggable="false">
        <img className="w-10" src={brainseek} alt="brainseek-logo" />
        <p>CortexMind</p>
      </Link>
      <Link className="text-white mr-42 hover:opacity-65" to="/contact">
        Contact us
      </Link>
    </div>
  );
};

export default Topbar;
