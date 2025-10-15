export const Header = () => {
    return (
        <header className="main-header">
            <a href="index2.html" className="logo">
                <span className="logo-mini">پنل</span>
                <span className="logo-lg"><b>کنترل پنل مدیریت</b></span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-envelope-o"></i>
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">۴ پیام خوانده نشده</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <div className="pull-right">
                                                    <img src="src/assets/admin/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    علیرضا
                                                    <small><i className="fa fa-clock-o"></i> ۵ دقیقه پیش</small>
                                                </h4>
                                                <p>متن پیام</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-right">
                                                    <img src="src/assets/admin/dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    نگین
                                                    <small><i className="fa fa-clock-o"></i> ۲ ساعت پیش</small>
                                                </h4>
                                                <p>متن پیام</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-right">
                                                    <img src="src/assets/admin/dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    نسترن
                                                    <small><i className="fa fa-clock-o"></i> امروز</small>
                                                </h4>
                                                <p>متن پیام</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-right">
                                                    <img src="src/assets/admin/dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    نگین
                                                    <small><i className="fa fa-clock-o"></i> دیروز</small>
                                                </h4>
                                                <p>متن پیام</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-right">
                                                    <img src="src/assets/admin/dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    نسترن
                                                    <small><i className="fa fa-clock-o"></i> ۲ روز پیش</small>
                                                </h4>
                                                <p>متن پیام</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">نمایش تمام پیام ها</a></li>
                            </ul>
                        </li>
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-bell-o"></i>
                                <span className="label label-warning">۱۰</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">۱۰ اعلان جدید</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-aqua"></i> ۵ کاربر جدید ثبت نام کردند
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-warning text-yellow"></i> اخطار دقت کنید
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-red"></i> ۴ کاربر جدید ثبت نام کردند
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart text-green"></i> ۲۵ سفارش جدید
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red"></i> نام کاربریتان را تغییر دادید
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">نمایش همه</a></li>
                            </ul>
                        </li>
                        <li className="dropdown tasks-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-flag-o"></i>
                                <span className="label label-danger">۹</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">۹ کار برای انجام دارید</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <h3>
                                                    ساخت دکمه
                                                    <small className="pull-left">20%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-aqua" style={{ width: '20%' }} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">20% تکمیل شده</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <h3>
                                                    ساخت قالب جدید
                                                    <small className="pull-left">40%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" style={{ width: '40%' }} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">40% تکمیل شده</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <h3>
                                                    تبلیغات
                                                    <small className="pull-left">60%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-red" style={{ width: '60%' }} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">60% تکمیل شده</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <h3>
                                                    ساخت صفحه فرود
                                                    <small className="pull-left">80%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-yellow" style={{ width: '80%' }} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">80% تکمیل شده</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">نمایش همه</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="src/assets/admin/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                <span className="hidden-xs">علیرضا حسینی زاده</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src="src/assets/admin/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                                    <p>
                                        علیرضا حسینی زاده
                                        <small>مدیریت کل سایت</small>
                                    </p>
                                </li>
                                <li className="user-body">
                                    <div className="row">
                                        <div className="col-xs-4 text-center">
                                            <a href="#">صفحه من</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">فروش</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">دوستان</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">پروفایل</a>
                                    </div>
                                    <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">خروج</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}