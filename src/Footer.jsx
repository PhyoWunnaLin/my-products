import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-secondary'>
        <div className=' container '>
            <div className=" row d-flex justify-content-between gap-5 p-5 align-content-center flex-wrap ">
                <div className="col-12 col-md-5 col-lg-4">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>                
                <div className="col-12 col-md-5 col-lg-6">
                    <h5 className=" text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, itaque voluptate. Reprehenderit vel fuga consectetur sit. Molestiae nam asperiores vero eos, repellat aut! Optio dolorem nesciunt, repellat sequi dolor praesentium.
                    </h5>
                    <hr />
                    <div>
                        <i className=' bi bi-star-fill ms-2'></i>
                        <i className=' bi bi-star-fill ms-2'></i>
                        <i className=' bi bi-star-fill ms-2'></i>
                        <i className=' bi bi-star-fill ms-2'></i>
                        <i className=' bi bi-star ms-2'></i>
                    </div>
                </div>                
            </div>          
        </div>
    </div>
  )
}

export default Footer
