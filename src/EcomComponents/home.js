import React, { useEffect, useState } from "react";
import $ from "jquery";
import HeaderComp from "./components/header";
import ProductCard from "./components/productcard";

const ConditionalScript = ({ shouldIncludeScript }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    $(".TBProduct-Tab > .tab-box-heading > ul > li:first-child").addClass(
      "active"
    );
    $(".TBProduct-Tab > .tab-content > .tab-pane:first-child").addClass(
      "active"
    );
  }, []);
  return (
    <>
    <HeaderComp>
               {/* CAROUSEL START HERE */}
            <div class="header-content-title"></div>
                <div
                  id="tb-home-slideshow"
                  class="content-top"
                  style={{ marginTop: -100 }}
                >
                  <div class="slideshow swiper-viewport">
                    <div id="slideshow0" class="swiper-container clearfix">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide text-center Slider-01">
                          <a href="#URL">
                            <img
                              src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/cache/catalog/demo/banners/slider-01-1920x795.jpg"
                              alt="Slider-01"
                              class="img-responsive"
                            />
                          </a>
                          <div class="slider-description">
                            <div class="tb-slider-title">Perfect Skin</div>
                            <div class="tb-slider-desc">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s.
                            </div>
                            <div class="tb-slider-slider-button">
                              <a href="#" class="btn-secondary">
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination slideshow0"></div>
                    <div class="swiper-pager">
                      <div class="swiper-button-prev">
                        <i class="fa fa-angle-left"></i>
                      </div>
                      <div class="swiper-button-next">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CAROUSEL END HERE */}


                {/* PRODUCTS START HERE */}
      <div class="tb-home-bg">
        <div class="tb-home">
          <div id="content" class="col-lg-12">
            <div id="TB-top-product-tab" class="tbproduct-main">
              <div class="container">
                <div class="tb-row main-tab">
                  <div class="TBProduct-Tab TB-product-carousel products-list">
                    <div class="TB-Commen-Heading">
                      <h3 data-text="Beauty">Top Products</h3>
                    </div>
                    <div id="TBPTab-0" class="tab-box-heading">
                      <ul class="nav nav-tabs">
                        <li>
                          <a href="#tab-latest-0" data-toggle="tab">
                            <h3 class="tab-title">Latest</h3>
                          </a>
                        </li>
                        <li>
                          <a href="#tab-featured-0" data-toggle="tab">
                            <h3 class="tab-title">Featured</h3>
                          </a>
                        </li>
                        <li>
                          <a href="#tab-bestseller-0" data-toggle="tab">
                            <h3 class="tab-title">Bestseller</h3>
                          </a>
                        </li>
                        <li>
                          <a href="#tab-special-0" data-toggle="tab">
                            <h3 class="tab-title">Special</h3>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="tab-content"> 
                      <div id="tab-latest-0" class="tab-pane fade in">
                        <div id="owl1" class="tb-top-product-carousel">
                          <div class="single-column">
                               <ProductCard price={100} name={'Demo Product'} rating={3} />                         
                          </div>
                        </div>
                      </div> 

                      <div id="tab-featured-0" class="tab-pane fade">
                        <div id="owl2" class="tb-top-product-carousel">
                          {/* <!-- Featured Product --> */}
                          <div class="single-column">
                               <ProductCard price={800} name={'Demo2 Product'} rating={4} />                         
                          </div>
                        </div>
                      </div>

                      <div id="tab-bestseller-0" class="tab-pane fade">
                        <div id="owl3" class="tb-top-product-carousel">
                          {/* <!-- Top Products --> */}
                        </div>
                      </div>

                      <div id="tab-special-0" class="tab-pane fade">
                        <div id="owl4" class="tb-top-product-carousel">
                          {/* <!-- Special Products --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCTS END HERE */}
    </HeaderComp> 
    </>
  );
};

export default ConditionalScript;