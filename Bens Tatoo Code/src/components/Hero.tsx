import  { Instagram, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
          alt="Tattoo Artist at Work" 
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider animate-fade-in">BENS TATOO</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed animate-fade-in-delay">
          Where Art Meets Skin | Custom Designs | House Calls
        </p>
        <div className="flex space-x-6">
          <a href="#contact" className="hover:text-gray-300 transition-colors"><Instagram size={24} /></a>
          <a href="mailto:contact@inkandsoul.com" className="hover:text-gray-300 transition-colors"><Mail size={24} /></a>
          <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors"><Phone size={24} /></a>
        </div>
      </div>
    </div>
  );
};
 