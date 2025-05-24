import Content from "./Content";
import Header from "./Header";
import { useEffect, useState } from "react";

const FaqMainContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <div className="pt-35 font-medium text-white flex justify-start px-6 md:px-20 lg:px-72">
        <Header />
      </div>
      <div
        className={`transform transition-all duration-700 ease-in-out delay-400 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Content />
      </div>
    </div>
  );
};

export default FaqMainContent;
