import styles from './Header_module.scss';
import classNames from 'classnames/bind';
import {FaChevronDown,FaHospitalUser,FaEnvelopeOpen,FaHeadphones,FaBars} from "react-icons/fa"
const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>

                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx("content")}>
                    <ul className={cx("header-list-1")}>
                        <li className={cx("header-item")}><FaBars className={cx("icon-down")}/>Danh Mục Sản Phẩm</li>
                    </ul>
                    <ul className={cx("header-list")}>
                        <li className={cx("header-item")}><FaChevronDown className={cx("icon-down")} />Sản phẩm đã xem</li>
                        <li className={cx("header-item header-item-red")}><FaHospitalUser className={cx("icon-down")} />Nhượng quyền WinMart"</li>
                        <li className={cx("header-item")}><FaEnvelopeOpen className={cx("icon-down")}/> Tin tức WinMart</li>
                        <li className={cx("header-item")}><FaHeadphones className={cx("icon-down")}/>Tư vấn mua hàng</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
