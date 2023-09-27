import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProductCard = (props) => {
    const stars = [];

    // Use a for loop to push the JSX code into the 'stars' array five times
    for (let i = 0; i < 5; i++) {
      if(props.rating > i){
          var checked = 'rating-star checked';
      }else{
          var checked = 'rating-star unchecked';
      }
      stars.push(
        <span key={i} className={checked}>
          <i className="fa fa-star"></i>
        </span>
      );
    }
       return (
          <>
               <div class="product-layouts">
                              <div class="product-thumb transition">
                                <div class="image">
                                  <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/product&amp;product_id=49">
                                    <img
                                      class="image_thumb"
                                      src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/cache/catalog/demo/product/17-330x432.jpg"
                                      title="Nailtural Nail Color"
                                      alt="Nailtural Nail Color"
                                    />
                                  </a>

                                  <div class="rating">
                                    {" "}
                                    {stars}
                                  </div>
   <NavLink to="/ecom/ViewProduct">add</NavLink>
                                  <div class="button-group">
                                    <button
                                      class="btn-cart disabled"
                                      type="button"
                                      title="Add To Cart"
                                      onclick=""
                                    >
                                      <i class="fa fa-shopping-cart"></i>
                                      <span class="out of stock">
                                         Add To Cart 
                                      </span>
                                      <span class="loading">
                                        <i class="fa fa-shopping-cart"></i>
                                      </span>
                                    </button>
                                    <button
                                      class="btn-wishlist"
                                      title="Add to wishlist"
                                      onclick="wishlist.add('49');"
                                    >
                                      <i class="fa fa-heart"></i>
                                      <span title="Like This Product">
                                        Add to wishlist
                                      </span>
                                      <span class="loading">
                                        <i class="fa fa-heart"></i>
                                      </span>
                                    </button>
                                    <button
                                      class="btn-compare"
                                      title="See This Product"
                                      onclick="compare.add('49');"
                                    >
                                      <i class="fa fa-search"></i>
                                      <span title="See This Product">
                                          See This Product
                                      </span>
                                      <span class="loading">
                                        <i class="fa fa-search"></i>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div class="thumb-description">
                                  <div class="caption">
                                    <h4>
                                      <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/product&amp;product_id=49">
                                        {props.name}
                                      </a>
                                    </h4>

                                    <div class="price">
                                        Rs. {props.price}
                                      <span class="price-tax">
                                        Without tax: $199.99
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
          </>
       )
}

export default ProductCard;