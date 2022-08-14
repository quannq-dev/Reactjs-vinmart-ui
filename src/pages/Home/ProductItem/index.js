import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product(props) {
    return (
        <Link to="/product" className={cx('col')}>
            <div className={cx('product')}>
                <img src={props.src} className={cx('product-img')} alt={props.title} />
                <div className={cx('product-title')}>
                    <h4 className={cx('product-heading')}>{props.title}</h4>
                    <p className={cx('product-unit')}>{props.dvt}</p>
                    <div className={cx('product-price')}>
                        <span className={cx('product-gack')}>{props.salePrice}</span>
                        <span className={cx('product-action')}>{props.price}</span>
                    </div>
                    <button className={cx('btn')}>Thêm vào giỏ</button>
                </div>
            </div>
        </Link>
    );
}

export default Product;
