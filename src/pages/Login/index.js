import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FaArrowLeft } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Login() {
    return (
        <>
            <div className={cx('background-login')}>
                <div className={cx('login')}>
                    <img
                        className={cx('login-img')}
                        src="https://winmart.vn/_next/static/images/logovin-108bbe45e7de2295fdf97185ea5f93ed.png"
                        alt="WinMart"
                    />
                    <a className={cx('link')} href="#">
                        <FaArrowLeft />
                    </a>
                    <h5 className={cx('login-title')}>Đăng Nhập</h5>
                    <form>
                        <input className={cx("login-input")} type="text" placeholder="Email hoặc số điện thoại*" />
                        <input className={cx("login-input")} type="password" placeholder="Mật Khẩu" />
                    </form>
                    <span>Quên mật Khẩu?</span>
                    <div className={cx("login-btn")}>
                        <button className={cx("btn")}>Đăng Nhập</button>
                        <button className={cx("btn")}>Trang Chủ</button>
                        <a className={cx("btn-link")}>Tạo tài Khoản</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
