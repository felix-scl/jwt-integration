import { useState } from "react";
import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_URL}/users/get-otp/`;

function useGetOtp() {
  const [isLoading, setIsLoading] = useState(false);

  const getOtp = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(URL, {
        email,
      });

      return response;
    } catch (error) {
      console.log(`There was an error with the request: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { getOtp, isLoading };
}

export default useGetOtp;
