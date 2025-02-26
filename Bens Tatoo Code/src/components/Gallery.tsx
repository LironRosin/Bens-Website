interface  GalleryImage {
  url: string;
  alt: string;
}

export const Gallery = () => {
  const images: GalleryImage[] = [
    {
      url: "https://images.unsplash.com/photo-1611501267726-c4c65fc50dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tattoo work 1"
    },
    {
      url: "https://images.unsplash.com/photo-1560707854-fb9a10eed19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tattoo work 2"
    },
    {
      url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tattoo work 3"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden">
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Work</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 