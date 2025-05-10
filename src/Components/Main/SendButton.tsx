import spinner from "../../assets/icons/spinner.svg";
import stop from "../../assets/icons/stop.svg";
import send from "../../assets/icons/sendArrow.svg";

const SendButton = ({ loading, streaming, text }: { loading: boolean; streaming: boolean; text: string }) => {
  let content;
  if (loading === true) {
    console.log(`1. ${typeof streaming}`);
    content = <img src={spinner} alt="loading-spinner" className="h-4 w-4 filter invert" />;
  } else if (streaming === true) {
    console.log(`2. ${typeof streaming}`);
    content = <img src={stop} alt="stop-icon" className="h-3 w-3 filter invert" />;
  } else {
    console.log(`3. ${typeof streaming}`);
    content = (
      <img
        src={send}
        alt="send-arrow"
        className={`h-4 w-4 filter invert ${text == "" ? "opacity-45" : "opacity-100"}`}
      />
    );
  }

  return (
    <div className="group relative inline-block mr-2 select-none">
      <button
        className={`w-8 h-8 bg-slate-900 ${text !== "" ? "hover:bg-slate-950/75 cursor-pointer" : "cursor-not-allowed"} text-white rounded-full  flex items-center justify-center`}
      >
        {content}
      </button>
    </div>
  );
};

export default SendButton;
