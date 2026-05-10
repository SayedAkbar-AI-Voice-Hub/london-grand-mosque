import { useState, useEffect } from "react";
import { galleryApi } from "../lib/api";
import { Play } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    galleryApi.list().then(setImages).catch(() => {});
  }, []);

  return (
    <div className="w-full">
      <div className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Media Gallery</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-sm font-serif italic px-4">
          Visual memories from our community events, prayers, and architectural beauty.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item: any) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-300"></div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                <h3 className="text-white font-bold text-base drop-shadow-md">{item.title}</h3>
                {item.type === 'video' ? (
                  <span className="text-[10px] font-bold text-amber-400 mt-2 uppercase tracking-widest block drop-shadow-md">Watch Video</span>
                ) : (
                   <span className="text-[10px] font-bold text-primary-300 mt-2 uppercase tracking-widest block drop-shadow-md">Photo</span>
                )}
              </div>
            </div>
          ))}
          {images.length === 0 && (
            <div className="col-span-full text-center py-16 text-slate-400 text-sm">
              No images in the gallery yet.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}