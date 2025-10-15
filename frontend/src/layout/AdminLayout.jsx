import { Outlet } from "react-router-dom"

import '../assets/admin/dist/css/bootstrap-theme.css';
import '../assets/admin/dist/css/rtl.css';
// import '../assets/admin/dist/css/persian-datepicker-0.4.5.min.js';
import '../assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../assets/admin/bower_components/Ionicons/css/ionicons.min.css';
import '../assets/admin/dist/css/AdminLTE.css';
import '../assets/admin/dist/css/skins/_all-skins.min.css';
import '../assets/admin/bower_components/morris.js/morris.css';
import '../assets/admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../assets/admin/bower_components/bootstrap-daterangepicker/daterangepicker.css';
import '../assets/admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';


import '../assets/admin/bower_components/jquery/dist/jquery.min.js'
import '../assets/admin/bower_components/jquery-ui/jquery-ui.min.js'
import '../assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js'
// import '../assets/admin/bower_components/raphael/raphael.min.js'
import '../assets/admin/bower_components/morris.js/morris.min.js'
import '../assets/admin/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js'
import '../assets/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'
import '../assets/admin/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'
import '../assets/admin/bower_components/jquery-knob/dist/jquery.knob.min.js'
// import '../assets/admin/bower_components/moment/min/moment.min.js'
// import '../assets/admin/bower_components/bootstrap-daterangepicker/daterangepicker.js'
// import '../assets/admin/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
// import '../assets/admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'
import '../assets/admin/bower_components/jquery-slimscroll/jquery.slimscroll.min.js'
import '../assets/admin/bower_components/fastclick/lib/fastclick.js'
import '../assets/admin/dist/js/adminlte.min.js'
import '../assets/admin/dist/js/pages/dashboard.js'
import '../assets/admin/dist/js/demo.js'

import { HeaderAdmin } from '../components/admin/HeaderAdmin.jsx'
import { SidebarAdmin } from '../components/admin/SidebarAdmin.jsx'
import { FooterAdmin } from '../components/admin/FooterAdmin.jsx'

export const AdminLayout = () => {
    return (
        <div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
           <HeaderAdmin />
                <SidebarAdmin />
                <Outlet />
                <FooterAdmin />
            </div>
     
        </div>
    )

}