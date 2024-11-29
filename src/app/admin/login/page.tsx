import { TITLE_PAGE_ADMIN } from "@/constants/constants";
import TemplateAdminSignIn from "@/features/admin/signin/TemplateAdminSignIn";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: TITLE_PAGE_ADMIN.login,
};

export default function PageAdminSignIn() {
  return <TemplateAdminSignIn />;
}
