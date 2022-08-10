import Header from "~/Components/Layout/components/Header";
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className={cx("container")}>          
                    {children}
            </div>
        </div>
    );
}

export default DefaultLayout;