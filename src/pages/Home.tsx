import VideoPlayer from "../components/VideoPlayer";

function Home() {
  return (
    <>
      <header className="flex justify-between border border-b-slate-950/10 px-10 py-2">
        <a href="#" className="font-josefina">
          <span className="hidden sm:inline">Wise</span>
          <span className="sm:hidden">W</span>
        </a>

        <nav className="flex gap-8">
          <ul className="hidden gap-2 md:flex">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>

          <ul className="flex gap-2">
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Start Here</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="space-y-14 px-4">
          <div className="space-y-8">
            <h1 className="text-black-primary mt-6 text-center font-rammetto text-4xl uppercase">
              Connect your money worldwide
            </h1>
            <p className="text-grey-primary text-center">
              Pay and get paid globally. Move money where it matters: from
              paying your mortgage in euros to sending rupees overseas. Fast,
              simple and secure.
            </p>
          </div>

          <div className="text-black-secondary flex flex-col gap-6">
            <a
              href="#"
              className="bg-green-primary rounded-full px-10 py-3 text-center font-bold"
            >
              Open an account
            </a>
            <a
              href="#"
              className="text-center font-bold underline underline-offset-4"
            >
              Send money now
            </a>
          </div>

          <VideoPlayer />
        </section>
      </main>
    </>
  );
}

export default Home;
