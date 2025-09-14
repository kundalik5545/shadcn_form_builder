"use client";
import React from "react";
import WebsiteLogo from "./WebsiteLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Home, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { pagesLinks } from "@/settings/AllLinks";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-30 flex items-center justify-between h-14 w-full bg-background border-b p-3">
      {/* Logo */}
      <WebsiteLogo />

      {/* PC Menu */}
      <div className="PC__Menu hidden md:flex items-center justify-between md:gap-3 ">
        <div className="flex items-center space-x-3  gap-1">
          {pagesLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="flex items-start "
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        <Link
          href={"/form-builder"}
          className="flex items-center justify-center gap-2"
        >
          <Button size={"lg"}>
            Form Builder <ArrowRight />
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="Mobile_Tablet__Menu flex items-center justify-center md:hidden">
        <Separator orientation="vertical" />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} onClick={() => setOpen(true)}>
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className=" border-b-2  pb-3">Menu</SheetTitle>
            </SheetHeader>

            <div className="pl-5">
              {pagesLinks.map((link, i) => (
                <Link
                  href={link.href}
                  key={i}
                  className="flex items-start gap-1 py-1.5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <ModeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
