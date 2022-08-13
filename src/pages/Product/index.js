import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { FaCarSide, FaChevronRight } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper-product')}>
            <div className={cx('heading')}>
                <a href="#" className={cx('link-home')}>
                    Trang Chủ
                </a>
                <FaChevronRight className={cx('heading-icon')} />
                <p>Dầu gội bạc hà Head & Shoulders 850ml</p>
            </div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('product-img')}>
                        <img src="https://cdn-crownx.winmart.vn/images/prod/26849684291614.jpg" alt="Lỗi ảnh" />
                    </div>
                    <div className={cx('product-title')}>
                        <h4>Dầu gội bạc hà Head & Shoulders 850ml</h4>
                        <a href="#">Hãy là người đầu tiên nhận xét sản phẩm này</a>
                        <span>SKU: 10236863</span>
                        <div className={cx('price')}>
                            <div className={cx('price-sale')}>
                                <p>Giá niêm yết</p>
                                <span>212.000 ₫</span>
                            </div>
                            <div className={cx('price-present')}>
                                <p>Giá khuyến mãi</p>
                                <span>165.000 ₫</span>
                            </div>
                            <div className={cx('price-status')}>
                                <p>Tình Trạng</p>
                                <span>Còn hàng</span>
                            </div>
                            <div className={cx('price-time')}>
                                <p>Vận chuyển</p>
                                <span>
                                    Giao nhanh trong vòng 2-4 tiếng khi đơn hàng được xác nhận. Các đơn hàng đặt sau
                                    18:00 sẽ được giao trước 12:00 sáng ngày hôm sau. Liên hệ hỗ trợ: 024 71066866
                                </span>
                            </div>
                            <hr/>
                            <div className={cx('price-btn')}>
                                <p>Tình Trạng</p>
                                <button>Chai</button>
                            </div>
                            <div className={cx('price-type')}>
                                <p>Tình Trạng</p>
                                <button>-</button>
                                <input type="text" placeholder='0'/>
                                <button>+</button>
                            </div>
                            <div className={cx('price-btn')}>
                                <button className={cx("btn-price")}>Mua Ngay</button>
                                <button className={cx("btn-price","transparent")}><FaCarSide/> Thêm sản phẩm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("details")}>
                <div className={cx("details-title")}>
                   <div className={cx("details-title-left")}>
                    <h3>Mô tả</h3>
                   </div>
                   <div className={cx("details-title-right")}>
                    <h3>thông tin</h3>
                   </div>
                </div>
            
            </div>
        </div>
    );
}

export default Product;
