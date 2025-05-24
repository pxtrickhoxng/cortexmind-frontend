import { useEffect, useState } from "react";

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <p
        className={`text-xs text-blue-300 pb-4 transform transition-all duration-500 ease-in-out ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        QUICK ANSWERS
      </p>
      <h1
        className={`text-6xl transform transition-all duration-700 ease-in-out delay-200 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Frequently Asked Questions
      </h1>
    </div>
  );
};

export default Header;
