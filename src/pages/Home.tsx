import { NavLink, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <>
      <Header />

      <main>
        <section className="mt-10 space-y-14 px-6 md:px-10 lg:mt-12">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-center font-rammetto text-4xl uppercase text-black-primary xs:text-5xl md:mx-auto md:w-5/6 lg:w-4/6 lg:text-6xl xl:text-7xl">
                Connect your money worldwide
              </h1>
              <p className="text-center text-grey-primary xs:text-lg md:mx-auto md:w-5/6 lg:w-4/6 lg:text-xl xl:w-3/6 xl:text-2xl">
                Pay and get paid globally. Move money where it matters: from
                paying your mortgage in euros to sending rupees overseas. Fast,
                simple and secure.
              </p>
            </div>

            <div className="flex flex-col gap-6 font-semibold text-black-secondary xs:flex-row xs:items-center xs:justify-center xs:gap-4 lg:text-lg">
              <NavLink
                to="/get-otp"
                className="hover:bg-green-secondary rounded-full bg-green-primary px-6 py-3 text-center"
              >
                Open an account
              </NavLink>
              <a
                href="#"
                className="px-6 py-3 text-center underline underline-offset-[6px]"
              >
                Send money now
              </a>
            </div>
          </div>

          <VideoPlayer />
        </section>
      </main>
    </>
  );
}

export default Home;
