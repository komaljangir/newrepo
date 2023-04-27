import React from 'react'
import "../css/Netflix.css"
import tick1 from "../Images/basic-tick.png"
import tick2 from "../Images/net.png"

function Netflix() {
  return (
    <div>
        <div class="hr">
   <img src={tick2} alt=""/>
   <button>Sign out</button>
    </div>
    
    <hr class="line"/>
    <div class="step1"/>
   <div class="icon">
     <img src="../images/done.png" alt="" class="icon1"/>
    </div>
    <span class="step">SETP 1 FO 3</span>
    <h2>Choose your plan.</h2><br/>
    <p/>No commitments, cancel<br/>
        anytime.<p/><br/>
    <p>Everything on Netflix for one<br/> 
        low price.</p><br/>
    <p>No ads and no extra fees. Ever</p><br/>
   <div class="btn"> <button>NEXT</button></div>
   
    <img src={tick1} alt="" class="tick1"/>
    <img src={tick1} alt="" class="tick2">
    <img src={tick1}alt="" class="tick3">

    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div class="text">
   <div>
     <p class="txt">Questions? Call 000-800-919-1694</p>
    <p class="txt1"> FAQ</p>
    <p class="txt2">Privacy</p>
    <p class="txt3">Help Centre</p>
    <p class="txt4">Cookie Preferences</p>
    <p class="txt5">Netflix Shop</p>
    <p class="txt6">Corporate Information</p>
    <p class="txt7">Terms of Use</p>
    <button  class="text8">English</button>
</div>
    
    
  </div>
  <br/>








  <br>
  <div>
    <hr/>
  </div>
    </div>
  
)
}
export default Netflix;
