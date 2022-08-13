import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import Product from '~/pages/Home/Product';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper-category')}>
            <div className={cx('inner-category')}>
                <a href="#">Khuyễn Mãi Tốt Nhất</a>
                <a href="#">Bán chạy</a>
            </div>
            <hr></hr>
            <div className={cx('category-list')}>
                <div className={cx('row')}>
                <Product
                        src="https://cdn-crownx.winmart.vn/images/prod/162428240833410056267-HOP-Khan-giay-1-lop-Lency-33cm-gui-1kg.jpg"
                        alt="Lỗi ảnh"
                        title="Sữa tươi nguyên kem tiệt trùng Lemontree Dairy hộ"
                        dvt="DVT: Hộp"
                        price="19.900 ₫"
                        salePrice="39.500 ₫"
                    />
                    <Product 
                      src="https://cdn-crownx.winmart.vn/images/prod/26849684291614.jpg"
                      alt="Lỗi ảnh"
                      title="Dầu gội bạc hà Head & Shoulders 850ml"
                      dvt="ĐVT: Chai"
                      price="165.000 ₫"
                      salePrice="212.000 ₫"
                      />
                    <Product
                    src="https://cdn-crownx.winmart.vn/images/prod/162427566920310011241-CHA-Loc-6-chai-nuoc-ngot-Pepsi-chai-330ml.jpg"
                    alt="Lỗi ảnh"
                    title="Nước giải khát có gas Pepsico chai 1.5 lít"
                    dvt="ĐVT: Chai"
                    salePrice="19.500 ₫"
                    price="15.200 ₫" />
                    <Product
                     src="https://cdn-crownx.winmart.vn/images/prod/162427166883410005841-G1-Phu-mai-lot-Hamburger-Zott-gui-200g.jpg"
                     alt="Lỗi ảnh"
                     title="Phô mai lát Hamburger Zott gói 200g"
                     dvt="ĐVT: Gói"
                     salePrice="55.500 ₫"
                     price="43.400 ₫" />
                    <Product
                     src="https://cdn-crownx.winmart.vn/images/prod/162427166719810005843-G1-Phu-mai-lot-Toast-Zott-gui-200g.jpg"
                     alt="Lỗi ảnh"
                     title="Phô mai lát Toast Zott gói 200g"
                     dvt="ĐVT: Gói"
                     salePrice="55.500 ₫"
                     price="43.400 ₫" />
                    <Product
                     src="https://cdn-crownx.winmart.vn/images/prod/162427166825810005842-G1-Phu-mai-lot-Sandwich-Zott-gui-200g.jpg"
                     alt="Lỗi ảnh"
                     title="Phô mai lát Sandwich Zott gói 200g"
                     dvt="
                     ĐVT: Gói"
                     salePrice="55.500 ₫"
                     price="43.400 ₫"/>
                    <Product 
                     src="https://cdn-crownx.winmart.vn/images/prod/s%E1%BB%AFa%20t%C6%B0%C6%A1i%20ti%E1%BB%87t%20tr%C3%B9ng%20promess%20vitamin%20h%E1%BB%99p%201l%20s%E1%BB%AFa%20t%C6%B0%C6%A1i%20ti%E1%BB%87t%20tr%C3%B9ng%20promess%20vitamin%20h%E1%BB%99p%201l_3948ec47-1f98-4ea8-9a92-0e3b4784ab7f.jpg"
                     alt="Lỗi ảnh"
                     title="Sữa tươi tiệt trùng PROMESS VITAMIN hộp 1L"                   
                     dvt="ĐVT: Hộp"
                     salePrice="45.200 ₫"
                     price="35.400 ₫"/>
                    <Product 
                      src="https://cdn-crownx.winmart.vn/images/prod/x%C3%BAc%20x%C3%ADch%20roma%20%C4%91%E1%BB%A9c%20vi%E1%BB%87t%20g%C3%B3i%20500g_1d9f575b-12a9-4655-b608-7b0d2419520a.jpg"
                      alt="Lỗi ảnh"
                      title="Xúc xích Roma Đức Việt gói 500g"
                      dvt="ĐVT: Gói"
                      salePrice="60.300 ₫"
                      price="47.400 ₫"/>
                    <Product 
                      src="https://cdn-crownx.winmart.vn/images/prod/17506565095454.jpg"
                      alt="Lỗi ảnh"
                      title="Dầu ăn dinh dưỡng cho bé Kiddy 250ml"
                      dvt="ĐVT: Chai"
                      salePrice="52.000 ₫"
                      price="41.000 ₫"/>
                    <Product 
                      src="https://cdn-crownx.winmart.vn/images/prod/162427580233210180447-G8-Mo-soi%C2%A0trang%C2%A0lon-Ottogi-gui-500g.jpg"
                      alt="Lỗi ảnh"
                      title="https://cdn-crownx.winmart.vn/images/prod/162427580233210180447-G8-Mo-soi%C2%A0trang%C2%A0lon-Ottogi-gui-500g.jpg"
                      dvt="ĐVT: Gói 8"
                      salePrice="89.400 ₫"
                      price="71.000 ₫"/>
                </div>
            </div>
        </div>
    );
}

export default Category;
