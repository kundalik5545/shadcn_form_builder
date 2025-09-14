"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { gitHubLink, websiteHeroLine } from "@/settings/AllLinks";

export default function Hero() {
  return (
    <section className="relative container mx-auto mt-4 max-w-screen-xl px-6">
      <div className="relative sm:overflow-hidden">
        <div className="relative flex flex-col items-start justify-start rounded-xl  max-md:text-center">
          <div
            className="animate-gradient-x absolute inset-0 top-32 z-0 hidden blur-2xl dark:block"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, white, transparent)",
              background:
                "repeating-linear-gradient(65deg, hsl(var(--primary)), hsl(var(--primary)/0.8) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)",
              backgroundSize: "200% 100%",
            }}
          />
          <div
            className="animate-gradient-x absolute inset-0 top-32 z-0 text-left blur-2xl dark:hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, white, transparent)",
              background:
                "repeating-linear-gradient(65deg, hsl(var(--primary)/0.9), hsl(var(--primary)/0.7) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)",
              backgroundSize: "200% 100%",
            }}
          />
          <h1 className="mb-4 flex flex-wrap gap-2 text-3xl leading-tight font-medium md:text-5xl">
            {websiteHeroLine}
          </h1>
          <p className="text-muted-foreground mb-8 text-left md:max-w-[80%] md:text-xl">
            Shadcn Builder is a powerful, no-code form builder for the shadcn/ui
            component library. It helps developers visually create beautiful,
            accessible forms and export clean, production-ready React + Tailwind
            CSS code in seconds.
          </p>
          <div className="mb-6 flex flex-wrap gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>20+ Form Components</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>100+ Pre-built Form Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Responsive Form Design</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Generated React Code</span>
            </div>
          </div>
          <div className="z-10 mt-2 inline-flex items-center justify-start gap-3">
            <Link
              id="hero-start-builder-cta"
              href="/form-builder"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "rounded-full",
                })
              )}
            >
              Getting Started <ArrowRight className="size-4" />
            </Link>
            <a
              id="hero-github-cta"
              href={gitHubLink}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "bg-background rounded-full",
                })
              )}
            >
              GitHub
              <FaGithub />
            </a>
          </div>
          <div className="relative z-10 mt-16 w-full overflow-hidden">
            <Image
              src="/dashbaord.png"
              alt="MVPBlocks component library preview"
              width={1000}
              height={600}
              className="animate-in fade-in slide-in-from-bottom-12 z-10 mx-auto w-full rounded-lg border-6 border-neutral-100 object-cover shadow-2xl duration-1000 select-none lg:-mb-40 dark:border-neutral-600"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
