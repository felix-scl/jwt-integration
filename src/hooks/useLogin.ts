import { useState } from "react";
import api from "../api/axios";

const URL = `/users/login/`;

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, otp: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(URL, {
        email,
        token: otp,
      });

      if (response.status === 200) {
        const { access, refresh } = response.data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
      }

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
