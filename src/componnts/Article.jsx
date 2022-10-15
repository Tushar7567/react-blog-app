import React from "react";

const Article = () => {
  return (
    <>
      <nav>
      <div className="heading nav-article ">
        <span className="heading-the  nav-article-the">The</span>
        <span className="heading-siren  nav-article-siren">Siren</span>
      </div>
      <button className="nav-btn">Get Started</button>
      </nav>
      <div className="float">
        <div style={{ marginBottom: "20px" }}>
          <img src="../Images/rythm.png" className="article-img-hand" alt="" />
          <span className="txt-s">9.3K claps</span>
        </div>

        <div>
          <img src="../Images/share.png" className="article-img-hand" alt="" />
          <span className="txt-s">Share this article</span>
        </div>
      </div>

      <div className="article-container">
        <section className="article-content">
          <h2>5 Ways to animate a React app.</h2>

          <div className="mask-div ">
            <img
              src="../Images/MaskGroup.png"
              className="article-img-maskgroup"
              alt=""
            />
            <div className="div-col">
              <strong>Dmitry Nozhenko</strong>
              <span className="txt-s">jan 28, 2021- 10 min read</span>
            </div>
          </div>

          <img
            src="../Images/Screenshot1.png"
            className="article-img-screenshot1"
            alt=""
          />

          <p className="article-text-size">
            Animation in ReactJs app is a popular topic and there are many ways
            to create different types of animations. Many developers create
            animation exclusively using css and adding classes to HTML tags.
            This is a great way and you should use it. If you want to create
            complex animations you can pay attention to GreenSock. GreenSock is
            the most powerful animation platform. There are also a lot of
            libraries, components for creating animation in React. Let’s talk
            about them
          </p>

          <img
            src="../Images/Screenshot2.png"
            className="article-img-screenshot2"
            alt=""
          />

          <div style={{ margin: "20px 30px" }}>
            <button style={{ opacity: "0.6" }}>React</button>
            <button style={{ opacity: "0.6" }}>Javascript</button>
            <button style={{ opacity: "0.6" }}>Animation</button>
          </div>

          <div style={{ margin: " 20px 30px" }}>
            <img
              src="../Images/rythm.png"
              className="article-img-hand"
              alt=""
            />
            <span className="txt-s">9.3K claps</span>
          </div>

          <div style={{ margin: " 20px 30px" }}>
            <img
              src="../Images/MaskGroup.png"
              className="article-img-maskgroup"
              alt=""
            />
            <div className="div-col">
              <span className="txt-b">WRITTEN BY</span>
              <strong>Dmitry Nozhenko</strong>
              <span className="txt-s">jan 28, 2021- 10 min read</span>
            </div>
          </div>
        </section>
      </div>

      <section className="container-1 res-article-container-1">
        <span className="text-latest"> The Latest</span>
        <div className="carrousel-2 ">
          <article className="card-1">
            <img
              src="../Images/pexels-tobias-bjørkli-1887624.jpg"
              className=" card-1-img "
              alt=""
            />
            <div>
              <h3>Somthing is good than nothing</h3>
              <div>
                <img
                  src="../Images/MaskGroup.png"
                  className="article-img-maskgroup "
                  alt=""
                />
                <div className="div-col">
                  <strong>Dmitry Nozhenko</strong>
                  <span className="txt-s">jan 28, 2021- 10 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="card-1">
            <img
              src="../Images/pexels-tobias-bjørkli-1887624.jpg"
              className=" card-1-img"
              alt=""
            />
            <div>
              <h3>Somthing is good than nothing</h3>
              <div>
                <img
                  src="../Images/MaskGroup.png"
                  className="article-img-maskgroup"
                  alt=""
                />
                <div className="div-col">
                  <strong>Dmitry Nozhenko</strong>
                  <span className="txt-s">jan 28, 2021- 10 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="card-1">
            <img
              src="../Images/pexels-tobias-bjørkli-1887624.jpg"
              className=" card-1-img"
              alt=""
            />
            <div>
              <h3>Somthing is good than nothing</h3>
              <div>
                <img
                  src="../Images/MaskGroup.png"
                  className="article-img-maskgroup"
                  alt=""
                />
                <div className="div-col">
                  <strong>Dmitry Nozhenko</strong>
                  <span className="txt-s">jan 28, 2021- 10 min read</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Article;
