import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { FaCarSide, FaChevronRight, FaStar } from 'react-icons/fa';
import ProductItem from '../Home/ProductItem';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper-product')}>
            <div className={cx('heading')}>
                <a href="../Home" className={cx('link-home')}>
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
                        <a href="../Home">Hãy là người đầu tiên nhận xét sản phẩm này</a>
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
                            <hr />
                            <div className={cx('price-btn')}>
                                <p>Tình Trạng</p>
                                <button>Chai</button>
                            </div>
                            <div className={cx('price-type')}>
                                <p>Tình Trạng</p>
                                <button>-</button>
                                <input type="text" placeholder="0" />
                                <button>+</button>
                            </div>
                            <div className={cx('price-btn')}>
                                <button className={cx('btn-price')}>Mua Ngay</button>
                                <button className={cx('btn-price', 'transparent')}>
                                    <FaCarSide /> Thêm sản phẩm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('details')}>
                <div className={cx('details-title')}>
                    <div className={cx('details-title-left')}>
                        <h3>Mô tả</h3>
                    </div>
                    <div className={cx('details-title-right')}>
                        <h3>thông tin</h3>
                    </div>
                </div>
            </div>
            <div className={cx('details-product')}>
                <div className={cx('details-img')}>
                    <h2>Dầu gội bạc hà Head & Shoulders 850ml</h2>
                    <img src="https://cdn-crownx.winmart.vn/images/prod/26849684291614.jpg" alt="Lỗi ảnh" />
                    <span>Dầu gội bạc hà Head & Shoulders 850ml</span>
                </div>
                <div className={cx('details-information')}>
                    <div className={cx('details-information-title')}>
                        <p>Xuất Xứ</p>
                        <p>Japan</p>
                    </div>
                    <div className={cx('details-information-title')}>
                        <p>Thành Phần</p>
                        <p>Ghi trên bao bì sản phẩm</p>
                    </div>
                    <div className={cx('details-information-title')}>
                        <p>Thành Phần</p>
                        <p className={cx('information-title')}>
                            Làm ướt tóc với nước sạch, lấy lượng dầu gội vừa đủ nhẹ nhàng massage lên tóc. Sau đó gội và
                            làm sạch bằng nước. Khuyến khích dùng thêm dòng xả cùng dòng để đạt được hiệu quả cao.
                        </p>
                    </div>
                    <div className={cx('details-information-title')}>
                        <p>Bảo Quản</p>
                        <p className={cx('information-title')}>Tránh nhiệt độ cao và ánh nắng trực tiếp</p>
                    </div>
                </div>
            </div>
            <div className={cx('evaluate')}>
                <h3>Đánh giá sản phẩm</h3>
            </div>
            <div className={cx('evaluate-product')}>
                <form>
                    <div className={cx('form')}>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Đánh giá<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <FaStar className={cx('icon-start')} />
                                <FaStar className={cx('icon-start')} />
                                <FaStar className={cx('icon-start')} />
                                <FaStar className={cx('icon-start')} />
                                <FaStar className={cx('icon-start')} />
                            </div>
                        </div>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Khách hàng<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <input
                                    className={cx('evaluate-product-input')}
                                    id={cx('client')}
                                    type="text"
                                    placeholder="Khách hàng"
                                />
                            </div>
                        </div>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Email<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <input
                                    className={cx('evaluate-product-input')}
                                    id={cx('client')}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Điện thoại<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <input
                                    className={cx('evaluate-product-input')}
                                    id={cx('client')}
                                    type="text"
                                    placeholder="Điện thoại"
                                />
                            </div>
                        </div>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Tiêu đề<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <input
                                    className={cx('evaluate-product-input')}
                                    id={cx('client')}
                                    type="text"
                                    placeholder="Tiêu đề"
                                />
                            </div>
                        </div>
                        <div className={cx('evaluate-product-form')}>
                            <label className={cx('evaluate-product-left')} htmlFor="client">
                                Nội dung<span>*</span>
                            </label>
                            <div className={cx('evaluate-product-right')}>
                                <input
                                    className={cx('evaluate-product-input', 'evaluate-product-input-width')}
                                    id={cx('client')}
                                    type="text"
                                    placeholder="Nội dung"
                                />
                            </div>
                        </div>
                        <button className={cx('btn-evaluate')}>Đánh giá</button>
                    </div>
                </form>
            </div>
            <div className={cx('coalition-products')}>
                <h3>Sản phẩm liên quân</h3>
            </div>
            <div className={cx('coalition-products-list')}>
                <ProductItem
                    src="https://cdn-crownx.winmart.vn/images/prod/d%E1%BA%A7u%20g%E1%BB%99i%20cao%20c%E1%BA%A5p%20d%C3%A0nh%20cho%20t%C3%B3c%20h%C6%B0%20t%E1%BB%95n%20kerasys%20salon%20care%20nutritive%20ampoule%20600g_ceb0d64a-1a9f-4274-bcfa-42ca0b24a1a7.jpg"
                    alt="Lỗi ảnh"
                    title="Dầu gội cao cấp dành cho tóc hư tổn Kerasys Salon Care Nutritive Ampoule 600g"
                    dvt="DVT: Hộp"
                    price="219.000 ₫"
                    salePrice="
                    239.000 ₫"
                />
                <ProductItem
                    src="https://cdn-crownx.winmart.vn/images/prod/d%E1%BA%A7u%20g%E1%BB%99i%20th%E1%BA%A3o%20d%C6%B0%E1%BB%A3c%20kerasys%20oriental%20premium%20600g_04ad6a68-b401-4063-9575-48e2948af961.jpg"
                    alt="Lỗi ảnh"
                    title="Dầu gội cao cấp dành cho tóc hư tổn Kerasys Salon Care Nutritive Ampoule 600g"
                    dvt="DVT: Hộp"
                    price="211.000 ₫"
                    salePrice="215.000 ₫"
                />
                <ProductItem
                    src="https://cdn-crownx.winmart.vn/images/prod/162427539557910016730-CHA-Dau-goi-Rejoice-Perfume-Collection-huong-nuoc-hoa-hong-632,3ml.jpg"
                    alt="Lỗi ảnh"
                    title="Dầu gội siêu mượt Rejoice 650g"
                    dvt="DVT: Hộp"
                    price="109.000 ₫"
                    salePrice="126.000 ₫"
                />
                <ProductItem
                    src="https://cdn-crownx.winmart.vn/images/prod/162427571451610016738-CHA-Dau-goi-Pantene-chiet-xuat-nuoc-hoa-hong-530ml.jpg"
                    alt="Lỗi ảnh"
                    title="Dầu gội Pantene Pro-V dưỡng tóc suôn mượt óng ả 650g"
                    dvt="DVT: Hộp"
                    price="122.000 ₫"
                    salePrice="148.000 ₫"
                />
                <ProductItem
                    src="https://cdn-crownx.winmart.vn/images/prod/162427571424810016739-CHA-Dau-xa-Pantene-duong-tuc-suun-muot-ung-a-670ml.jpg"
                    alt="Lỗi ảnh"
                    title="Dầu gội cao cấp dành cho tóc hư tổn Kerasys Salon Care Nutritive Ampoule 600g"
                    dvt="DVT: Hộp"
                    price="122.000 ₫"
                    salePrice="148.000 ₫"
                />
            </div>
            <div className={cx('padding-20px')}></div>
        </div>
    );
}

export default Product;
