import '../stylesheets/ProductGallery.css'
import { Link } from react-router-dom

/* Link doesn't work
import { useNavigation } from react-router-dom

const nav = useNavigation();

const handleClick = () => {
     nav'/product';
}
*/



function ProductGallery() {
  return(
  <>
   <body>
      <div class="page">
         <h1>Crochet</h1>
            <section>
            <Link to="/product">
            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>
            </Link>

            <div class="product" onClick={toProduct()}>
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            <div class="product">
               <img src="null"/>
               <h3 className="product-title">Title</h3>
               <p className="product-description">Lorem ipsum dolor sit, amet consec!</p>
               <p class="product-price">$0.00</p>
               <button class="save"></button>
               <button class="add">Add to Cart</button>
            </div>

            </section>
         </div>
      </body>
   </>
 )
}

export default ProductGallery