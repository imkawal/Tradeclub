import React, { Children, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import $ from "jquery"; // Import jQuery if not already done

function HeaderFunction({ children }) {
  const path = useLocation();
  const location = path.pathname;
  const type = location.slice(1, 5);
  const headerStyle = {
    marginTop: '-5.5%' ,
    poition : 'fixed',
    top: '0', 
  };

  if (type == "ecom") {
    return (
      <>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Your Store</title>
        <base href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/" />
        <meta name="description" content="My Store" />
        <script src="catalog/view/javascript/jquery/jquery-2.1.1.min.js"></script>
        <script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js"></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caramel&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
        <link
          href="catalog/view/javascript/font-awesome/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="catalog/view/theme//stylesheet/TemplateBunch/bootstrap.min.css"
          rel="stylesheet"
          media="screen"
        />

        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/icofont.min.css"
          rel="stylesheet"
        />
        <link
          href="catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.css"
          rel="stylesheet"
          media="screen"
        />
        <link
          href="catalog/view/javascript/jquery/owl-carousel/owl.theme.default.min.css"
          rel="stylesheet"
          media="screen"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/bootstrap.min.css"
          rel="stylesheet"
          media="screen"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/animate.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/stylesheet.css"
          rel="stylesheet"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/custom/tb-home.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/custom/tb-innerpage.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/custom/tb-menu.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="catalog/view/theme/OPCTB34_01/stylesheet/TemplateBunch/custom/tb-product.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="catalog/view/javascript/jquery/swiper/css/swiper.min.css"
          type="text/css"
          rel="stylesheet"
          media="screen"
        />
        <link
          href="catalog/view/javascript/jquery/swiper/css/opencart.css"
          type="text/css"
          rel="stylesheet"
          media="screen"
        />

        <script src="catalog/view/javascript/common.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/default/inview.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/default/theia-sticky-sidebar.min.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/default/waypoints.min.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/default/bootstrap-notify.min.js"></script>
        <script src="catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js"></script>
        
        <script src="catalog/view/javascript/TemplateBunch/actionscript.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/menu.js"></script>
        <script src="catalog/view/javascript/TemplateBunch/tb_owl.js"></script>

        <link
          href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/catalog/cart.png"
          rel="icon"
        />
        <script src="https://kit.fontawesome.com/51cc77c435.js" crossorigin="anonymous"></script>
        <script src="catalog/view/javascript/jquery/swiper/js/swiper.jquery.js"></script>
        <body>
        <div class="tbloading-bg tbloader"></div>
          <div id="page">
            <header  style={headerStyle}>
              <div class="header">
                <div class="full-header">
                  <div class="top-header">
                    <div class="container">
                      <div class="header-top-row">
                        <div class="header-top-left">
                          <div class="header-left-cms">
                            <aside id="header-left">
                              <div class="html-content">
                                <div class="box-content">
                                  <div
                                    id="tb-top-header-cms"
                                    class="tb-top-header-cms"
                                  >
                                    <div class="tb-top-header-cms-wrapper">
                                      <p>
                                        <i class="icofont-home"></i>
                                        <span>
                                          World’s Fastest Online Shopping
                                          Deastination
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </aside>
                          </div>
                        </div>
                        <div class="left-nav">
                          <li class="tblanguage clearfix"></li>
                          <li class="tbcurrency clearfix">
                            <div class="pull-left">
                              <form
                                action="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=common/currency/currency"
                                method="post"
                                enctype="multipart/form-data"
                                id="form-currency"
                              >
                                <div class="btn-group">
                                  <button
                                    class="btn btn-link dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <strong>$</strong>{" "}
                                    <span class="hidden-xs hidden-sm hidden-md">
                                      Currency
                                    </span>
                                    &nbsp;<i class="icofont"></i>
                                  </button>
                                  <ul class="dropdown-menu currency-toggle">
                                    <li>
                                      <button
                                        class="currency-select btn btn-link btn-block "
                                        type="button"
                                        name="EUR"
                                      >
                                        € Euro
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        class="currency-select btn btn-link btn-block "
                                        type="button"
                                        name="GBP"
                                      >
                                        £ Pound Sterling
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        class="currency-select btn btn-link btn-block selected"
                                        type="button"
                                        name="USD"
                                      >
                                        $ US Dollar
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <input type="hidden" name="code" value="" />
                                <input
                                  type="hidden"
                                  name="redirect"
                                  value="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=common/home"
                                />
                              </form>
                            </div>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="header-row">
                      <div class="header-left">
                        <div id="logo">
                          <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=common/home">
                            <img
                              src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/catalog/logo.png"
                              title="Address"
                              alt="Address"
                              class="img-responsive"
                            />
                          </a>{" "}
                        </div>
                      </div>
                      <div class="header-bottom">
                        <div class="header-bottom">
                          <div class="header-bottom-cms">
                            <aside id="header-bottom">
                              <div class="main-category-list">
                                <div class="TB-panel-heading">
                                  <span>menu</span>
                                  <span class="icon">
                                    <i class="icofont-navigation-menu"></i>
                                  </span>
                                </div>
                                <div
                                  class="tb-menu horizontal-menu tb-menu-bar"
                                  id="tb-menu-590"
                                >
                                  <ul class="ul-top-items">
                                    <li class="li-top-item">
                                      <a
                                        class="a-top-link"
                                        href="index.php?route=product/category&amp;path=59"
                                      >
                                        <span>Mack Up</span>
                                        &nbsp;
                                        <i class="fas fa-arrow-down"></i>
                                      </a>

                                      <div class="mega-menu-container sub-menu-container ">
                                        <div class="row">
                                              <div class="col-md-3">
                                              <div
                                                  class="col-sm-2 sub-item2-content"
                                                  data-cols="2"
                                                >
                                                  <a
                                                    class="a-mega-second-link"
                                                    href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=62"
                                                  >
                                                    <h4>
                                                      <strong>Foundation</strong>
                                                    </h4>
                                                  </a>
                                                  <div class="sub_item3-content">
                                                    
                                                    <a
                                                      class="a-mega-third-link"
                                                      href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=62_67"
                                                    >
                                                      <h5>Butter Bash</h5>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="col-md-3">
                                              <div
                                                  class="col-sm-2 sub-item2-content"
                                                  data-cols="2"
                                                >
                                                  <a
                                                    class="a-mega-second-link"
                                                    href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=63"
                                                  >
                                                    <h4>
                                                      <strong>Concealer</strong>
                                                    </h4>
                                                  </a>
                                                  <div class="sub_item3-content">
                                                    <a
                                                      class="a-mega-third-link"
                                                      href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=63_68"
                                                    >
                                                      <h5>Stick</h5>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="col-md-3">
                                              <div
                                                      class="col-sm-2 sub-item2-content"
                                                      data-cols="2"
                                                    >
                                                      <a
                                                        class="a-mega-second-link"
                                                        href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=64"
                                                      >
                                                        <h4>
                                                          <strong>Blush</strong>
                                                        </h4>
                                                      </a>
                                                      <div class="sub_item3-content">
                                                        <a
                                                          class="a-mega-third-link"
                                                          href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=64_77"
                                                        >
                                                          <h5>waterproof</h5>
                                                        </a>
                                                      </div>
                                                    </div>
                                              </div>

                                              <div class="col-md-3">

                                              <div
                                          class="col-sm-2 sub-item2-content"
                                          data-cols="2"
                                        >
                                          <a
                                            class="a-mega-second-link"
                                            href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=65"
                                          >
                                            <h4>
                                              <strong>Bronzer</strong>
                                            </h4>
                                          </a>
                                          <div class="sub_item3-content">
                                            
                                            <a
                                              class="a-mega-third-link"
                                              href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=65_81"
                                            >
                                              <h5>Mechanical</h5>
                                            </a>
                                          </div>
                                        </div>
                                              </div>
                                        </div>

                                      
                                        <div
                                          class="col-sm-12 sub-item2-content"
                                          data-cols="12"
                                        >
                                          <h4>
                                            <strong>Menubanner</strong>
                                          </h4>
                                          <p>
                                            <div class="menu-banner">
                                              <a href="#URL">
                                                <img
                                                  src="image/catalog/demo/banners/menu-banner.jpg"
                                                  alt="menu-banner"
                                                />
                                              </a>
                                            </div>
                                          </p>
                                        </div>
                                      </div>
                                    </li>

                                    <li class="li-top-item">
                                      <a
                                        class="a-top-link"
                                        href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=60"
                                      >
                                        <div>Primer</div>&nbsp;
                                        <i class="fas fa-arrow-down"></i>
                                      </a>

                                      <div class="flyout-menu-container sub-menu-container">
                                        <ul class="ul-second-items">
            
                                        
                                          <li class="li-second-items">
                                            <a
                                              href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=60_97"
                                              class="a-second-link a-item"
                                            >
                                              <span class="a-second-title">
                                                Rosewater
                                              </span>
                                            </a>
                                          </li>
                                          <li class="li-second-items">
                                            <a
                                              href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=60_94"
                                              class="a-second-link a-item"
                                            >
                                              <span class="a-second-title">
                                                Shadow shield
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li class="li-top-item ">
                                      <a
                                        class="a-top-link"
                                        href="index.php?route=product/category&amp;path=107"
                                      >
                                        <span>Concealer</span>
                                      </a>
                                    </li>

                                    <li class="li-top-item ">
                                      <a
                                        class="a-top-link"
                                        href="index.php?route=product/category&amp;path=106"
                                      >
                                        <span>Foundation</span>
                                      </a>
                                    </li>

                                    <li class="li-top-item ">
                                      <a
                                        class="a-top-link"
                                        href="index.php?route=information/contact"
                                      >
                                        <span>Contact us</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div class="header-top-right">
                        <div id="top-links" class="nav pull-right">
                          <ul class="list-inline">

                            <li class="account-nav dropdown header_user_info">
                              <a
                                href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/account"
                                title="my Account"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                              >
                            <i class="fas fa-user"></i>
                                <span class="tbuserheading">my Account</span>
                                <i class="icofont-simple-down"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-right account-link-toggle">
                                <li>
                                  <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/login">
                                    <i class="icofont-lock"></i> Login
                                  </a>
                                </li>
                                <li>
                                  <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/register">
                                    <i class="icofont-user-alt-7"></i> Register
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/wishlist"
                                    id="wishlist-total"
                                    title="Wish List (0)"
                                  >
                                    <i class="icofont-heart"></i>{" "}
                                    <span class="hidden-sm hidden-md">
                                      Wish List (0)
                                    </span>
                                  </a>
                                </li>
                                <li class="tblanguage clearfix"></li>
                                <li class="tbcurrency clearfix">
                                  <div class="pull-left">
                                    <form
                                      action="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=common/currency/currency"
                                      method="post"
                                      enctype="multipart/form-data"
                                      id="form-currency"
                                    >
                                      <div class="btn-group">
                                        <button
                                          class="btn btn-link dropdown-toggle"
                                          data-toggle="dropdown"
                                        >
                                          {" "}
                                          <strong>$</strong>{" "}
                                          <span class="hidden-xs hidden-sm hidden-md">
                                            Currency
                                          </span>
                                          &nbsp;<i class="icofont"></i>
                                        </button>
                                        <ul class="dropdown-menu currency-toggle">
                                          <li>
                                            <button
                                              class="currency-select btn btn-link btn-block "
                                              type="button"
                                              name="EUR"
                                            >
                                              € Euro
                                            </button>
                                          </li>
                                          <li>
                                            <button
                                              class="currency-select btn btn-link btn-block "
                                              type="button"
                                              name="GBP"
                                            >
                                              £ Pound Sterling
                                            </button>
                                          </li>
                                          <li>
                                            <button
                                              class="currency-select btn btn-link btn-block selected"
                                              type="button"
                                              name="USD"
                                            >
                                              $ US Dollar
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                      <input
                                        type="hidden"
                                        name="code"
                                        value=""
                                      />
                                      <input
                                        type="hidden"
                                        name="redirect"
                                        value="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=common/home"
                                      />
                                    </form>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li class="tbcart">
                              <div id="cart" class="btn-group">
                                <button
                                  type="button"
                                  data-toggle="dropdown"
                                  data-loading-text="Loading..."
                                  class="btn btn-inverse btn-block btn-lg dropdown-toggle"
                                >
                                      <i class="fas fa-shopping-cart"></i>
                                  <span id="cart-total">0</span>
                                  <span class="cart-heading">Cart</span>
                                </button>
                                <ul class="dropdown-menu pull-right header-cart-toggle">
                                  <li>
                                    <p class="text-center">
                                      Your shopping cart is empty!
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div class="header-content-title"></div>

            <div id="tb-home-slideshow" class="content-top">
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div class="tb-slider-slider-button">
                          <a href="#" class="btn-secondary">
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide text-center Slider-02">
                      <a href="#URL">
                        <img
                          src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/cache/catalog/demo/banners/slider-02-1920x795.jpg"
                          alt="Slider-02"
                          class="img-responsive"
                        />
                      </a>
                      <div class="slider-description">
                        <div class="tb-slider-title">Beauty Youth</div>
                        <div class="tb-slider-desc">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.The point of using Lorem a
                          normal distribution of letters.
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
                    <i class="icofont-simple-left"></i>
                  </div>
                  <div class="swiper-button-next">
                    <i class="icofont-simple-right"></i>
                  </div>
                </div>
              </div>
            </div>
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
                                <a href="#tab-latest-0" data-toggle="tab" style={{background: '#F2E0D4'}}>
                                  <h3 class="tab-title">Latest</h3>
                                </a>
                              </li>
                              <li>
                                <a href="#tab-featured-0" data-toggle="tab"  style={{background: '#F2E0D4'}}>
                                  <h3 class="tab-title">Featured</h3>
                                </a>
                              </li>
                              <li>
                                <a href="#tab-bestseller-0" data-toggle="tab" style={{background: '#F2E0D4'}}>
                                  <h3 class="tab-title">Bestseller</h3>
                                </a>
                              </li>
                              <li>
                                <a href="#tab-special-0" data-toggle="tab" style={{background: '#F2E0D4'}}>
                                  <h3 class="tab-title">Special</h3>
                                </a>
                              </li>
                            </ul>
                          </div>
                          
                                   <div class="row">
                                        <div class="col-md-4">
                                        <div class="product-thumb transition">
                                      <div class="image">
                                        <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/product&amp;product_id=53">
                                          <img
                                            class="image_thumb"
                                            src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/cache/catalog/demo/product/20-330x432.jpg"
                                            title="Contraste Powder Blush"
                                            alt="Contraste Powder Blush"
                                          />
                                        </a>

                                        <div class="sale-icon">Sale</div>
                                        <span class="percent">-10%</span>

                                        <div class="rating">
                                          {" "}
                                          <span class="rating-star checked">
                                            <i class="icofont-star"></i>
                                          </span>{" "}
                                          <span class="rating-star checked">
                                            <i class="icofont-star"></i>
                                          </span>{" "}
                                          <span class="rating-star checked">
                                            <i class="icofont-star"></i>
                                          </span>{" "}
                                          <span class="rating-star checked">
                                            <i class="icofont-star"></i>
                                          </span>{" "}
                                          <span class="rating-star checked">
                                            <i class="icofont-star"></i>
                                          </span>{" "}
                                        </div>

                                        <div class="button-group">
                                          <button
                                            class="btn-cart "
                                            type="button"
                                            title="Add to Cart"
                                            onclick="cart.add('53')"
                                          >
                                            <i class="fas fa-shopping-cart"></i>
                                            <span class="hidden-xs hidden-sm hidden-md">
                                              Add to Cart
                                            </span>
                                            <span class="loading">
                                              <i class="icofont-refresh"></i>
                                            </span>
                                          </button>
                                          <button
                                            class="btn-wishlist"
                                            title="Add to wishlist"
                                            onclick="wishlist.add('53');"
                                          >
                                             <i class="fas fa-heart"></i>
                                            <span title="Add to wishlist">
                                              Add to wishlist
                                            </span>
                                            <span class="loading">
                                              <i class="icofont-refresh"></i>
                                            </span>
                                          </button>
                                          <button
                                            class="btn-compare"
                                            title="Add to Compare"
                                            onclick="compare.add('53');"
                                          >
                                             <i class="fas fa-search"></i>
                                            <span title="Add to Compare">
                                              View Product
                                            </span>
                                            <span class="loading">
                                              <i class="icofont-refresh"></i>
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="thumb-description">
                                        <div class="caption">
                                          <h4>
                                            <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/product&amp;product_id=53">
                                              Contraste Powder Blush
                                            </a>
                                          </h4>

                                          <div class="price">
                                            <span class="price-new">
                                              $110.00
                                            </span>{" "}
                                            <span class="price-old">
                                              $122.00
                                            </span>
                                            <span class="price-tax">
                                              Without tax: $90.00
                                            </span>
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

                  {/* <script>
$('.TBProduct-Tab > .tab-box-heading > ul > li:first-child').addClass('active');
$('.TBProduct-Tab > .tab-content > .tab-pane:first-child').addClass('active');
</script> */}

                
                </div>
              </div>
            </div>
            <footer id="tb-footer">
              <div class="container">
                <div class="tb-comen-row">
                  <div class="row">
                    <div class="footer-left-cms col-lg-3">
                      <aside id="footer-left">
                        <div class="html-content">
                          <div class="box-content">
                            <div id="TB-Footer-cms" class="links">
                              <div class="tb-footer-logo">
                                <a href="index.php?route=common/home">
                                  <img
                                    src="image/catalog/demo/banners/footer-logo.png"
                                    alt="footer-logo"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                    <div class="col-lg-9">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="footer-commen footer-my-account">
                            <h5>My Account</h5>
                            <ul class="list-unstyled">
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/account">
                                  My Account
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/order">
                                  Order History
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/wishlist">
                                  Wish List
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/newsletter">
                                  Newsletter
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="footer-commen footer-information">
                            <h5>Information</h5>
                            <ul class="list-unstyled">
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=information/information&amp;information_id=4">
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=information/information&amp;information_id=6">
                                  Delivery Information
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=information/information&amp;information_id=3">
                                  Privacy Policy
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=information/information&amp;information_id=5">
                                  Terms &amp; Conditions
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="col-lg-4">
                          <div class="footer-commen footer-Extras">
                            <h5>Extras</h5>
                            <ul class="list-unstyled">
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/manufacturer">
                                  Brands
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/voucher">
                                  Gift Certificates
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=affiliate/login">
                                  Affiliate
                                </a>
                              </li>
                              <li>
                                <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/special">
                                  Specials
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-bottom">
                <div class="container">
                  <div class="row">
                    <div class="footer-bottom-left col-lg-12">
                      <p>
                        Powered By{" "}
                        <a href="http://www.opencart.com">OpenCart</a> Address
                        &copy; 2023
                      </p>
                    </div>
                    <div class="block-social col-lg-12"></div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </>
    );
  } else {
    return (
      <>
        <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
          <div class="navbar-wrapper">
            <div class="navbar-container content">
              <div class="collapse navbar-collapse show" id="navbar-mobile">
                <ul class="nav navbar-nav mr-auto float-left">
                  <li class="nav-item d-block d-md-none">
                    <a
                      class="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="#"
                    >
                      <i class="ft-menu"></i>
                    </a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a class="nav-link nav-link-expand" href="#">
                      <i class="ficon ft-maximize"></i>
                    </a>
                  </li>
                </ul>
                <ul class="nav navbar-nav float-right">
                  <li class="dropdown dropdown-language nav-item">
                    <a
                      class="dropdown-toggle nav-link"
                      id="dropdown-flag"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="flag-icon flag-icon-us"></i>
                      <span class="selected-language"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-flag">
                      <div class="arrow_box">
                        <a class="dropdown-item" href="#">
                          <i class="flag-icon flag-icon-us"></i> English
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="nav navbar-nav float-right">
                  <li class="dropdown dropdown-notification nav-item">
                    <a
                      class="nav-link nav-link-label"
                      href="#"
                      data-toggle="dropdown"
                    >
                      <i class="ficon ft-mail"> </i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="arrow_box_right">
                        <a class="dropdown-item" href="#">
                          <i class="ft-book"></i> Read Mail
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="ft-bookmark"></i> Read Later
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="ft-check-square"></i> Mark all Read{" "}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown dropdown-user nav-item">
                    <a
                      class="dropdown-toggle nav-link dropdown-user-link"
                      href="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      <span class="avatar avatar-online">
                        <img
                          src="theme-assets/images/portrait/small/avatar-s-19.png"
                          alt="avatar"
                        />
                        <i></i>
                      </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="arrow_box_right">
                        <a class="dropdown-item" href="#">
                          <span class="avatar avatar-online">
                            <img
                              src="theme-assets/images/portrait/small/avatar-s-19.png"
                              alt="avatar"
                            />
                            <span class="user-name text-bold-700 ml-1">
                              John Doe
                            </span>
                          </span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <i class="ft-user"></i> Edit Profile
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="ft-mail"></i> My Inbox
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="ft-check-square"></i> Task
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="ft-message-square"></i> Chats
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <i class="ft-power"></i> Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div
          class="main-menu menu-fixed menu-light menu-accordion    menu-shadow "
          data-scroll-to-active="true"
          data-img="theme-assets/images/backgrounds/02.jpg"
        >
          <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
              <li class="nav-item mr-auto">
                <a class="navbar-brand" href="index.html">
                  <img
                    class="brand-logo"
                    alt="Chameleon admin logo"
                    src="theme-assets/images/logo/logo.png"
                  />
                  <h3 class="brand-text">Trade Club</h3>
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link close-navbar">
                  <i class="ft-x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="main-menu-content">
            <ul
              class="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              <li class=" nav-item">
                <NavLink to="/">
                  <i class="ft-home"></i>
                  <span class="menu-title" data-i18n="">
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/ShowTableProducts">
                  <i class="ft-box"></i>Products
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/ShowTableCustomer">
                  <i class="ft-layout"></i>
                  <span class="menu-title" data-i18n="">
                    Customers
                  </span>
                </NavLink>
              </li>
              <li class=" nav-item">
                <NavLink to="/ShowTableCategory">
                  <i class="ft-droplet"></i>
                  <span class="menu-title" data-i18n="">
                    Categories
                  </span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/ShowTableOrders">
                  <i class="ft-layers"></i>
                  <span class="menu-title" data-i18n="">
                    Orders
                  </span>
                </NavLink>
              </li>
              <li class=" nav-item">
                <NavLink to="/ShowTableTransactions">
                  <i class="ft-credit-card"></i>
                  <span class="menu-title" data-i18n="">
                    Transactions
                  </span>
                </NavLink>
              </li>
              <li class=" nav-item">
                <NavLink to="/ShowTableTopProduct">
                  <i class="ft-bold"></i>
                  <span class="menu-title" data-i18n="">
                    Top Products
                  </span>
                </NavLink>
              </li>
              <li class=" nav-item">
                <NavLink to="/ShowTableSlider">
                  <i class="ft-credit-card"></i>
                  <span class="menu-title" data-i18n="">
                    Slider Setting
                  </span>
                </NavLink>
              </li>
              <li class=" nav-item">
                <NavLink to="/ShowTableProductReport">
                  <i class="ft-book"></i>
                  <span class="menu-title" data-i18n="">
                    Products Report
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="navigation-background"></div>
        </div>
        <section>
          <div class="row pt-md-2 pl-md-2">
            <div class="col-md-2"></div>
            <div class="col-xl-10 col-md-12 pl-md-3 pr-md-3">
              {/* Routes Here */}
              {children}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HeaderFunction;
