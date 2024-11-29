import { METADATA_ADMIN } from "@/constants/constants";
import LayoutProvider from "@/layouts/LayoutProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = { ...METADATA_ADMIN };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
