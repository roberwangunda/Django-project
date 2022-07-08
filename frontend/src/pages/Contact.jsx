import React from 'react'

const Contact = () => {
    return (
        <React.Fragment>
            <div>
                
            </div>
            <div className="about-list">
                <div>
                    <h3>Email</h3>
                </div>
                <div>
                    <h3>Call us </h3></div>
                <div>
                    <h3>Find us</h3>
                </div>
            </div>
            <form id="contact-form" method="">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </React.Fragment>
    );
}

export default Contact
