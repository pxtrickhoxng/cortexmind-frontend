const ContactInputs = ({ onSubmit }: { onSubmit: React.FormEventHandler }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 mt-1 bg-white/10 text-white placeholder-slate-400 border border-white/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 mt-1 bg-white/10 text-white placeholder-slate-400 border border-white/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="custom-scrollbar w-full px-4 py-2 mt-1 bg-white/10 text-white placeholder-slate-400 border border-white/20 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default ContactInputs;
