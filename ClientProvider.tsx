"use client";

import { MyProvider } from "./context/Context";


export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MyProvider>{children}</MyProvider>;
}