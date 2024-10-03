import { useState } from "react";
import api from "../api/axios";

const URL = `/users/self/`;

function useModifyUser() {
  const [isModifyingUser, setIsModifyingUser] = useState(false);

  const updateAlias = async (alias: string) => {
    setIsModifyingUser(true);
    try {
      await api.patch(URL, {
        alias,
      });
    } catch (error) {
      console.log(`There was an error with the request: ${error}`);
    } finally {
      setIsModifyingUser(false);
    }
  };

  return { updateAlias, isModifyingUser };
}

export default useModifyUser;
