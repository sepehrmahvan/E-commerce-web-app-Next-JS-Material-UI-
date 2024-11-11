import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode } from "react";

const MyContext = createContext<any | null>(null);
const { Provider } = MyContext;

interface MyProviderProps {
  children: ReactNode;
}

interface MycontextProps {}

const MyProvider = ({ children }: MyProviderProps) => {
  const checkTokenValidity = async () => {
    const token = sessionStorage.getItem("token");
    
    if (token) {
      try {
        const response = await fetch("http://localhost:8080/api/check-token", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("userId");
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const { error } = useQuery({
    queryKey: ["tokenValidity"],
    queryFn: checkTokenValidity,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (error instanceof Error) {
    console.error("Error checking token validity:", error.message);
  }

  const contextValue: MycontextProps = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export { MyContext, MyProvider };
