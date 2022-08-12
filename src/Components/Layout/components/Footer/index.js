import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div className={cx('footer')}>
                <div className={cx('wrapper-footer')}>
                    <div className={cx('col')}>
                        <div className={cx('footer-center')}>
                            <img
                                src="https://cdn-crownx.winmart.vn/images/prod/162964655378716287682220181%20(1).png"
                                alt="Sản phẩm an toàn"
                            ></img>
                            <p>Sản phẩm an toàn</p>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('footer-center')}>
                            <img
                                src="https://cdn-crownx.winmart.vn/images/prod/162964658411816287682628462%20(1).png"
                                alt="Sản phẩm an toàn"
                            ></img>
                            <p>Chất lượng cam kết</p>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('footer-center')}>
                            <img
                                src="https://cdn-crownx.winmart.vn/images/prod/162964661464516287682943943%20(1).png"
                                alt="Sản phẩm an toàn"
                            ></img>
                            <p>Dịch vụ vượt trội</p>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('footer-center')}>
                            <img
                                src="https://cdn-crownx.winmart.vn/images/prod/162964665580516292779811154%20(1).png"
                                alt="Sản phẩm an toàn"
                            ></img>
                            <p>Giao hàng nhanh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('footer-content')}>
                    <div className={cx('row')}>
                        <div className={cx('col-l-4')}>
                            <div className={cx('content')}>
                                <img
                                    src="https://winmart.vn/_next/static/images/logo_2-8e4bc984a7825a60badf7e30635a264d.png"
                                    alt="WinMart"
                                />
                                <p>
                                    Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce <br /> Mã số doanh nghiệp:
                                    0104918404 Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay đổi lần thứ 44,
                                    ngày 15 tháng 09 năm 2021
                                </p>
                                <img
                                    className={cx('help')}
                                    src="https://winmart.vn/_next/static/images/logoSaleNoti-f3d3b02c52d6144889ea6a5cbc6f0f19.png"
                                    alt="Thông báo"
                                />
                            </div>
                        </div>
                        <div className={cx('col-l-4')}>
                            <div className={cx('content')}>
                                <h4>Về chúng tôi</h4>
                                <li>Giới thiệu về WinMart</li>
                                <li>Danh sách cửa hàng</li>
                                <li>Quản lý chât lượng</li>
                                <li>Chính sách bảo mật vs chia sẻ thông tin</li>
                                <li>Điều khoản và điều kiện giao dịch</li>
                            </div>
                        </div>
                        <div className={cx('col-l-4')}>
                            <div className={cx('content')}>
                                <h4>Hỗ trợ khách hàng</h4>
                                <li>Trung tâm hỗ trợ khách hàng</li>
                                <li>Chính sách giao hàng</li>
                                <li>Chính sách thành toán</li>
                                <li>Chính sách đổi trả</li>
                                <li>Chính sách chiết khấu ưu đãi mua sắm</li>
                            </div>
                        </div>
                        <div className={cx('col-l-4')}>
                            <div className={cx('content')}>
                                <h4>Chăm sóc khách hàng</h4>
                                <li>Mua Online:0247 1066866</li>
                                <li>Email: cskh@winmart.masangroup.com</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom-block')}>
                <div className={cx('footer-content')}>
                    <div className={cx('row-3')}>
                        <div className={cx('col-l-3')}>
                            <div className={cx('content')}>
                                <div className={cx('block')}>
                                    <h3>Địa chỉ giao dịch Hà Nội:</h3>
                                    <p>
                                        Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce Tầng 6, Toà nhà trung
                                        tâm Quốc tế, số 17 Ngô Quyền, Phường Tràng Tiền, Quận Hoàn Kiếm, Thành Phố Hà
                                        Nội
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-l-3')}>
                            <div className={cx('content')}>
                                <div className={cx('block')}>
                                    <h3>Trụ sở chính:</h3>
                                    <p>
                                        Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce Tầng 5, Mplaza SaiGon,
                                        39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh,Việt Nam.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-l-3')}>
                            <div className={cx('content')}>
                                <div className={cx('block')}>
                                    <h3>Địa chỉ giao dịch Tp.HCM:</h3>
                                    <p>
                                        Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce Tầng 5, Mplaza SaiGon,
                                        39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
