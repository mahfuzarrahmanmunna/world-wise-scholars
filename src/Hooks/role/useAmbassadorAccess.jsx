import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const useAmbassadorAccess = () => {
  const { user } = useContext(AuthContext);

  const fetchAmbassadorAccess = async () => {
    if (!user?.email) return null;

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL || "https://wws-idp-server-gray.vercel.app"}/ambassador/access/${user.email}`,
        { withCredentials: true },
      );
      return data;
    } catch (err) {
      // ✅ FIX: You MUST return something here (e.g., null).
      // If you don't return anything, the function returns 'undefined',
      // which causes the "Query data cannot be undefined" error.

      // Optional: Don't log red error for 403s (expected if user isn't ambassador)
      if (err.response && err.response.status === 403) {
        return null;
      }

      // Log other errors (500, network issues)
      console.error("Ambassador Access Error:", err);
      return null;
    }
  };

  const {
    data: ambassadorData,
    isLoading: ambassadorDataLoading,
    error,
  } = useQuery({
    queryKey: ["ambassadorData", user?.email],
    queryFn: fetchAmbassadorAccess,
    enabled: !!user?.email,
    retry: false, // Prevents infinite loops on 403 errors
  });

  return [ambassadorData, ambassadorDataLoading, error];
};

export default useAmbassadorAccess;
