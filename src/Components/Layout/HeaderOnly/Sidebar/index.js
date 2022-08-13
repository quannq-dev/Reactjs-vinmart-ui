import classNames from "classnames/bind";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Sidebar.module.scss"
const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx("wrapper-sidebar")}>
           <div className={cx("sidebar")}>
                <a href="#" className={cx("sidebar-link")}>Sản phẩm khuyến mãi</a>
                <FaChevronDown/>
           </div>
           <div className={cx("sidebar")}>
                <a href="#" className={cx("sidebar-link","link")}>Thương hiệu</a>
                <FaChevronDown className="sidebar-icon"/>
           </div>
        </div>
    );
}

export default Sidebar;