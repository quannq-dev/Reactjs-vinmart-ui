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
                
            </div>
        </>
    );
}

export default Footer;
