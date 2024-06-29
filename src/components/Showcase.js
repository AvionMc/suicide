import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Suicide.lol</h1>
        <h2 className="showcase-header-text h-color">
          The only da hood script you need!
        </h2>
        <p className="showcase-para p-color">
          Our script will fill in all your needs for an affordable price.
        </p>
        <span className="p-color">The script is currently operational with no flaws!</span>
        <div className="showcase-btn">
          <Link href="#">
            <a className="btn h-color no-decoration">
              Cop now!
            </a>
          </Link>

          <Link href="https://discord.gg/hpxjBTC6YN">
            <a className="btn h-color no-decoration">
              Join server!
            </a>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;