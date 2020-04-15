import React, { useState, useEffect } from "react";
import "../../index.css";

const Machine = () => {
  const [data, setCitacao] = useState({});
  const [color, setColor] = useState("");

  let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  let mystyle = {
    paddingTop: "180px",
    width: "100%",
    backgroundColor: `${colors[color]}`,
    height: "620px",
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCitacao(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
      });
    setColor(Math.floor(Math.random() * colors.length));
  }, []);

  function Box() {
    var autor = data.author;
    var citacao = data.quote;
    var autorEn = encodeURIComponent(autor);
    var citacaoEn = encodeURIComponent(citacao);
    var Url = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${citacaoEn}"${autorEn}`;

    console.log(Url);
    return (
      <div id="quote-box">
        <h3 id="text" style={{ color: `${colors[color]}` }}>
          {data.quote}
        </h3>
        <p id="author" style={{ color: `${colors[color]}` }}>
          {` - ${data.author}`}
        </p>
        <section className="comands">
          <div className="socialMedia">
            <a id="tweet-quote" href={Url}>
              <img
                class="icon"
                src="https://webstockreview.net/images/thumb-clipart-gutka-3.png"
              />
            </a>
            <a>
              <img
                className="icon2"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/342_Tumblr_Square_logo-512.png"
              />
            </a>
          </div>

          <input
            id="new-quote"
            style={{ backgroundColor: `${colors[color]}` }}
            className="button"
            type="button"
            value="More Quotes.."
            onClick={handleChange}
          />
        </section>
      </div>
    );
  }
  const handleChange = (e) => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCitacao(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
      });

    setColor(Math.floor(Math.random() * colors.length));
  };

  return (
    <div style={mystyle}>
      <div className="container">
        <Box />
      </div>
    </div>
  );
};

export default Machine;
