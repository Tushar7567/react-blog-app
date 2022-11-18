import { Link } from "react-router-dom";

const ThirdComp = ({ obj1, num }) => {
  console.log(obj1);
  return (
    <>
      <span className="text-latest m-l"> Latest Articles</span>

      <section className="col">
        <section className="col-left">
          <div className="container-2">
            {obj1.slice(num, num+4).map((item, index) => {
              return (
                <Link className='link-text' key={index} to='/article'>
                  <article className="card-2" >
                  <img src={item.img_url} className='card-2-img' alt="" />
                  <div className="card-2-txt-padding">
                    <h3>{item.h3}</h3>
                    <span>{item.span}</span>
                    <p className="p">{item.p}</p>
                  </div>
                </article>
                </Link>
              );
            })}

           
          </div>
          <Link className='link-text' to='/article'>
          <div className="big-img">
            <h3 style={{ opacity: "0.9" }}>Park Lucerne, Switzerland</h3>
            <p className="p" style={{ opacity: "0.9" }}>Travel / August 28 2017</p>
          </div>
          </Link>
        </section>

        <section className="col-right">
          <div className="ad"> Advertisement </div>
          <div>
            <p className="text-latest">Top Posts</p>
            <Link className='link-text' to='/article'>
            <img
              className="small-img"
              src="../Images/pexels-ben-cheung-441379.jpg"
              alt=""
            />
            <h3>Somthing is good than nothing</h3>
            <p className="p">Travel / August 28 2017</p>
            </Link>
            <div className="container-2">
              {obj1.slice(num+4, num+9).map((item, index) => {
                return (
                  <Link className='link-text' key={index} to='/article' >
                    <article  className="card-3">
                    <img className="smallCard-img" src={item.img_url} alt="" />
                    <div style={{ padding: "0 0 0 10px" }}>
                      <p className="card-2-h3">  <strong>{item.h3} </strong></p>
                      <p className="p">{item.p} </p>
                    </div>
                  </article>
                  </Link>
                );
              })}

            
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ThirdComp;
