import classNames from "classnames/bind";
import styles from "./Home.module.scss"

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx("wrapper-home")}>
            <div className={cx("logo")}>
                <img src="https://cdn-crownx.winmart.vn/images/prod/b%C3%A1nh%20k%E1%BA%B9o_1180x400-38_0b1a903b-11dd-4545-b60f-7a6e886a12d2.jpg" alt="Lỗi Ảnh" />
            </div>
            <h3 className={cx("title")}>Sản Phẩm Khuyến Mãi</h3>
            <div className={cx("row")}>
                <div className={cx("col")}>
                    <div className={"product"}>
                        <img src="https://cdn-crownx.winmart.vn/images/prod/162428240833410056267-HOP-Khan-giay-1-lop-Lency-33cm-gui-1kg.jpg" alt="Lỗi"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;