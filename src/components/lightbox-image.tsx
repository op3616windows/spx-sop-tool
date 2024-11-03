"use client";

import { Images } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function LightBox({ images, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-8 w-8">
            <Images className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0">
          <DialogTitle className="sr-only">
            Are you absolutely sure?
          </DialogTitle>
          <Carousel
            className="w-full max-w-4xl"
            setApi={(api) => {
              api?.on("select", () => {
                setCurrentIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full aspect-video">
                    <Image
                      src={image}
                      alt={alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="absolute bottom-4 left-0 right-0 text-center text-black">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
