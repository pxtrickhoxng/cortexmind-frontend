import { useEffect, useState } from "react";

const Header = () => {
  const [loaded, setLoaded] = useState("-translate-x-[150%]");

  useEffect(() => {
    setLoaded("");
  }, []);

  return (
    <div>
      <p className={`text-xs text-blue-300 pb-4 duration-500 ease-in-out ${loaded}`}>QUICK ANSWERS</p>
      <h1 className={`text-6xl duration-500 ease-in-out delay-400 ${loaded}`}>Frequently Asked Questions</h1>
    </div>
  );
};

export default Header;
