import styles from './Header_module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    FaChevronDown,
    FaHospitalUser,
    FaEnvelopeOpen,
    FaHeadphones,
    FaBars,
    FaUserAstronaut,
    FaCartPlus,
    FaSearchLocation,
    FaSearchDollar,
} from 'react-icons/fa';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to="/" className={cx('logo')}>
                        <img
                            src="https://winmart.vn/_next/static/images/logo-d4438e0bbf0ee4be0ab667eb391c2bad.png"
                            alt="Winmart"
                        ></img>
                    </Link>
                    <div className={cx('header-input')}>
                        <input
                            placeholder="Nhập tên sản phẩm,mã sản phẩm,từ khóa cẩn tìm"
                            className={cx('header-search')}
                        ></input>
                        <FaSearchDollar className={cx('search-icon')} />
                    </div>
                    <div className={cx('header-link')}>
                        <Link to="/login">
                            <FaUserAstronaut className={cx('header-icon')} />
                            Tài Khoản
                        </Link>
                        <Link to="/cart">
                            <FaCartPlus className={cx('header-icon')} />
                            Giỏ hàng
                        </Link>
                        <Link to="../">
                            <FaSearchLocation className={cx('header-icon')} />
                            Tài TP.Hà nội
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('content')}>
                    <ul className={cx('header-list-1')}>
                        <Link to="/category" className={cx('header-item')}>
                            <FaBars className={cx('icon-down')} />
                            Danh Mục Sản Phẩm
                        </Link>
                    </ul>
                    <ul className={cx('header-list')}>
                        <li className={cx('header-item')}>
                            <FaChevronDown className={cx('icon-down')} />
                            Sản phẩm đã xem
                        </li>
                        <li className={cx('header-item header-item-red')}>
                            <FaHospitalUser className={cx('icon-down')} />
                            Nhượng quyền WinMart"
                        </li>
                        <li className={cx('header-item')}>
                            <FaEnvelopeOpen className={cx('icon-down')} /> Tin tức WinMart
                        </li>
                        <li className={cx('header-item')}>
                            <FaHeadphones className={cx('icon-down')} />
                            Tư vấn mua hàng
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
