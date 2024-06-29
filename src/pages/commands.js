import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Features</title>
        <meta
          name="description"
          content="Features page | Awesome roblox script created with ❤️."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Features
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Combat
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Target</kbd> {" "}
                  <span className="p-color">[FOV/ Target Type, Box Fov, Nearest Part / Point, Checks, Hit Chance).</span>
                </li>
                <li>
                  <kbd>Aim Assist</kbd> {" "}
                  <span className="p-color">[FOV / Target (Toggling), Camera/Mouse Method, Disable when [Flags], Checks, Shake, Nearest Part / Point)</span>
                </li>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Visuals 👁
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>On Hit</kbd> -{" "}
                  <span className="p-color">[Effect, Logs, Chams, Marker]</span>
                </li>
                <li>
                  <kbd>ESP</kbd> -{" "}
                  <span className="p-color"> [Box (Corner, 2D), Health (Bar, Text), Armor (Bar, Text), Skeleton, ViewAngle / LookingAt, Highlight, Head Dot, Distance, Arrow. Flags, Tracer/Line]</span>
                </li>
                <li>
                  <kbd></kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Anti-Aim 🏃🏿
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>C-Sync</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>Custom Velocity</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Gameplay 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
