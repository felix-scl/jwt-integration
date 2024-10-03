import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    const response = await login(data.email, data.password);

    if (response?.status === 200) {
      const { access, refresh } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      navigate("/profile");
    }
  };

  return (
    <>
      <header className="flex items-center justify-between border border-b-slate-950/10 px-6 py-3 font-semibold text-black-secondary lg:border-0 lg:px-20 lg:py-6">
        <Logo />

        <NavLink to="/" className="rounded-full p-1 hover:bg-stone-200/50">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="m19.629 5.915-1.2-1.2-6.257 6.257-6.258-6.257-1.2 1.2 6.258 6.257-6.258 6.257 1.2 1.2 6.258-6.257 6.257 6.257 1.2-1.2-6.258-6.257 6.258-6.257Z"></path>
          </svg>
        </NavLink>
      </header>

      <main>
        <section className="mt-16 px-6 md:px-10 lg:mt-24">
          <div className="mx-auto space-y-10 transition-all duration-300 xs:max-w-[400px] lg:max-w-[500px]">
            <header className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-black-primary">
                Welcome back
              </h1>
              <p className="text-sm text-grey-primary">
                New to Wise?{" "}
                <NavLink
                  to="/get-otp"
                  className="font-bold text-black-secondary underline underline-offset-4 transition-all duration-300 hover:text-slate-600/80"
                >
                  Sign up
                </NavLink>
              </p>
            </header>

            <form
              className="w-full space-y-10"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div className="space-y-10">
                <div>
                  <label htmlFor="email" className="text-grey-primary">
                    Your email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-xl border border-[#00000080] px-4 py-3 transition-shadow duration-700 hover:shadow-[inset_0_0_0_2px_#00000080] focus:border-black-secondary focus:shadow-[inset_0_0_0_2.5px_#163300] focus:outline-none"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="absolute -bottom-5 left-0 text-xs text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text-grey-primary">
                    Your One-time password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full rounded-xl border border-[#00000080] px-4 py-3 transition-shadow duration-700 hover:shadow-[inset_0_0_0_2px_#00000080] focus:border-black-secondary focus:shadow-[inset_0_0_0_2.5px_#163300] focus:outline-none"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="absolute -bottom-5 left-0 text-xs text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`hover:bg-green-secondary w-full rounded-full bg-green-primary px-4 py-3 font-semibold text-black-secondary transition-colors duration-300 ${isLoading ? "cursor-not-allowed bg-slate-200 hover:bg-slate-200" : ""}`}
                disabled={isLoading}
              >
                Log in
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
