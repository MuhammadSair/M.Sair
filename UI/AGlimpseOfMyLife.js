"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function AGlimpseOfMyLife() {
  const [rawImages, setRawImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/my_life_images");
        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          setRawImages(data.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const images = useMemo(() => {
    if (loading) {
      // Show 8 skeleton placeholders while loading
      return Array.from({ length: 8 }, (_, i) => ({
        isPlaceholder: true,
        id: `placeholder-${i}`,
      }));
    }

    if (error || rawImages.length === 0) {
      return [];
    }

    return rawImages.map((img, i) => ({
      ...img,
      isPlaceholder: false,
      id: img.asset_id || `img-${i}`,
    }));
  }, [loading, error, rawImages]);

  // If error or no images after loading, show fallback
  if (!loading && (error || images.length === 0)) {
    return (
      <div className="w-full text-center py-16 text-gray-400 text-sm"></div>
    );
  }

  return (
    <section className="w-full overflow-x-hidden">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-4 py-8 w-max">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`
                group relative text-center aspect-[3/4] w-44
                rounded-[12px] overflow-hidden
                transition-all duration-200 ease-in-out
                ${
                  index % 2 === 0
                    ? "rotate-[1.3deg] scale-[1] hover:rotate-0 hover:scale-[1.1]"
                    : "-rotate-[1.3deg] scale-[1] hover:rotate-0 hover:scale-[1.1]"
                }
              `}
            >
              {img.isPlaceholder ? (
                <div className="w-full h-full bg-gray-700/50 animate-pulse" />
              ) : (
                <>
                  <Image
                    src={img.url}
                    alt={img.display_name || "A glimpse of my life"}
                    fill
                    loading="lazy"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/images/blur-placeholder.png"
                  />
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                      flex items-end transition-opacity duration-300
                      group-hover:opacity-100
                      md:opacity-0
                    `}
                  >
                    <p className="text-[14px] font-bold p-[10px] break-words whitespace-normal text-left text-white font-sans">
                      {img.display_name}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
