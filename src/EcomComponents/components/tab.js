import React from "react";

const TabComponent = ({showChildCategory, title, showCategory}) => {
     
     return (
        <>
        {showCategory ?
             <li class="li-top-item mega-menu">
                                <a class="a-top-link">
                                  <span>{title} </span>
                                  &nbsp;
                                  <i class="fa fa-angle-down" />
                                </a>
                    
                               {showChildCategory ? 
                                <div class="mega-menu-container sub-menu-container ">
                                  <div class="col-sm-2 sub-item2-content" data-cols="2">
                                    <a class="a-mega-second-link"  href="#">
                                      <h4>
                                        <strong>Foundation</strong>
                                      </h4>
                                    </a>
                                    <div class="sub_item3-content">
                                      <a class="a-mega-third-link" href="#">
                                        <h5>Coppermint</h5>
                                      </a>
                                    </div>
                                  </div>
                                  <br />
                                  <img  src="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/image/catalog/demo/banners/menu-banner.jpg"
                                    alt="menu-banner"  />
                                </div>
                                : <div class="flyout-menu-container sub-menu-container">
                                  <ul class="ul-second-items">
                                    <li class="li-second-items">
                                      <a
                                        href="https://templatebunch.com/Opencart/OPC004/OPCTB34/OPC01/index.php?route=product/category&amp;path=60_95"
                                        class="a-second-link a-item"
                                      >
                                        <span class="a-second-title">
                                          Bronzer
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div> }
                              </li>
        : <li class="li-top-item ">
            <a class="a-top-link" href="">
                <span>{title}</span>
            </a>
            </li>}
        </>
     )
}

export default TabComponent;