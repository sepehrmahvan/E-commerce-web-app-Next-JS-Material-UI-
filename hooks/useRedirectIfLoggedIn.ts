"use client"; // Ensures this code only runs on the client side
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useRedirectIfLoggedIn = () => {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      // Redirect to a protected route if token exists
      router.replace("/"); // replace with your protected route
    }
  }, [router]);
};