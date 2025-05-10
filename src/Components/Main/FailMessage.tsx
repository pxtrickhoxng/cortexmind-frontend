const FailMessage = ({ hasFailed }: { hasFailed: boolean }) => {
  return (
    <div className="h-6">
      {hasFailed && (
        <p className="text-center text-zinc-400 pt-3 animate-pulse">Message failed to send. Please try again.</p>
      )}
    </div>
  );
};

export default FailMessage;
