/* eslint-disable react/no-unescaped-entities */
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import deved from "./images/dev-ed-wave.png";
import design from "./images/design.png";
import code from "./images/code.png";
import consulting from "./images/consulting.png";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";
import Button from "./component/Button";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  // Function to switch between light and dark mode.

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const themeToChange = document.querySelector("html").classList;
    themeToChange.remove("light", "dark");
    themeToChange.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <main className="bg-white px-10 max-container md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-8 mb-12 flex justify-between items-center ">
            <h1 className="text-xl font-medium font-palanquin dark:text-white">
              <span className="text-teal-600 text-2xl">D</span>evByArjun
            </h1>
            <ul className="flex items-center">
              <Button />

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* nav section ends  */}

          <div className="text-center p-1 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-500">
              Arjun Pangeni
            </h2>

            <h3 className="text-2xl py-2 font-palanquin md:text-3xl dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-6 text-slate-gray font-montserrat md:text-lg max-w-xl mx-auto">
              Freelancer providing services for programming and design content
              needs.Join me down below and let's get cracking!
            </p>
          </div>
          <div className=" text-4xl  flex justify-center gap-16 py-3 text-slate-gray ">
            <AiFillTwitterCircle className="dark:text-blue-500" />
            <AiFillLinkedin className="dark:text-blue-700" />
            <AiFillYoutube className="dark:text-red-500" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-16 mx-auto overflow-hidden md:h-96 md:w-96">
            <img src={deved} alt="" className=" object-cover" />
          </div>
        </section>

        {/* section two */}

        <section className="my-10 mx-auto max-container">
          <div className="flex flex-col items-center my-10">
            <h3 className="text-3xl py-1 text-teal-500 mx-auto">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-6 text-slate-gray font-montserra text-center max-w-lg">
              Since the beginning of my journey as a freelance developer, i've
              done remote work for{" "}
              <span className="text-teal-500">agencies </span>
              consulted from <span className="text-teal-500">startups </span>and
              collaborated with talented people to create digital products for
              both business and consumer use.
            </p>
          </div>
          <div className="md:flex  gap-10  ">
            <div className="text-center shadow-lg p-5 rounded-xl my-2 flex flex-col justify-center items-center">
              <img src={design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 text-teal-500 ">
                Beautiful Designs
              </h3>

              <p className="text-md py-5 leading-6 text-slate-gray font-montserra">
                Creating elegant designs suited for yourneeds following cover
                design theory.
              </p>
              <h4 className="pt-4 text-teal-500">Desin tools I use</h4>
              <p className="text-slate-gray  pt-4 pb-1">Illustrator</p>
              <p className="text-slate-gray py-1 ">Photoshop</p>
              <p className="text-slate-gray  py-1">FigmaclassName</p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-2 flex flex-col justify-center items-center">
              <img src={consulting} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 text-teal-500 ">
                Beautiful Designs
              </h3>

              <p className="text-md py-5 leading-6 text-slate-gray font-montserra">
                Creating elegant designs suited for yourneeds following cover
                design theory.
              </p>
              <h4 className="pt-4 text-teal-500">Desin tools I use</h4>
              <p className="text-slate-gray  pt-4 pb-1">Illustrator</p>
              <p className="text-slate-gray py-1 ">Photoshop</p>
              <p className="text-slate-gray  py-1">FigmaclassName</p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-2 flex flex-col justify-center items-center ">
              <img src={code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 text-teal-500 ">
                Beautiful Designs
              </h3>

              <p className="text-md py-5 leading-6 text-slate-gray font-montserra">
                Creating elegant designs suited for yourneeds following cover
                design theory.
              </p>
              <h4 className="pt-4 text-teal-500">Desin tools I use</h4>
              <p className="text-slate-gray  pt-4 pb-1">Illustrator</p>
              <p className="text-slate-gray py-1 ">Photoshop</p>
              <p className="text-slate-gray  py-1">FigmaclassName</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center my-10">
            <h3 className="text-3xl py-1 text-teal-500 mx-auto">Portfolio</h3>
            <p className="text-md py-2 leading-6 text-slate-gray font-montserra text-center">
              Since the beginning of my journey as a freelance developer, i've
              done remote work for{" "}
              <span className="text-teal-500">agencies </span>
              consulted from <span className="text-teal-500">startups </span>and
              collaborated with talented people to create digital products for
              both business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center ">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web4}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web5}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web6}
                alt=""
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <footer className=" p-4 text-center  w-full text-slate-gray mx-auto mt-10 dark:text-white">
            <p className="py-5">
              &copy; 2024 Arjunpangeni. All rights reserved.
            </p>
          </footer>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
