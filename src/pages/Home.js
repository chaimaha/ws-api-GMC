import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        {/* Hero Section  */}
        <section id="hero" style={{ "margin-top": "1%" }}>
          <div className="hero container">
            <div>
              <h1>
                The latest recipes
                <span />
              </h1>
              <h1>
                cocktails
                <span />
              </h1>
              <h1>
                Published alcoholic beverages <span />
              </h1>
            </div>
          </div>
        </section>
        {/* End Hero Section  */}

        {/* ----------------------------------------------------------------------------- */}
        {/* Projects Section */}
        <section id="projects">
          <div className="projects container">
            <div className="projects-header">
              <h1 className="section-title">
                our<span> cocktails</span>
              </h1>
            </div>
            <div className="all-projects">
              <div className="project-item">
                <div className="project-info">
                  <p>
                    There are some cocktails that will never go out of style.
                    Their irresistible taste and their simplicity have stood the
                    test of time. To become a true bartender, you must first
                    know your classics. Here is our classic top to become a pro
                    behind the bar. To your shakers, comrades!
                  </p>
                </div>
                <div className="project-img">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.ikkVaOkM2-i-3LkZpJaMBQHaE8&pid=Api&rs=1&c=1&qlt=95&w=185&h=123"
                    alt="img"
                  />
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <p>
                    Organic. Botanic. Sparkling. Delicious. What more could any
                    discerning, health-conscious Millennial or Gen Zer want in a
                    canned cocktail? But there’s more. This new line of
                    ready-to-drink cocktails comes from Square One, the organic
                    spirits company founded, funded and run by a woman. Its CEO
                    Allison Evanow was a pioneer in a male dominated industry
                    way back in 2004 when she set out to produce certified
                    organic spirits that tasted light, clean yet complex.
                  </p>
                </div>
                <div className="project-img">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.ikkVaOkM2-i-3LkZpJaMBQHaE8&pid=Api&rs=1&c=1&qlt=95&w=185&h=123"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Projects Section */}

        {/* Contact Section */}
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                Contact <span>Us</span>
              </h1>
            </div>
            <div className="contact-items">
              <div className="contact-item1">
                <div className="icon">
                  <img
                    className="svg"
                    src="https://tse3.mm.bing.net/th?id=OIP.odvZ6k6EzfM2_b5zwiE-1gHaHa&pid=Api&P=0&w=300&h=300"
                    alt=""
                  />
                </div>
                <div className="contact-info">
                  <h1>Mobile</h1>
                  <h2 style={{ color: "black" }}>+216 51 745 319</h2>
                </div>
              </div>
              <div className="contact-item1">
                <div className="icon">
                  <img
                    className="svg"
                    src="https://tse4.mm.bing.net/th?id=OIP.ZCofKB_iyB3u_ZugQrUCqAHaHb&pid=Api&P=0&w=300&h=300"
                    alt=""
                  />
                </div>
                <div className="contact-info">
                  <h1 style={{ margin: "2% 25%" }}>Email</h1>
                  <h2 style={{ color: "black" }}>
                    bestcocktail.paris@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>
    </div>
  );
};

export default Home;
