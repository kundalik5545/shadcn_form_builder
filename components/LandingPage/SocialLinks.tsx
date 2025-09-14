import { socialLinks } from "@/settings/AllLinks";

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          className="flex items-center gap-2 text-sm hover:text-slate-500"
          target="_blank"
          href={link.href}
        >
          {link.icon}
        </a>
      ))}
    </>
  );
}
