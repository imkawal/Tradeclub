import React, { useEffect, useState } from "react";
import $ from "jquery";
import TabComponent from "./tab";
import ProductCard from "./productcard";

const HeaderComp = ({ children }) => {
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
      {/* HEADER START HERE */}
      <header>
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
                                  <i class="fa fa-hand-o-right"></i>
                                  <span>
                                    World’s Fastest Online Shopping Deastination
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
                          action="#"
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
                            </button>
                            <ul class="dropdown-menu currency-toggle">
                              <li>
                                <button
                                  class="currency-select btn btn-link btn-block "
                                  type="button"
                                  name="EUR"
                                >
                                  Rupees
                                </button>
                              </li>
                            </ul>
                          </div>
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
                            id="tb-menu-5162"
                          >
                            <ul class="ul-top-items">
                              <TabComponent
                                title="Mack Up"
                                showCategory={true}
                                showChildCategory={true}
                                data={arr}
                              />
                              <TabComponent
                                title="Primer"
                                showCategory={true}
                                showChildCategory={false}
                              />
                              <TabComponent
                                title="Conucealer"
                                showChildCategory={false}
                              />
                              <TabComponent
                                title="Foundation"
                                showChildCategory={false}
                              />
                              <TabComponent
                                title="Contact Us"
                                showChildCategory={false}
                              />
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
                      <li class="tbsearch">
                        <div id="search" class="input-group">
                          <span class="tbsearch_button">
                            <i
                              class="fa fa-search"
                              style={{ fontSize: 20, marginTop: 15 }}
                            ></i>
                          </span>
                          <div class="tbsearchtoggle">
                            <input
                              type="text"
                              name="search"
                              value=""
                              placeholder="Search"
                              class="form-control input-lg"
                            />
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="btn btn-default btn-lg"
                              >
                                <i class="fa fa-search"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>

                      <li class="account-nav dropdown header_user_info">
                        <a
                          href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/account"
                          title="my Account"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i class="fa fa-user"></i>
                          <span class="tbuserheading">my Account</span>
                          <i class="icofont-simple-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right account-link-toggle">
                          <li>
                            <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/login">
                              <i class="fa fa-user"></i> Login
                            </a>
                          </li>
                          <li>
                            <a href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=account/register">
                              <i class="fa fa-registered"></i> Register
                            </a>
                          </li>
                          <li class="tblanguage clearfix"></li>
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
                            <i class="fa fa-shopping-cart"></i>
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
      {/* HEADER END HERE */}

     {children}

      {/* FOOTER START HERE */}
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
                  Powered By <a href="http://www.opencart.com">OpenCart</a>{" "}
                  Address &copy; 2023
                </p>
              </div>
              <div class="block-social col-lg-12"></div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END HERE */}
    </>
  );
};

export default HeaderComp;