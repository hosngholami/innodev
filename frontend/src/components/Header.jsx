import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
export const Header = () => {

  const title = "خرید آنلاین"


  return (
    <>
      <header className="main-header header header_v13">
        <section className="header_top">
          <div className="medium-container">
            <div className="header_top_inner">
              <div className="top_left">
                <ul className="top-links clearfix">
                  <li>
                    <a href="home-13.html#" className="get_a_quote">{title}</a>
                  </li>
                  <li>به شرکت مشاوره ما خوش آمدید.</li>
                </ul>
              </div>
              <div className="top_right text-right">
                <ul className="contact_info_two">
                  <li className="single">
                    <p> <span className="icon-telephone"></span> <a href="tel:+98 060 712 34">+98 060 712
                      34</a>
                    </p>
                  </li>
                  <li className="single">
                    <p><span className="icon-mail"></span><a href="mailto:sendmail@creote.com">sendmail@creote.com</a>
                    </p>
                  </li>
                  <li className="single">
                    <p> <span className="icon-location2"></span>
                      61w کسب و کار خیابان هوبرت ، لس آنجلس </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="navbar_outer get_sticky_header">
          <div className="medium-container">
            <nav className="inner_box">
              <div className="header_logo_box">
                <a href="index.html" className="logo navbar-brand">
                  <img src="src/assets/images/logo-default.png" alt="Creote" className="logo_default"></img>
                  <img src="src/assets/images/logo-default.png" alt="Creote" className="logo__sticky"></img>
                </a>
              </div>
              <div className="navbar_togglers hamburger_menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <div className="header_content header_content_collapse">

                <div className="header_menu_box">
                  <div className="navigation_menu">
                    <ul id="myNavbar" className="navbar_nav">
                      <li
                        className="menu-item  menu-item-has-children dropdown active dropdown_full position-static mega_menu nav-item">
                        <a href="index.html" className="dropdown-toggle nav-link">
                          <span>خانه</span>
                        </a>
                        <ul className="dropdown-menu width_65_percentage">
                          <li>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="index.html">صفحه خانه - 01</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-2.html">صفحه خانه - 02</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-3.html">صفحه خانه - 03</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-4.html">صفحه خانه - 04</a>
                                      </small>
                                    </li>

                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-5.html">صفحه خانه - 05</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-6.html">صفحه خانه - 06</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-7.html">صفحه خانه - 07</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-8.html">صفحه خانه - 08</a>
                                      </small>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div className="list_item_box style_one">
                                  <ul>

                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-9.html">صفحه خانه - 09</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-10.html">صفحه خانه -
                                          10</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-11.html">صفحه خانه -
                                          11</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-12.html">صفحه خانه -
                                          12</a>
                                      </small>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-13.html">صفحه خانه -
                                          13</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-14.html">صفحه خانه -
                                          14</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-15.html">صفحه خانه -
                                          15</a>
                                      </small>
                                    </li>
                                    <li>
                                      <small className="d-flex align-items-center">
                                        <i className="icon-home only_icon"></i>
                                        <a className="nav_link" href="home-16.html">صفحه خانه -
                                          16</a>
                                      </small>
                                    </li>

                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <a href="home-13.html#" className="dropdown-toggle nav-link">
                          <span>صفحات</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <a href="about-us.html" className="dropdown-item nav-link">
                              <span>درباره ما</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-has-children dropdown nav-item">
                            <a href="service-default.html" className="dropdown-item nav-link"><span>خدمات</span></a>
                            <ul className="dropdown-menu">
                              <li className="menu-item  nav-item">
                                <a href="service-classic.html" className="dropdown-item nav-link">
                                  <span>خدمات کلاسیک</span>
                                </a>
                              </li>
                              <li className="menu-item  nav-item">
                                <a href="service-default.html" className="dropdown-item nav-link">
                                  <span>خدمات پیشفرض</span>
                                </a>
                              </li>
                              <li className="menu-item nav-item">
                                <a href="service-details.html" className="dropdown-item nav-link">
                                  <span>جزئیات خدمات</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="pricing-packages.html" className="dropdown-item nav-link">
                              <span>پلن های قیمت گذاری</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="our-team.html" className="dropdown-item nav-link">
                              <span>تیم ما</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="faqs.html" className="dropdown-item nav-link">
                              <span>پرسش و پاسخ</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="contact.html" className="dropdown-item nav-link">
                              <span>تماس با ما</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="coming-soon.html" className="dropdown-item nav-link">
                              <span>به زودی می آییم</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                        <a href="home-13.html#" className="dropdown-toggle nav-link"><span>المنت ها</span></a>
                        <ul className="dropdown-menu width_60_percentage">
                          <li>
                            <div className="row">
                              <div className="col-lg-2 m_column">
                                <h5>محتوای 01</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/testimonial.html">پرسش و پاسخ</a></li>
                                    <li><a href="elements/call-to-action.html">لیست مخاطب ها</a></li>
                                    <li><a href="elements/video-button.html">دکمه ویدئو</a></li>
                                    <li><a href="elements/newsteller.html">اخبار جدید</a></li>
                                    <li><a href="elements/blog-posts.html">مطالب وبلاگ</a></li>
                                    <li><a href="elements/team.html">تیم</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>محتوای 02</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/process.html">روند کاری</a></li>
                                    <li><a href="elements/project-carousel.html">کاروسل پروژه</a></li>
                                    <li><a href="elements/project-filter.html">فیلتر پروژه</a></li>
                                    <li><a href="elements/progress-bar.html">نوار پیشرفت</a></li>
                                    <li><a href="elements/content-box.html">باکس محتوا</a></li>
                                    <li><a href="elements/faqs-elements.html">پرسش و پاسخ ها</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>ارائه دهنده</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/button.html">دکمه</a></li>
                                    <li><a href="elements/list-items.html">لیست آیتم ها</a></li>
                                    <li><a href="elements/contact-form.html">فرم تماس</a></li>
                                    <li><a href="elements/service-post.html">خدمات مطالب</a></li>
                                    <li><a href="elements/sliders.html">اسلایدر ها</a></li>
                                    <li><a href="elements/tabs.html">تب ها</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>تایپوگرافی</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/call-to-action.html">کال تو اکشن</a></li>
                                    <li><a href="elements/extra-content.html">محتوای بزرگ</a></li>
                                    <li><a href="elements/simple-image.html">تصویر ساده</a></li>
                                    <li><a href="elements/client-image.html">تصویر مشتریان</a></li>
                                    <li><a href="elements/price-plan.html">پلان های قیمت گذاری</a></li>
                                    <li><a href="elements/title.html">عنوان</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>پایه</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/service-box.html">باکس خدمات</a></li>
                                    <li><a href="elements/count-down.html">خارج از دسترس</a></li>
                                    <li><a href="elements/timeline.html">تایم لاین</a></li>
                                    <li><a href="elements/contact-box.html">باکس تماس</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>اینفو گرافی</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li><a href="elements/image-box.html">باکس تصویر</a></li>
                                    <li><a href="elements/icon-box.html">باکس آیکون</a></li>
                                    <li><a href="elements/fun-facts.html">فکت های فان</a></li>
                                    <li><a href="elements/quotes.html">نقل قول ها</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <a href="blog.html" className="dropdown-toggle nav-link">
                          <span>بلاگ</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="menu-item nav-item">
                            <a href="blog.html" className="dropdown-item nav-link">
                              <span>بلاگ کلاسیک</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="blog-modern.html" className="dropdown-item nav-link">
                              <span>بلاگ مدرن</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="blog-simple.html" className="dropdown-item nav-link">
                              <span>بلاگ ساده</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="blog-list-view.html" className="dropdown-item nav-link">
                              <span>مشاهده لیست بلاگ</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="blog-metro-fullwidth.html" className="dropdown-item nav-link">
                              <span>بلاگ تمام عرض</span>
                            </a>
                          </li>
                          <li className="menu-item nav-item">
                            <a href="blog-single.html" className="dropdown-item nav-link">
                              <span>جزئیات وبلاگ</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <a href="project-1-column-grid.html" className="dropdown-toggle nav-link">
                          <span>پروژه ها</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <a href="project-1-column-grid.html" className="dropdown-item nav-link">
                              <span>1 ستون گرید</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="project-1-column-with-sidebar.html" className="dropdown-item nav-link">
                              <span>1 ستون همراه با سایدبار</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="project-2-column-grid.html" className="dropdown-item nav-link">
                              <span>2 ستون های گرید</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="project-3-column-grid.html" className="dropdown-item nav-link">
                              <span>3 ستون های گرید</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="project-3-column-overlay.html" className="dropdown-item nav-link">
                              <span>3 ستون های جلوه</span>
                            </a>
                          </li>
                          <li className="menu-item nav-item">
                            <a href="project-details.html" className="dropdown-item nav-link">
                              <span>جزئیات پروژه</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item  menu-item-has-children dropdown nav-item">
                        <a href="shop.html" className="dropdown-toggle nav-link">
                          <span>فروشگاه</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <a href="shop.html" className="dropdown-item nav-link">
                              <span>محصولات</span>
                            </a>
                          </li>
                          <li className="menu-item nav-item">
                            <a href="shop-details.html" className="dropdown-item nav-link">
                              <span>جزئیات محصول</span>
                            </a>
                          </li>
                          <li className="menu-item nav-item">
                            <a href="shop-with-sidebar.html" className="dropdown-item nav-link">
                              <span>محصول با سایدبار</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="my-account.html" className="dropdown-item nav-link">
                              <span>اکانت من</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="checkout.html" className="dropdown-item nav-link">
                              <span>تسویه حساب</span>
                            </a>
                          </li>
                          <li className="menu-item  nav-item">
                            <a href="cart.html" className="dropdown-item nav-link">
                              <span>سبد خرید</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="navbar_right navbar_nav ">
                  <li>
                    <button type="button" className="search-toggler"><i className="icon-search"></i></button>
                  </li>
                  <li>
                    <div className="mini_cart_togglers header_side_cart">
                      <div className="mini-cart-count">
                        0 </div>
                      <i className="icon-shopping-bag1"></i>
                    </div>
                  </li>

                  <li>
                    <button type="button" className="contact-toggler"><i className="icon-menu1"></i></button>
                  </li>

                </ul>
              </div>

            </nav>
          </div>
        </section>

      </header>
    </>
  )
}