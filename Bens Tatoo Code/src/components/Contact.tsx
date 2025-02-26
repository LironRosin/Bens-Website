import  { FormEvent } from 'react';

export const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Book Your Session</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <textarea
            placeholder="Tell us about your tattoo idea"
            rows={6}
            required
            className="w-full bg-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
 