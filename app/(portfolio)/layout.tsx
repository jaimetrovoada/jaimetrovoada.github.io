import React from "react";
import Layout from "@/components/layout";

interface Props {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
