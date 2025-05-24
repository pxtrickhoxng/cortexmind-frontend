import { useState } from "react";
import ContactForm from "../Contact/ContactForm";
import { Link } from "react-router-dom";
import cortexmind from "../../assets/icons/brainseek-final.png";

const ContactMain = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    // this is a public access key.
    formData.append("access_key", "b45627e5-8e4d-4f09-8469-24d2c4e74cc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative">
      <div className="flex flex-wrap justify-between items-center w-full py-3 px-10 sm:px-20 md:px-30 lg:px-62 font-medium gap-y-2">
        <Link className="flex items-center text-white hover:opacity-65" to="/" draggable="false">
          <img className="w-10" src={cortexmind} alt="brainseek-logo" draggable="false" />
          <p>CortexMind</p>
        </Link>
        <Link className="text-white hover:opacity-65" to="/faq" draggable="false">
          FAQ
        </Link>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-2 sm:px-4 md:px-6">
        <ContactForm onSubmit={onSubmit} result={result} />
      </div>
    </div>
  );
};

export default ContactMain;
