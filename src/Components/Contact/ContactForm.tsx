import ContactInputs from "./ContactInputs";
import { useEffect, useState } from "react";

const ContactForm = ({ onSubmit, result }: { onSubmit: React.FormEventHandler<Element>; result: string }) => {
  const [loaded, setLoaded] = useState("translate-y-[40%] opacity-0");

  useEffect(() => {
    setLoaded("opacity-100");
  }, []);

  return (
    <div
      className={`max-w-lg w-full p-6 bg-white/5 backdrop-blur-md border border-white/10
    shadow-lg rounded-lg text-white ${loaded} ease-in-out duration-500 transition-all`}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <ContactInputs onSubmit={onSubmit} />
      <div className="mt-4 text-center">
        <span className="text-sm text-slate-400">{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;
