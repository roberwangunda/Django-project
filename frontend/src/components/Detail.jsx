import React from 'react'
import photos from "../d.jpg";

const Detail = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col">
            <h1>Strudas Technologies Limited</h1>
            <p>
              Strudas Technologies Limited (STL) is a leading Telecom and
              Software solutions company providing innovative digital solutions
              through integrated emerging technologies such as Digital
              Platforms, Big Data, IoT, AI, and SDx. With a rich team of Project
              management professionals, experienced Software Engineers, and
              highly trained Networking Professionals, BTN delivers
              unparalleled, scalable, cost-effective, and secure digital
              solutions. We provide cutting edge Large enterprise solutions
              ranging from Digital Distribution platforms, data canter
              management platforms, and Software Defined Networking platforms
              for Service providers.
            </p>
          </div>
          <div class="col">
            <div className='homepage'>
              <img src={photos}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail