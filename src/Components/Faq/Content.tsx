import { useState } from "react";

type FAQKey =
  | "cortexMind"
  | "howWork"
  | "techStack"
  | "whyBuild"
  | "useProduction"
  | "challenges"
  | "improvements"
  | "secure"
  | "openSource";

const Content = () => {
  const [openFAQs, setOpenFAQs] = useState<Record<FAQKey, boolean>>({
    cortexMind: false,
    howWork: false,
    techStack: false,
    whyBuild: false,
    useProduction: false,
    challenges: false,
    improvements: false,
    secure: false,
    openSource: false,
  });

  const toggleFAQ = (key: FAQKey) => {
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="text-white/80 mt-34 w-1/3 p-4">
        <div
          className="flex justify-between items-center cursor-pointer hover:text-white"
          onClick={() => toggleFAQ("cortexMind")}
        >
          <h1 className="text-2xl font-medium">What is CortexMind?</h1>
          <button
            aria-expanded={openFAQs.cortexMind}
            aria-controls="cortexmind-desc"
            aria-label="Toggle What is CortexMind?"
            title={openFAQs.cortexMind ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.cortexMind ? "−" : "+"}
          </button>
        </div>

        <div
          id="cortexmind-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.cortexMind
              ? "max-h-[500px] opacity-100 translate-y-0 py-4"
              : "max-h-0 opacity-0 -translate-y-2 py-0"
          } text-blue-200`}
        >
          <p>
            CortexMind is an AI-powered web app designed to simulate the functionality of modern large language models
            (LLMs) like ChatGPT and DeepSeek. This personal project aims to showcase full-stack development skills by
            integrating natural language processing capabilities into a responsive and user-friendly interface. Although
            CortexMind isn't a commercial product, it serves as a sandbox environment where I can explore, test, and
            learn about the latest AI technologies.
          </p>
        </div>

        <div
          className="flex justify-between items-center mt-8 cursor-pointer hover:text-white"
          onClick={() => toggleFAQ("howWork")}
        >
          <h1 className="text-2xl font-medium">How does CortexMind work?</h1>
          <button
            aria-expanded={openFAQs.howWork}
            aria-controls="how-work-desc"
            aria-label="Toggle How does CortexMind work?"
            title={openFAQs.howWork ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.howWork ? "−" : "+"}
          </button>
        </div>

        <div
          id="how-work-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.howWork ? "max-h-[800px] opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
          } text-blue-200`}
        >
          <p>
            CortexMind is powered by DeepSeek's <span className="font-bold">deepseek-chat</span> model, enabling it to
            generate intelligent, conversational responses comparable to other advanced LLM platforms. Under the hood,
            it employs a full-stack architecture built with several key technologies and design patterns:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-4">
            <li>
              <span className="font-bold">Backend Integration:</span> The backend communicates with the DeepSeek API to
              send user prompts and streams generated responses in real time. This streaming approach delivers a smooth,
              responsive chat experience by showing answers as they are typed.
            </li>
            <li>
              <span className="font-bold">Frontend Interface:</span> Built with React, the frontend provides a sleek and
              responsive chat UI that adapts seamlessly across all screen sizes. Messages stream incrementally from the
              backend, offering users real-time feedback during AI conversations. When logged in, users’ chat histories
              are persistently stored in a PostgreSQL database.
            </li>
            <li>
              <span className="font-bold">Authentication:</span> The app uses Auth0 for secure authentication, allowing
              users to sign up and log in with their email and password. Each user’s chat history is linked to their
              account for personalized access.
            </li>
            <li>
              <span className="font-bold">Database:</span> Chat histories and session information are securely stored in
              a PostgreSQL database, ensuring reliable data persistence and retrieval across sessions.
            </li>
          </ul>
        </div>

        <div
          className="flex justify-between items-center mt-8 cursor-pointer hover:text-white"
          onClick={() => toggleFAQ("techStack")}
        >
          <h1 className="text-2xl font-medium">What tech stack is used?</h1>
          <button
            aria-expanded={openFAQs.techStack}
            aria-controls="techstack-desc"
            aria-label="Toggle What tech stack is used?"
            title={openFAQs.techStack ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.techStack ? "−" : "+"}
          </button>
        </div>

        <div
          id="techstack-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.techStack ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <ul className="list-disc list-inside space-y-2 pt-4">
            <li>
              <span className="font-bold">Frontend:</span> React + Tailwind CSS
            </li>
            <li>
              <span className="font-bold">Backend:</span> Express.js
            </li>
            <li>
              <span className="font-bold">Database:</span> PostgreSQL
            </li>
            <li>
              <span className="font-bold">State management:</span> Zustand
            </li>
            <li>
              <span className="font-bold">Authentication:</span> Auth0
            </li>
          </ul>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("whyBuild")}
        >
          <h1 className="text-2xl font-medium">Why did you build CortexMind?</h1>
          <button
            aria-expanded={openFAQs.whyBuild}
            aria-controls="whyBuild-desc"
            aria-label="Toggle Why did you build CortexMind?"
            title={openFAQs.whyBuild ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.whyBuild ? "−" : "+"}
          </button>
        </div>

        <div
          id="whyBuild-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.whyBuild ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">
            I wanted to challenge myself by building an AI web application from scratch—not just by following tutorials.
            CortexMind gave me the opportunity to develop my own APIs and explore full-stack concepts such as user
            authentication, real-time message streaming, structured database design, and integrating an external LLM API
            (DeepSeek).
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("useProduction")}
        >
          <h1 className="text-2xl font-medium">Can I use CortexMind for real conversations or production tasks?</h1>
          <button
            aria-expanded={openFAQs.useProduction}
            aria-controls="useProduction-desc"
            aria-label="Toggle useProduction answer"
            title={openFAQs.useProduction ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.useProduction ? "−" : "+"}
          </button>
        </div>

        <div
          id="useProduction-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.useProduction ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">
            While CortexMind is fully functional and leverages the DeepSeek LLM to generate high-quality responses, it
            is intended solely as a learning project. As such, it may have limitations in areas like scalability,
            security, and persistent data storage, since it depends on external services operating under free or limited
            tiers. Therefore, it is not designed for production use.
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("challenges")}
        >
          <h1 className="text-2xl font-medium">What were some challenges you faced while building CortexMind?</h1>
          <button
            aria-expanded={openFAQs.challenges}
            aria-controls="challenges-desc"
            aria-label="Toggle challenges answer"
            title={openFAQs.challenges ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.challenges ? "−" : "+"}
          </button>
        </div>

        <div
          id="challenges-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.challenges ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">
            Implementing real-time message streaming, maintaining chat history with proper user-session mapping, and
            designing a clean backend with API integration were all challenging but highly rewarding tasks. Though the
            frontend was undoubtedly the most difficult part of the project, it was also the most educational. I was
            able to gain a much deeper understanding of UI/UX and state management through this project.
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("improvements")}
        >
          <h1 className="text-2xl font-medium">What would you improve or add next?</h1>
          <button
            aria-expanded={openFAQs.improvements}
            aria-controls="improvements-desc"
            aria-label="Toggle improvements answer"
            title={openFAQs.improvements ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.improvements ? "−" : "+"}
          </button>
        </div>

        <div
          id="improvements-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.improvements ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">
            If I continued developing CortexMind, I’d prioritize improving both the consistency of AI responses as well
            as security. Currently, without JWT authentication, the database may be vulnerable to attacks. The AI’s
            markdown formatting also lacks proper handling of font sizes, lists, and other text elements, which may
            affect readability. To address these concerns, I’d implement token-based authentication and enhance frontend
            parsing to support richer formatting. Additionally, I’d refine the AI prompts to boost response accuracy and
            consistency.
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("secure")}
        >
          <h1 className="text-2xl font-medium">Is my data secure?</h1>
          <button
            aria-expanded={openFAQs.secure}
            aria-controls="secure-desc"
            aria-label="Toggle security answer"
            title={openFAQs.secure ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.secure ? "−" : "+"}
          </button>
        </div>

        <div
          id="secure-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.secure ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">
            CortexMind uses Auth0 for user authentication, ensuring that only authorized users can access their
            accounts. User chat histories are securely stored in a PostgreSQL database linked to individual accounts.
            However, since this project is primarily a learning sandbox and not a production service, some advanced
            security features—such as JWT token validation and data encryption—have not yet been fully implemented.
            Users are advised to avoid sharing sensitive personal information when using the app. Security enhancements
            are planned for future updates to better protect user data.
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer hover:text-white mt-8"
          onClick={() => toggleFAQ("openSource")}
        >
          <h1 className="text-2xl font-medium">Is the code open source?</h1>
          <button
            aria-expanded={openFAQs.openSource}
            aria-controls="openSource-desc"
            aria-label="Toggle open source answer"
            title={openFAQs.openSource ? "Collapse answer" : "Expand answer"}
            className="px-2 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {openFAQs.openSource ? "−" : "+"}
          </button>
        </div>

        <div
          id="openSource-desc"
          className={`overflow-hidden transition-all duration-100 ease-in-out transform ${
            openFAQs.openSource ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          } py-0 text-blue-200`}
        >
          <p className="pt-4">Yes. You may find it at: [insert github here]</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
