"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MyProvider } from "./context/Context";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MyProvider>{children}</MyProvider>
    </QueryClientProvider>
  );
}
