import IconsPageComponent from "@components/pages/user";
import { useRouter } from "next/router";
import React from "react";

export default function IconsPage() {
  const router = useRouter();

  return <>{<IconsPageComponent />}</>;
}
