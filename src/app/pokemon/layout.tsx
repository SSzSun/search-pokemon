"use client";

import { useSearchParams } from "next/navigation";

export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const modalName = searchParams.get("evolution"); // Get name from query param

  return (
    <>
      {modalName ? modal : null}
      {children}
    </>
  );
}
