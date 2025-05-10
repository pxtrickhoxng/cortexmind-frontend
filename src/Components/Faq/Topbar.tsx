import brainseek from "../../assets/icons/brainseek-final.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-3 px-20 sm:px-30 md:px-40 lg:px-70 font-medium">
      <Link className="flex items-center text-white hover:opacity-65" to="/" draggable={false}>
        <img className="w-10" src={brainseek} alt="brainseek-logo" draggable={false} />
        <p>CortexMind</p>
      </Link>
      <Link className="text-white hover:opacity-65" to="/contact" draggable={false}>
        Contact us
      </Link>
    </div>
  );
};

export default Topbar;
