import styles from './Product.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('col')}>
            <div className={cx('product')}>
                <div className={cx('product-img')}></div>
                <div className={cx('product-title')}>
                    <h4 className={cx('product-heading')}>Sữa tươi nguyên kem tiệt trùng Lemontree Dairy hộ</h4>
                    <p className={cx('product-unit')}>ĐVT: Hộp</p>
                    <div className={cx('product-price')}>
                        <span className={cx('product-gack')}>39.500₫</span>
                        <span className={cx('product-action')}>19.900₫</span>
                    </div>
                    <button className={cx('btn')}>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
