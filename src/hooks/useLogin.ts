import { useState } from "react";
import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_URL}/users/login/`;

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, otp: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(URL, {
        email,
        token: otp,
      });
      return response;
    } catch (error) {
      console.log(`There was an error with the request: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
}

export default useLogin;
