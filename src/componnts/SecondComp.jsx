import {Link} from 'react-router-dom'

 const SecondComp = ({obj1, num}) => {
  console.log(obj1);
    return (
      <section className="container-1">
        <span className="text-latest"> The Latest</span>
        <div className="carrousel">
          {obj1.slice(num,num+8).map((item, index) => {
                return (
                  <Link className='link-text' key={index} to='/article' >
                  <article className="card-1" >
                    <img src={item.img_url} className='card-1-img' alt="" />
                    <div className='card-1-div-padding' >
                      <h3>{item.h3}</h3>
                      <span>{item.span}</span>
                      <p className="p">{item.p}</p>
                    </div>
                  </article>
                  </Link>
                );
              })}

        </div> 
      </section>
    );
}

export default SecondComp
