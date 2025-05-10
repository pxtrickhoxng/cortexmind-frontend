import FaqMainContent from "../Components/Faq/FaqMainContent";
import Topbar from "../Components/Faq/Topbar";

const FaqPage = () => {
  return (
    <div>
      <Topbar />
      <div>
        <FaqMainContent />
        <div className="flex items-center justify-center">
          <div className="text-white mt-16 w-1/3 p-4">
            <div className="pb-7">
              <div className="flex justify-between">
                <h1 className="text-4xl font-medium">What is Brainseek?</h1>
                <button>+</button>
              </div>
              <p className="py-4 text-blue-200">
                Pipe makes customer-friendly capital & smart financial tools accessible to growing businesses inside the
                software they use every day. Our embedded solutions are built to scale and give business builders across
                industries the power to grow on their own terms.
              </p>
            </div>

            <div className="flex justify-between">
              <h1 className="text-4xl font-medium">How does Brainseek work?</h1>
              <button>+</button>
            </div>
            <p className="py-4 text-blue-200">
              By embedding Pipe’s solutions, software providers can seamlessly offer financial services to their
              customers. Pipe makes it simple for your customers to get access to capital based entirely on the health
              of their businesses. Pipe’s underwriting uses a partner’s live revenue data to get growing businesses the
              financing they deserve. Once approved, customers can use as much of their offer as they need and pay it
              back as a percentage of their revenue.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
