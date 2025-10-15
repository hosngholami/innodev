export const HomeAdmin = () => {
    return (
     
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        داشبرد
                        <small>کنترل پنل</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> خانه</a></li>
                        <li className="active">داشبرد</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <div className="small-box bg-aqua">
                                <div className="inner">
                                    <h3>150</h3>

                                    <p>سفارش جدید</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <div className="small-box bg-green">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>

                                    <p>افزایش امتیاز</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <div className="small-box bg-yellow">
                                <div className="inner">
                                    <h3>44</h3>

                                    <p>کاربران ثبت شده</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <div className="small-box bg-red">
                                <div className="inner">
                                    <h3>65</h3>

                                    <p>بازدید جدید</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <section className="col-lg-12 col-md-12">
                            <div className="box box-info">
                                <div className="box-header">
                                    <i className="fa fa-info-circle"></i>
                                    <h3 className="box-title">قالب AdminLTE فارسی ورژن 2.4.0</h3>
                                    <div className="pull-left box-tools">
                                        <button type="button" className="btn bg-info btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <h5>این قالب به صورت html هست و برای بخش کنترل پنل و مدیریت سایت های مختلف مناسب می باشد.</h5>
                                    <h5>نسخه اصلی این قالب AdminLTE می باشد که توسط <a href="https://adminlte.io">Almsaeed Studio</a> به
                                        صورت رایگان قرار داده شده است.</h5>
                                    <br />
                                    <h5><b>ویژگی های قالب و تفاوت های آن با قالب اصلی:</b></h5>
                                    <h5>۱- قالب به صورت کامل و حرفه ای فارسی و راست چین شده.</h5>
                                    <h5>۲- انتخاب تاریخ به صورت شمسی یا دیتا پیکر توسط کتاب خانه باباخانی اضافه شده.</h5>
                                    <h5>۳- ویرایشگر CK Editor فارسی و راست چین شده.</h5>
                                    <h5>۴- ویرایشگر TinyMCE فارسی و راست چین شده و به قالب اضافه شده.</h5>
                                    <h5>۵- همچنین فونت فارسی برای خوانایی بیشتر حروف و اعداد فارسی به قالب افزوده شد.</h5>
                                    <br />
                                    <h6><b>قالب توسط علیرضا حسینی زاده و به صورت رایگان منتشر شده است.</b></h6>
                                    <h6><b>برای دانلود قالب و دریافت آپدیت های آن به این <a
                                        href="https://github.com/hosseinizadeh/AdminLTE_Persian">وب سایت</a> مراجعه کنید.</b></h6>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="row">
                        <section className="col-lg-7 connectedSortable">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs pull-left">
                                    <li className="active"><a href="#revenue-chart" data-toggle="tab">نمودار</a></li>
                                    <li><a href="#sales-chart" data-toggle="tab">چارت</a></li>
                                    <li className="pull-right header"><i className="fa fa-inbox"></i> فروش</li>
                                </ul>
                                <div className="tab-content no-padding">
                                    <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: '300px' }}></div>
                                    <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: '300px' }}></div>
                                </div>
                            </div>

                            <div className="box box-success">
                                <div className="box-header">
                                    <i className="fa fa-comments-o"></i>

                                    <h3 className="box-title">گفتگو</h3>

                                    <div className="box-tools pull-left" data-toggle="tooltip" title="وضعیت">
                                        <div className="btn-group" data-toggle="btn-toggle">
                                            <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i>
                                            </button>
                                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body chat" id="chat-box">
                                    <div className="item">
                                        <img src="dist/img/user4-128x128.jpg" alt="user image" className="online" />

                                        <p className="message">
                                            <a href="#" className="name">
                                                <small className="text-muted pull-left"><i className="fa fa-clock-o"></i> 2:15</small>
                                                نسترن
                                            </a>
                                            فایل مورد نظر شما
                                        </p>
                                        <div className="attachment">
                                            <h4>فایل ضمیمه</h4>

                                            <p className="filename">
                                                Theme-thumbnail-image.jpg
                                            </p>

                                            <div className="pull-left">
                                                <button type="button" className="btn btn-primary btn-sm btn-flat">دانلود</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="dist/img/user3-128x128.jpg" alt="user image" className="offline" />

                                        <p className="message">
                                            <a href="#" className="name">
                                                <small className="text-muted pull-left"><i className="fa fa-clock-o"></i> 5:15</small>
                                                نگین
                                            </a>
                                            ممنونم
                                        </p>
                                    </div>
                                    <div className="item">
                                        <img src="dist/img/user2-160x160.jpg" alt="user image" className="offline" />

                                        <p className="message">
                                            <a href="#" className="name">
                                                <small className="text-muted pull-left"><i className="fa fa-clock-o"></i> 5:30</small>
                                                محمد
                                            </a>
                                            با تشکر از شما
                                        </p>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Type message..." />

                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-success"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box box-primary">
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>

                                    <h3 className="box-title">لیست کارها</h3>

                                    <div className="box-tools pull-left">
                                        <ul className="pagination pagination-sm inline">
                                            <li><a href="#">&laquo;</a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="todo-list">
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <span className="text">ساخت قالب</span>
                                            <small className="label label-danger"><i className="fa fa-clock-o"></i> ۲ دقیقه</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <input type="checkbox" value="" />
                                            <span className="text">بهینه سازی قالب سایت</span>
                                            <small className="label label-info"><i className="fa fa-clock-o"></i> ۴ ساعت</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <input type="checkbox" value="" />
                                            <span className="text">ایجاد صفحه فرود سایت</span>
                                            <small className="label label-warning"><i className="fa fa-clock-o"></i> ۱ روز</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <input type="checkbox" value="" />
                                            <span className="text">تبلیغات سایت</span>
                                            <small className="label label-success"><i className="fa fa-clock-o"></i> ۳ روز</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <input type="checkbox" value="" />
                                            <span className="text">بررسی اعلان ها</span>
                                            <small className="label label-primary"><i className="fa fa-clock-o"></i> ۱ هفته</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fa fa-ellipsis-v"></i>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </span>
                                            <input type="checkbox" value="" />
                                            <span className="text">طراحی سیستم جدید</span>
                                            <small className="label label-default"><i className="fa fa-clock-o"></i> ۲ ماه</small>
                                            <div className="tools">
                                                <i className="fa fa-edit"></i>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-footer clearfix no-border">
                                    <button type="button" className="btn btn-default pull-left"><i className="fa fa-plus"></i> جدید</button>
                                </div>
                            </div>

                            <div className="box box-info">
                                <div className="box-header">
                                    <i className="fa fa-envelope"></i>

                                    <h3 className="box-title">ایمیل</h3>
                                    <div className="pull-left box-tools">
                                        <button type="button" className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip"
                                            title="Remove">
                                            <i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="emailto" placeholder="ایمیل" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" placeholder="موضوع" />
                                        </div>
                                        <div>
                                            <textarea className="textarea" placeholder="متن ایمیل"
                                                style={{ width: '100%', height: '125px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px' }}></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="box-footer clearfix">
                                    <button type="button" className="pull-left btn btn-default" id="sendEmail">ارسال
                                        <i className="fa fa-arrow-circle-left"></i></button>
                                </div>
                            </div>

                        </section>
                        <section className="col-lg-5 connectedSortable">

                            <div className="box box-solid bg-light-blue-gradient">
                                <div className="box-header">
                                    <div className="pull-left box-tools">
                                        <button type="button" className="btn btn-primary btn-sm daterange pull-left" data-toggle="tooltip"
                                            title="Date range">
                                            <i className="fa fa-calendar"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm pull-left" data-widget="collapse"
                                            data-toggle="tooltip" title="Collapse" style={{ marginLeft: '5px' }}>
                                            <i className="fa fa-minus"></i></button>
                                    </div>

                                    <i className="fa fa-map-marker"></i>

                                    <h3 className="box-title">
                                        بازدید ها
                                    </h3>
                                </div>
                                <div className="box-body">
                                    <div id="world-map" style={{height: '250px', width: '100px'}}></div>
                                </div>
                                <div className="box-footer no-border">
                                    <div className="row">
                                        <div className="col-xs-4 text-center" style={{ borderLeft: '1px solid #f4f4f4' }}>
                                            <div id="sparkline-1"></div>
                                            <div className="knob-label">بازدید ها</div>
                                        </div>
                                        <div className="col-xs-4 text-center" style={{ borderLeft: '1px solid #f4f4f4' }}>
                                            <div id="sparkline-2"></div>
                                            <div className="knob-label">آنلاین</div>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <div id="sparkline-3"></div>
                                            <div className="knob-label">فعال</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box box-solid bg-teal-gradient">
                                <div className="box-header">
                                    <i className="fa fa-th"></i>

                                    <h3 className="box-title">نمودار فروش</h3>

                                    <div className="box-tools pull-left">
                                        <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body border-radius-none">
                                    <div className="chart" id="line-chart" style={{ height: '250px'}}></div>
                                </div>
                                <div className="box-footer no-border">
                                    <div className="row">
                                        <div className="col-xs-4 text-center" style={{ borderLeft: '1px solid #f4f4f4' }}>
                                            <input type="text" className="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                                                data-fgColor="#39CCCC" />

                                            <div className="knob-label">سفارش ایمیلی</div>
                                        </div>
                                        <div className="col-xs-4 text-center" style={{ borderLeft: '1px solid #f4f4f4' }}>
                                            <input type="text" className="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                                                data-fgColor="#39CCCC" />

                                            <div className="knob-label">سفارش آنلاین</div>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                                                data-fgColor="#39CCCC" />

                                            <div className="knob-label">سفارش فیزیکی</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box box-solid bg-green-gradient">
                                <div className="box-header">
                                    <i className="fa fa-calendar"></i>

                                    <h3 className="box-title">تقویم</h3>
                                    <div className="pull-left box-tools">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                                                <i className="fa fa-bars"></i></button>
                                            <ul className="dropdown-menu pull-left" role="menu">
                                                <li><a href="#">رویداد تازه</a></li>
                                                <li><a href="#">حذف رویدادها</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#">نمایش تقویم</a></li>
                                            </ul>
                                        </div>
                                        <button type="button" className="btn btn-success btn-sm" data-widget="collapse"><i
                                            className="fa fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <div id="calendar" style={{ width: '100%' }}></div>
                                </div>
                                <div className="box-footer text-black">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="clearfix">
                                                <span className="pull-right">نمایشگاه</span>
                                                <small className="pull-left">90%</small>
                                            </div>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green" style={{ width: '90%' }}></div>
                                            </div>

                                            <div className="clearfix">
                                                <span className="pull-right">کمپین ۳۰ درصد</span>
                                                <small className="pull-left">70%</small>
                                            </div>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green" style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="clearfix">
                                                <span className="pull-right">کمپین ایمیل</span>
                                                <small className="pull-left">60%</small>
                                            </div>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green" style={{ width: '60%' }}></div>
                                            </div>

                                            <div className="clearfix">
                                                <span className="pull-right">کمپین تجارت الکترونیک</span>
                                                <small className="pull-left">40%</small>
                                            </div>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green" style={{ width: '40%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </section>
            </div>
    )
}