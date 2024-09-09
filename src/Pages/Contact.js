import React from "react";

const Contact =() =>(
    <>
    

<section class="p-5 bg-light">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 text-center mb-3">
                    <h1 class="text-warning display-2">Contact Us</h1>
                    <p class="lead text-secondary"> lorem ipsum dolfj, chrfn jff efjfe sfhftvvt lorem ipsum dolfj, chrfn hebde dhed ndenx ejdende deden</p>
                    </div>
                    </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8 col-sm-10">
                    <div class="text-center text-secondary">
                        <h2>Got Question ?</h2>
                        <p>Stay Connected</p>
                    </div>

                    <form class="text-muted">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control"></input>
                        </div>

                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="text" class="form-control"></input>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>

                        <button class="btn btn-outline-warning btn-block" type="submit">Submit Question</button>
                    </form>
                </div>
            </div>

        </section>

        <center>
   <input type="submit" className="btn btn-danger"/>
   </center>


 </>

    
)

export default Contact;