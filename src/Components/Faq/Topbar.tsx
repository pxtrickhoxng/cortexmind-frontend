import brainseek from "../../assets/icons/brainseek-final.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full py-3 px-10 sm:px-20 md:px-30 lg:px-62 font-medium gap-y-2">
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
