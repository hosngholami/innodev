export const SidebarAdmin = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-right image">
                        <img src="src/assets/admin/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-right info">
                        <p>علیرضا حسینی زاده</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> آنلاین</a>
                    </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="جستجو" />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">منو</li>
                    <li className="active treeview">
                        <a href="#">
                            <i className="fa fa-dashboard"></i> <span>داشبرد</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> داشبرد اول</a></li>
                            <li><a href="index2.html"><i className="fa fa-circle-o"></i> داشبرد دوم</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-files-o"></i>
                            <span>لایه های صفحه</span>
                            <span className="pull-left-container">
                                <span className="label label-primary pull-left">4</span>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> نوار بالا</a></li>
                            <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> باکس ها</a></li>
                            <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> فیکس شده</a></li>
                            <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> سایدبار</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="pages/widgets.html">
                            <i className="fa fa-th"></i> <span>ویجت ها</span>
                            <span className="pull-left-container">
                                <small className="label pull-left bg-green">جدید</small>
                            </span>
                        </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>نمودارها</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i>نمودار ChartJS</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i>نمودار Morris</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i>نمودار Flot</a></li>
                            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i>نمودار Inline charts</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-laptop"></i>
                            <span>اشیای گرافیکی</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> عمومی</a></li>
                            <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> آیکون</a></li>
                            <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> دکمه</a></li>
                            <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> اسلایدر</a></li>
                            <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> تایم لاین</a></li>
                            <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> مدال</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-edit"></i> <span>فرم ها</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> اجزای عمومی</a></li>
                            <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> پیشرفته</a></li>
                            <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> ویرایشگر</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-table"></i> <span>جداول</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> جدول ساده</a></li>
                            <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> جدول داده</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="pages/calendar.html">
                            <i className="fa fa-calendar"></i> <span>تقویم</span>
                            <span className="pull-left-container">
                                <small className="label pull-left bg-red">۳</small>
                                <small className="label pull-left bg-blue">۱۷</small>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className="fa fa-envelope"></i> <span>ایمیل ها</span>
                            <span className="pull-left-container">
                                <small className="label pull-left bg-yellow">۱۲</small>
                                <small className="label pull-left bg-green">۱۶</small>
                                <small className="label pull-left bg-red">۵</small>
                            </span>
                        </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-folder"></i> <span>مثال ها</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> سفارش</a></li>
                            <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o"></i> پروفایل</a></li>
                            <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> صفحه ورود</a></li>
                            <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> ثبت نام</a></li>
                            <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> قفل صفحه</a></li>
                            <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> ارور ۴۰۴</a></li>
                            <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> ارور ۵۰۰</a></li>
                            <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> صفحه خالی</a></li>
                            <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o"></i> صفحه سریع</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-share"></i> <span>چندسطحی</span>
                            <span className="pull-left-container">
                                <i className="fa fa-angle-right pull-left"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> سطح اول</a></li>
                            <li className="treeview">
                                <a href="#"><i className="fa fa-circle-o"></i> سطح اول
                                    <span className="pull-left-container">
                                        <i className="fa fa-angle-right pull-left"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o"></i> سطح دوم</a></li>
                                    <li className="treeview">
                                        <a href="#"><i className="fa fa-circle-o"></i> سطح دوم
                                            <span className="pull-left-container">
                                                <i className="fa fa-angle-right pull-left"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o"></i> سطح سوم</a></li>
                                            <li><a href="#"><i className="fa fa-circle-o"></i> سطح سوم</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> سطح اول</a></li>
                        </ul>
                    </li>
                    <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>مستندات</span></a></li>
                    <li className="header">برچسب ها</li>
                    <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>مهم</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>هشدار</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>اطلاعات</span></a></li>
                </ul>
            </section>
        </aside>
    )
}