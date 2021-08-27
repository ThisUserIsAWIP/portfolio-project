import * as React from 'react';
import * as style from 'react-bootstrap';

const About = () => {
  
  
  return (
    <>
       <div className='row d-flex mt-5 mt-md-1 justify-content-center'>
        <div className='col-10 pt-3 mb-3 pb-4 pr-4 pl-4' style={{
          backgroundColor: '#6d6662',
          borderRadius: '1%',
          marginTop: '15%'
        }}>

          <div className="card mt-3">
          <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
          </div>
          </div>
          </div>
    </>
  );
};

export default About;