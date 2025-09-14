import { cn } from "@/lib/utils";
import {
  BlocksIcon,
  Coffee,
  CoffeeIcon,
  ExternalLink,
  Github,
  Heart,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "@/components/ui/badge";
import SocialLinks from "./SocialLinks";
import { pagesLinks, supportLinks, websiteName } from "@/settings/AllLinks";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <BlocksIcon className="h-6 w-6" strokeWidth={2} />
            <span className="text-lg font-semibold">
              {websiteName}
              <sup className="text-xs text-muted-foreground font-normal ml-1">
                Beta
              </sup>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs sm:max-w-sm ">
            Build beautiful, responsive forms with drag-and-drop simplicity. No
            coding required, just pure creativity.
          </p>
          <div className="flex flex-row gap-4 py-3 px-2">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-between">
          {/* Product Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              {pagesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">
                  Tutorials <Badge variant="outline">Coming Soon</Badge>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Community <Badge variant="outline">Coming Soon</Badge>
                </span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <Separator className="my-8" />
        {/* Bottom Section */}
        <div className="w-full flex items-center justify-center gap-1 text-sm text-muted-foreground flex-wrap">
          <span>Made with</span>
          💖 by a<span className="text-foreground">Random Coder.</span>
        </div>
      </div>
    </footer>
  );
}
