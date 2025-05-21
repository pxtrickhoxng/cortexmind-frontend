import spinner from "../../assets/icons/spinner.svg";
import stop from "../../assets/icons/stop.svg";
import send from "../../assets/icons/sendArrow.svg";

type sendButtonTypes = {
  loading: boolean;
  streaming: boolean;
  text: string;
};

const SendButton = ({ loading, streaming, text }: sendButtonTypes) => {
  let content;
  if (loading === true) {
    content = <img src={spinner} alt="loading-spinner" className="h-4 w-4 filter invert" />;
  } else if (streaming === true) {
    content = <img src={stop} alt="stop-icon" className="h-3 w-3 filter invert" />;
  } else {
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
