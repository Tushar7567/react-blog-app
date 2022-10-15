import {Link} from 'react-router-dom'

const FirstComp = () => {
    return (
      <section className="home-grid" style={{marginTop:'40px'}}>
        <Link className='link-text pic-1' to='/article' >
        {/* <div className="pic-1"> */}
          <span className="span-1">Lake Bacalar, Mexico</span>
          <p className="p">Travel / August 28 2017</p>
        {/* </div> */}
        </Link>

        <Link className='link-text pic-2' to='/article' >
        {/* <div className="pic-2"> */}
          <span className="span-2">Lake Lucerne, Switzerland</span>
          <p className="p">Travel / August 28 2017</p>
        {/* </div> */}
        </Link>

        <Link className='link-text pic-3' to='/article'  >
        {/* <div className="pic-3"> */}
          <span className="span-2">Indian Ocean, India</span>
          <p className="p">Travel / August 28 2017</p>
        {/* </div> */}
        </Link>
      </section>
    );
}

// onClick={()=>{articleNav()}}
export default FirstComp