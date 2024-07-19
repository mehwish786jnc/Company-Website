import p1 from './1.png' 
import p2 from './3.png'
import p3 from './5.png'
const Services = () => {
    return <>
      <div class="head"><h1>Services offered</h1></div>
      <br></br>
      <br></br>
      <div class="container">
        <center>
  <div class="row row-cols-auto">
    <div class="col">
    <img src={p1}/>
    </div>
    <div class="col">
    <img src={p2}/>
    </div>
    <div class="col">
    <img src={p3}/>
    </div>
  </div>
  </center>
</div>

  </>
  };
  
  export default Services;