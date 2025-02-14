"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 lg:w-[90%] xl:w-[80%]">
        <div
          className={`flex items-center justify-between h-20 ${poppinsFont.className}`}
        >
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Hasanat Logo"
              width={120}
              height={60}
              quality={100}
              className="w-auto h-16"
            />
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7 justify-end">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Products <span className="text-[7px]">▼</span>
              </Link>
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Project
              </Link>
              <Link
                href="/"
                className="text-primary hover:text-primary/80 transition-colors flex flex-col justify-center items-center relative top-2 text-sm xl:text-base"
              >
                <p>Features</p>
                <p className="text-xs">▼</p>
              </Link>
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Students
              </Link>
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Fans
              </Link>
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Play
              </Link>
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors text-sm xl:text-base"
              >
                Buy-Hasanat
              </Link>
              <Button className="rounded-full bg-transparent border-2 border-primary hover:bg-primary text-sm xl:text-base">
                Download
              </Button>
            </div>

            {/* Search Icon and Mobile Navigation Toggle */}
            <div className="flex items-center space-x-4 px-3">
              <Search className="h-5 w-5 text-white" />

              <Menu
                className="text-white h-6 w-6 block lg:hidden"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Products <span className="text-[7px]">▼</span>
          </Link>
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Project
          </Link>
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Features ▼
          </Link>
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Students
          </Link>
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Fans
          </Link>
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Play
          </Link>
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
          >
            Buy-Hasanat
          </Link>
          <Button className="rounded-full bg-transparent border-2 border-primary w-28">
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
}
