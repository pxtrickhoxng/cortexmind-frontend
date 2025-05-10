import { useEffect, useState } from "react";

const Header = () => {
  const [loaded, setLoaded] = useState("-translate-x-[150%]");

  useEffect(() => {
    setLoaded("");
  }, []);

  return (
    <div>
      <p className={`text-xs text-blue-300 pb-4 duration-400 ease-in-out ${loaded}`}>QUICK ANSWERS</p>
      <h1 className={`text-6xl duration-400 ease-in-out delay-200 ${loaded}`}>Frequently Asked Questions</h1>
    </div>
  );
};

export default Header;
