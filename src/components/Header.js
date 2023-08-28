import React, { Children } from "react";
import { NavLink  } from 'react-router-dom';

function HeaderFunction({children}){
     return (
        <>
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="collapse navbar-collapse show" id="navbar-mobile">
            <ul class="nav navbar-nav mr-auto float-left">
              <li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
              <li class="nav-item d-none d-md-block"><a class="nav-link nav-link-expand" href="#"><i class="ficon ft-maximize"></i></a></li>
            </ul>
            <ul class="nav navbar-nav float-right">         
              <li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-us"></i><span class="selected-language"></span></a>
                <div class="dropdown-menu" aria-labelledby="dropdown-flag">
                  <div class="arrow_box"><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-us"></i> English</a></div>
                </div>
              </li>
            </ul>
            <ul class="nav navbar-nav float-right">
              <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon ft-mail">             </i></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="arrow_box_right"><a class="dropdown-item" href="#"><i class="ft-book"></i> Read Mail</a><a class="dropdown-item" href="#"><i class="ft-bookmark"></i> Read Later</a><a class="dropdown-item" href="#"><i class="ft-check-square"></i> Mark all Read       </a></div>
                </div>
              </li>
              <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">             <span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="arrow_box_right"><a class="dropdown-item" href="#"><span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><span class="user-name text-bold-700 ml-1">John Doe</span></span></a>
                    <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="ft-user"></i> Edit Profile</a><a class="dropdown-item" href="#"><i class="ft-mail"></i> My Inbox</a><a class="dropdown-item" href="#"><i class="ft-check-square"></i> Task</a><a class="dropdown-item" href="#"><i class="ft-message-square"></i> Chats</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="ft-power"></i> Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">       
          <li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png"/>
              <h3 class="brand-text">Trade Club</h3></a></li>
          <li class="nav-item d-md-none"><a class="nav-link close-navbar"><i class="ft-x"></i></a></li>
        </ul>
      </div> 
      <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li class=" nav-item"><NavLink to="/"><i class="ft-home"></i><span class="menu-title" data-i18n="">Dashboard</span></NavLink>
          </li>
          <li class="nav-item"><NavLink  to="/ShowTableProducts"><i class="ft-box"></i>Products</NavLink >
          </li>
          <li class="nav-item"><NavLink  to="/ShowTableCustomer"><i class="ft-layout"></i><span class="menu-title" data-i18n="">Customers</span></NavLink >
          </li> 
          <li class=" nav-item"><NavLink  to="/ShowTableCategory"><i class="ft-droplet"></i><span class="menu-title" data-i18n="">Categories</span></NavLink>
          </li>
          <li class="nav-item"><NavLink to="/ShowTableOrders"><i class="ft-layers"></i><span class="menu-title" data-i18n="">Orders</span></NavLink>
          </li>
          <li class=" nav-item"><NavLink to="/ShowTableTransactions"><i class="ft-credit-card"></i><span class="menu-title" data-i18n="">Transactions</span></NavLink>
          </li>
          <li class=" nav-item"><NavLink to="/ShowTableTopProduct"><i class="ft-bold"></i><span class="menu-title" data-i18n="">Top Products</span></NavLink>
          </li>
          <li class=" nav-item"><NavLink to="/ShowTableSlider"><i class="ft-credit-card"></i><span class="menu-title" data-i18n="">Slider Setting</span></NavLink>
          </li>
          <li class=" nav-item"><NavLink to="/ShowTableProductReport"><i class="ft-book"></i><span class="menu-title" data-i18n="">Products Report</span></NavLink>
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
                      { children }
                </div>
            </div>
        </section>
    </>
     )
}

export default HeaderFunction;