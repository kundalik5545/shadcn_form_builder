import { Blocks } from "lucide-react";
import Link from "next/link";
import React from "react";

const WebsiteLogo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-3">
      <Blocks /> Shadcn Form Builder <sup>Beta</sup>
    </Link>
  );
};

export default WebsiteLogo;
