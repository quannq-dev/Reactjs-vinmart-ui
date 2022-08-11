import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx("wrapper-slider")}>
            <div className={cx("content")}>Nguyễn Quang Quân</div>
        </div>
    );
}

export default Sidebar;