"use client";

import { useEffect } from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Registration layout loaded");
  }, []);

  return <>{children}</>;
}
