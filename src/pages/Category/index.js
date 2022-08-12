import styles from "./Category.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Category() {
    return (
        <div className={cx("wrapper-category")}>
           <div className={cx("inner-category")}>Nguyễn Quang Quân</div>
        </div>
    );
}

export default Category;