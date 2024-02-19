import IconsPageComponent from "@components/pages/operational";
import { useRouter } from "next/router";
import React from "react";

export default function IconsPage() {
  const router = useRouter();

  return <>{<IconsPageComponent />}</>;
}
