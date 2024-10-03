import { useState } from "react";
import api from "../api/axios";

const URL = `/users/logout/`;

function useLogout() {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async (refreshToken: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(URL, {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    } catch (error) {
      console.log(`There was an error with the request: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
}

export default useLogout;
