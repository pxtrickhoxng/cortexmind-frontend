import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type codeMarkdownTypes = {
  aiOutput: string[];
  userInput: string[];
  currentStreamedMessage: string;
  index: number;
};

const CodeMarkdown = ({ aiOutput, userInput, currentStreamedMessage, index }: codeMarkdownTypes) => {
  return (
    <div className="px-4 py-4 text-white overflow-x-auto leading-8">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const isInline = !className;
            const match = /language-(\w+)/.exec(className || "");
            const language = match?.[1] || "plaintext";

            if (isInline) {
              return (
                <code className="bg-slate-800 text-white px-2 py-0.5 my-2 rounded-lg text-sm whitespace-pre-wrap inline-block font-mono">
                  {children}
                </code>
              );
            }

            return (
              <div className="my-4">
                <div className="bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-t-lg border-b border-slate-700 my-1">
                  {language}
                </div>

                <code className={className} {...props}>
                  {children}
                </code>
              </div>
            );
          },
        }}
      >
        {aiOutput[index] ?? (index === userInput.length - 1 ? currentStreamedMessage : "")}
      </ReactMarkdown>
    </div>
  );
};

export default CodeMarkdown;
