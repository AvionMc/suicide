import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Join our server to buy!
        </div>
        <Link href="https://discord.gg/hpxjBTC6YN">
          <a className="btn h-color no-decoration">
            Buy now!
          </a>
        </Link>
      </section>
    </>
  );
};

export default JoinNow;
