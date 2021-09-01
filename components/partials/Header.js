import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);
  const toggleMobileMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="inner">
          <Link href="/">
            <a>
              <span>LOGO</span>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
