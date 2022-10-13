// import { useState } from "react";


const ThirdComp = ({obj1}) => {

  console.log(obj1);
    return (
      <>
        <span className="text-latest m-l"> Latest Articles</span>

        <section className="col">
          <section className="col-left">
            <div className="container-2">
              <article className="card-2">
                <img src={obj1[0].img_url} alt="" />
                <div style={{padding:'0 90px 0 10px'}}>
                  <h3>{obj1[0].h3}</h3>
                  <span>
                  {obj1[0].span}
                  </span>
                  <p className="p">{obj1[0].p}</p>
                </div>
              </article>

              <article className="card-2">
                {/* <img src={obj1[1].img_url} alt="" /> */}
                <div style={{padding:'0 90px 0 10px'}}>
                  {/* <h3>{obj1[1].h3}</h3> */}
                  <span>
                  {/* {obj1[1].span} */}
                  </span>
                  {/* <p className="p">{obj1[1].p}</p> */}
                </div>
              </article>

              <article className="card-2">
                {/* <img src={obj1[2].img_url} alt="" /> */}
                <div style={{padding:'0 90px 0 10px'}}>
                  {/* <h3>{obj1[2].h3}</h3> */}
                  <span>
                  {/* {obj1[2].span} */}
                  </span>
                  {/* <p className="p">{obj1[2].p}</p> */}
                </div>
              </article>
            </div>
            <div className="big-img">
              <h3 style={{ opacity: "0.5" }}>Lake Lucerne, Switzerland</h3>
              <p className="p">Travel / August 28 2017</p>
            </div>
          </section>

          <section className="col-right">
            <div className="ad"></div>
            <div>
              <p className="text-latest">Top Posts</p>
              <img
                className="small-img"
                src="./Images/pexels-tobias-bjørkli-1887624.jpg"
                alt=""
              />
              <h3>Somthing is good than nothing</h3>
              <p className="p">Travel / August 28 2017</p>
              <div className="container-2">
                <article className="card-2">
                  <img
                    className="smallCard-img"
                    src="./Images/pexels-tobias-bjørkli-1887624.jpg"
                    alt=""
                  />
                  <div>
                    <h3>Somthing is good than nothing</h3>
                    <p className="p">Travel / August 28 2017</p>
                  </div>
                </article>

                <article className="card-2">
                  <img
                    className="smallCard-img"
                    src="./Images/pexels-tobias-bjørkli-1887624.jpg"
                    alt=""
                  />
                  <div>
                    <h3>Somthing is good than nothing</h3>
                    <p className="p">Travel / August 28 2017</p>
                  </div>
                </article>

                <article className="card-2">
                  <img
                    className="smallCard-img"
                    src="./Images/pexels-tobias-bjørkli-1887624.jpg"
                    alt=""
                  />
                  <div>
                    <h3>Somthing is good than nothing</h3>
                    <p className="p">Travel / August 28 2017</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </section>
      </>
    );
}

export default ThirdComp