import VideoPlayer from "../components/VideoPlayer";

function Home() {
  return (
    <>
      <header className="flex items-center justify-between border border-b-slate-950/10 px-6 py-3 font-semibold text-black-secondary lg:border-0 lg:px-20 lg:py-6">
        <a href="#" className="font-josefin text-xl font-bold">
          <span className="hidden uppercase tracking-widest sm:inline">
            Wise
          </span>
          <span className="sm:hidden">W</span>
        </a>

        <nav className="flex gap-8">
          <ul className="hidden gap-1 md:flex">
            <li>
              <a
                href="#"
                className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
              >
                Help
              </a>
            </li>
          </ul>

          <ul className="flex gap-3">
            <li>
              <a
                href="#"
                className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
              >
                Log in
              </a>
            </li>
            <li>
              <a href="#" className="rounded-full bg-green-primary px-4 py-1.5">
                Start Here
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="mt-10 space-y-14 px-6 md:px-10 lg:mt-12">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="xs:text-5xl text-center font-rammetto text-4xl uppercase text-black-primary md:mx-auto md:w-5/6 lg:w-4/6 lg:text-6xl xl:text-7xl">
                Connect your money worldwide
              </h1>
              <p className="xs:text-lg text-center text-grey-primary md:mx-auto md:w-5/6 lg:w-4/6 lg:text-xl xl:w-3/6 xl:text-2xl">
                Pay and get paid globally. Move money where it matters: from
                paying your mortgage in euros to sending rupees overseas. Fast,
                simple and secure.
              </p>
            </div>

            <div className="xs:flex-row xs:items-center xs:justify-center xs:gap-4 flex flex-col gap-6 font-semibold text-black-secondary lg:text-lg">
              <a
                href="#"
                className="rounded-full bg-green-primary px-6 py-3 text-center"
              >
                Open an account
              </a>
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
