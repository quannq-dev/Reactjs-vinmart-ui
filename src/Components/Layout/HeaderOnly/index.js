import Header from "~/Components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./HeaderOnly.module.scss"
import classNames from "classnames/bind";
import Footer from "../components/Footer";
const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;