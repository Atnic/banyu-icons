import { BRAND_TITLE } from "@utils/constants";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import ActiveLink from "../active-link";
import BrandIcon from "./icon";

export default function Heading({ isOpen, setIsOpen }) {
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <div className="brand">
      <ActiveLink href="/">
        <a>
          <BrandIcon />
          <span style={{width:"max-content", margin:0, fontWeight:"500"}}>{BRAND_TITLE}</span>
        </a>
      </ActiveLink>
      <div className="brand--navmenu">
        <button className={`menu ${isOpen && "active"}`} onClick={toggleMenu}>
          <div>Menu</div>
        </button>
      </div>
    </div>
  );
}
