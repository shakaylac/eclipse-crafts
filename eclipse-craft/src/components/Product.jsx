import {useState} from react;
import '..stylesheets/Product';

const [img, setImg] = useState(initial-img);

function Product() {
  return(
   <h2 class="title"></h2>

   <section class="img-display">
     <img class="initial-img" src="" />
   </section>

   <section class="side-gallery">
    <img src="" />
    <img src="" />
    <img src="" />
    <img src="" />
   </section>
  )
}

export default Product

/* onhover and onclick (img in side-gallery) display in img-display */

/* offhover img in img-display returns to initial-img */