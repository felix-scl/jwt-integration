import { useState } from "react";
import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_URL}/users/logout/`;

function useLogout() {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async (refreshToken: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(URL, {
        refresh: refreshToken,
      });

      return response;
    } catch (error) {
      console.log(`There was an error with the request: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
}

export default useLogout;
