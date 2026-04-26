"use client";

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { FadeIn } from "@/components/fade-in";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GooglePhoto } from "@/lib/google-reviews";

export function PhotoGallery({ photos }: { photos: GooglePhoto[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<GooglePhoto | null>(null);

  if (!photos || photos.length === 0) return null;

  return (
    <>
      <div className="w-full relative py-8 px-4 sm:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {photos.map((photo, i) => (
              <CarouselItem
                key={photo.photo_reference}
                className="pl-2 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <FadeIn delay={i * 0.1}>
                  <button
                    type="button"
                    className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <Image
                      src={`/api/photo?ref=${photo.photo_reference}`}
                      alt="Gear Up Driving School Training"
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 300px, 400px"
                    />

                    {/* Hover overlay with expand icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </button>
                </FadeIn>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-4 lg:-left-12 bg-white hover:bg-slate-50 border-slate-200" />
            <CarouselNext className="-right-4 lg:-right-12 bg-white hover:bg-slate-50 border-slate-200" />
          </div>
        </Carousel>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={(open) => !open && setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-[90vw] md:max-w-[80vw] h-[80vh] md:h-[90vh] p-0 overflow-hidden border-none bg-black/95">
          {selectedPhoto && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={`/api/photo?ref=${selectedPhoto.photo_reference}`}
                alt="Enlarged Training Photo"
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
