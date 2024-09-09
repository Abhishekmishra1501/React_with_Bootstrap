import React from "react";

const Progress =() =>(
    <>


<section class="p-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center mb-3">
                <h1 class="text-warning display-2">Progress</h1>
                <p class="lead text-secondary"> lorem ipsum dolfj, chrfn jff efjfe sfhftvvt lorem ipsum dolfj, chrfn hebde dhed ndenx ejdende deden</p>
                </div>
                </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 text-secondary">
                <h2>HTML</h2>
                 <div class="progress bg-secondary mb-3">
                   <div class="progress-bar" style={{width: '50%'}}>
                50%
                   </div>    
                </div>
                <h2>CSS</h2>
                <div class="progress bg-secondary mb-3">
                  <div class="progress-bar bg-danger" style={{width: '70%'}}>
               70%
                  </div>    
               </div>
               <h2>JAVASCRIPT</h2>
               <div class="progress bg-secondary mb-3">
                 <div class="progress-bar bg-warning" style={{width: '90%'}}>
              90%
                 </div>    
              </div>
              <h2>BOOTSTRAP</h2>
              <div class="progress bg-secondary mb-3">
                <div class="progress-bar bg-success" style={{width: '90%'}}>
             90%
                </div>    
             </div>
            </div>
        </div>
    </section>

</>

    
)

export default Progress;