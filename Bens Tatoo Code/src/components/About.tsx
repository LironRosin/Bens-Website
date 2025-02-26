export  const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Tattoo Artist Portrait"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">About the Artist</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over a decade of experience in the art of tattooing, we specialize in creating unique, 
              custom designs that tell your story. Every piece is approached with dedication, precision, 
              and artistic excellence.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Custom Design Specialist
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Sterile Environment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Premium Quality Inks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
 