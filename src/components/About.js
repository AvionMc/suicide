import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why purchase our script you may ask?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Quality</h4>
              <p className="p-color">
                Our script offers great quality for an affordable price for anyone, and if you can't afford it you can still try and win our giveaways that we are hosting regularly!.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                Need help or have questions on how to purchase or how to use? Our support will help you whenever you need.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏⚡️ Optimization</h4>
              <p className="p-color">
                Our script receives frequent update to make sure our users have the smoothest experience possible!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/features" className="h-color no-decoration">
            Check out the features &rarr;
          </Link>
        </p>
      </section>
    </>
  );
};

export default About;
