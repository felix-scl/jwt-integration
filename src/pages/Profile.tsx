import useLogout from "../hooks/useLogout";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../api/axios";
import useModifyUser from "../hooks/useModifyUser";

type Inputs = {
  alias: string;
};

interface User {
  email: string;
  alias: string;
  image: string;
}

const URL = "/users/profile-widget/";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Profile() {
  const { logout, isLoading } = useLogout();
  const { updateAlias, isModifyingUser } = useModifyUser();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [user, setUser] = useState<User>();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) navigate("/login");

    const fetchUserData = async () => {
      const response = await api.get(URL);

      setUser(response.data);
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      setValue("alias", user.alias);
    }
  }, [user, setValue]);

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      await logout(refreshToken);
      navigate("/");
    }
  };

  const handleSaveSettings: SubmitHandler<Inputs> = async (data) => {
    await updateAlias(data.alias);
  };

  return (
    <>
      <header className="flex items-center justify-between border border-b-slate-950/10 px-6 py-3 font-semibold text-black-secondary lg:border-0 lg:px-20 lg:py-6">
        <Logo />

        <nav>
          <ul>
            <li>
              <button
                onClick={handleLogout}
                className="hover:bg-green-secondary rounded-full bg-green-primary px-4 py-1.5"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="mt-16 px-6 md:px-10 lg:mt-24">
          <div className="mx-auto space-y-10 transition-all duration-300 xs:max-w-[400px] lg:max-w-[800px]">
            <header>
              <h1 className="text-3xl font-semibold text-black-primary">
                Your profile
              </h1>
            </header>

            <div className="space-y-14">
              {user?.image ? (
                <div className="relative mx-auto w-48 overflow-hidden rounded-full bg-transparent transition-all duration-300 lg:w-60">
                  <img
                    src={BACKEND_URL + user?.image}
                    alt={`${user?.alias}'s profile picture`}
                  />
                </div>
              ) : (
                <div className="skeleton mx-auto h-44 w-44 rounded-full bg-stone-300"></div>
              )}
              <form
                className="w-full space-y-10"
                onSubmit={handleSubmit(handleSaveSettings)}
              >
                <div className="flex items-center justify-center gap-4">
                  <label htmlFor="alias" className="text-grey-primary">
                    Alias
                  </label>
                  <input
                    type="text"
                    id="alias"
                    className={`w-4/6 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      editMode
                        ? "border-[#00000080] transition-shadow duration-700 hover:shadow-[inset_0_0_0_2px_#00000080] focus:border-black-secondary focus:shadow-[inset_0_0_0_2.5px_#163300] focus:outline-none"
                        : "border-slate-950/10 bg-stone-200 text-slate-950/50 outline-none"
                    }`}
                    {...register("alias")}
                  />
                </div>

                <div className="flex items-center justify-center gap-4">
                  <label htmlFor="email" className="text-grey-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value="fhernan@live.cl"
                    className="w-4/6 rounded-xl border border-slate-950/10 bg-stone-200 px-4 py-3 text-slate-950/50 outline-none"
                    disabled
                  />
                </div>

                <button
                  type="submit"
                  className={`hover:bg-green-secondary ml-auto block w-64 rounded-full bg-green-primary px-4 py-3 font-semibold text-black-secondary transition-colors duration-300 ${isLoading ? "cursor-not-allowed bg-slate-200 hover:bg-slate-200" : ""}`}
                  onClick={() => setEditMode((prevState) => !prevState)}
                  disabled={isLoading || isModifyingUser}
                >
                  {editMode ? "Save" : "Edit"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
