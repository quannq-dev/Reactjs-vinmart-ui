import classNames from 'classnames/bind';
import ProductItem from '~/pages/Home/ProductItem';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper-home')}>
                <div className={cx('logo')}>
                    <img
                        src="https://cdn-crownx.winmart.vn/images/prod/b%C3%A1nh%20k%E1%BA%B9o_1180x400-38_0b1a903b-11dd-4545-b60f-7a6e886a12d2.jpg"
                        alt="Lỗi Ảnh"
                    />
                </div>
                <h3 className={cx('title')}>Sản Phẩm Khuyến Mãi</h3>
                <div className={cx('row')}>
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428240833410056267-HOP-Khan-giay-1-lop-Lency-33cm-gui-1kg.jpg"
                        alt="Lỗi ảnh"
                        title="Sữa tươi nguyên kem tiệt trùng Lemontree Dairy hộ"
                        dvt="DVT: Hộp"
                        price="19.900 ₫"
                        salePrice="39.500 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/26849684291614.jpg"
                        alt="Lỗi ảnh"
                        title="Dầu gội bạc hà Head & Shoulders 850ml"
                        dvt="ĐVT: Chai"
                        price="165.000 ₫"
                        salePrice="212.000 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427566920310011241-CHA-Loc-6-chai-nuoc-ngot-Pepsi-chai-330ml.jpg"
                        alt="Lỗi ảnh"
                        title="Nước giải khát có gas Pepsico chai 1.5 lít"
                        dvt="ĐVT: Chai"
                        salePrice="19.500 ₫"
                        price="15.200 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427166883410005841-G1-Phu-mai-lot-Hamburger-Zott-gui-200g.jpg"
                        alt="Lỗi ảnh"
                        title="Phô mai lát Hamburger Zott gói 200g"
                        dvt="ĐVT: Gói"
                        salePrice="55.500 ₫"
                        price="43.400 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427166719810005843-G1-Phu-mai-lot-Toast-Zott-gui-200g.jpg"
                        alt="Lỗi ảnh"
                        title="Phô mai lát Toast Zott gói 200g"
                        dvt="ĐVT: Gói"
                        salePrice="55.500 ₫"
                        price="43.400 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427166825810005842-G1-Phu-mai-lot-Sandwich-Zott-gui-200g.jpg"
                        alt="Lỗi ảnh"
                        title="Phô mai lát Sandwich Zott gói 200g"
                        dvt="
                     ĐVT: Gói"
                        salePrice="55.500 ₫"
                        price="43.400 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/s%E1%BB%AFa%20t%C6%B0%C6%A1i%20ti%E1%BB%87t%20tr%C3%B9ng%20promess%20vitamin%20h%E1%BB%99p%201l%20s%E1%BB%AFa%20t%C6%B0%C6%A1i%20ti%E1%BB%87t%20tr%C3%B9ng%20promess%20vitamin%20h%E1%BB%99p%201l_3948ec47-1f98-4ea8-9a92-0e3b4784ab7f.jpg"
                        alt="Lỗi ảnh"
                        title="Sữa tươi tiệt trùng PROMESS VITAMIN hộp 1L"
                        dvt="ĐVT: Hộp"
                        salePrice="45.200 ₫"
                        price="35.400 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/x%C3%BAc%20x%C3%ADch%20roma%20%C4%91%E1%BB%A9c%20vi%E1%BB%87t%20g%C3%B3i%20500g_1d9f575b-12a9-4655-b608-7b0d2419520a.jpg"
                        alt="Lỗi ảnh"
                        title="Xúc xích Roma Đức Việt gói 500g"
                        dvt="ĐVT: Gói"
                        salePrice="60.300 ₫"
                        price="47.400 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/17506565095454.jpg"
                        alt="Lỗi ảnh"
                        title="Dầu ăn dinh dưỡng cho bé Kiddy 250ml"
                        dvt="ĐVT: Chai"
                        salePrice="52.000 ₫"
                        price="41.000 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427580233210180447-G8-Mo-soi%C2%A0trang%C2%A0lon-Ottogi-gui-500g.jpg"
                        alt="Lỗi ảnh"
                        title="https://cdn-crownx.winmart.vn/images/prod/162427580233210180447-G8-Mo-soi%C2%A0trang%C2%A0lon-Ottogi-gui-500g.jpg"
                        dvt="ĐVT: Gói 8"
                        salePrice="89.400 ₫"
                        price="71.000 ₫"
                    />
                </div>
                <h3 className={cx('title', 'title-rcq')}>Sản phẩm mới nhất</h3>
                <div className={cx('row')}>
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427182365910055070-kg-too-queen-pg-size-110(vmnk)_5ae3fcb5-57b1-4a5e-8764-09f0fb10d5bc.jpg"
                        alt="Lỗi ảnh"
                        title="Táo Queen New Zealand PG size 90-120"
                        dvt="ĐVT: 1 KG"
                        salePrice="121.900 ₫"
                        price="99.900 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162985899484210628789.jpg"
                        alt="Lỗi ảnh"
                        title="Cam ruột vàng úc"
                        dvt="ĐVT: 0.6KG"
                        salePrice="63.940 ₫"
                        price="53.940 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428311346610235280-HOP-Chai-tay-toilet-xanh-huong-ng%C3%A0n-hoa-Klife-180g.jpg"
                        alt="Lỗi ảnh"
                        title="Kiwi xanh Newzealand (4trái/hộp)"
                        dvt="ĐVT: Hộp"
                        salePrice="88.900 ₫"
                        price="84.900 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427548299310053988-KG-Qua-quat.jpg"
                        alt="Lỗi ảnh"
                        title="Quả bầu"
                        dvt="ĐVT: 0.7 KG"
                        salePrice="17.630 ₫"
                        price="14.630 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/d%C6%B0a%20h%E1%BA%A5u%20s%C3%A0i%20g%C3%B2n_332f29e4-ad61-4aa4-8a58-0845d8b8adf6.jpg"
                        alt="Lỗi ảnh"
                        title="Dưa hấu Sài Gòn"
                        dvt="ĐVT: 1.8 KG"
                        salePrice="59.820 ₫"
                        price="53.820 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162427611495110053877-KG-H%C3%A0u-sua-Nhat-Minh-tyi-280g.jpg"
                        alt="Lỗi ảnh"
                        title="Nha đam Đà Lạt"
                        dvt="ĐVT: 0.3 KG"
                        salePrice="9.350 ₫"
                        price="7.350 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428165402310053991-G1-Nam-mo-Yoshimoto-nou-khay-150g.jpg"
                        alt="Lỗi ảnh"
                        title="Nấm kim châm 150g"
                        dvt="ĐVT: Gói"
                        salePrice="17.900 ₫"
                        price="14.900 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428217332910054001-G1--De-pizza--Manna-280g.jpg"
                        alt="Lỗi ảnh"
                        title="Măng nứa tươi Kim Bôi túi 500g"
                        dvt="ĐVT: Gói"
                        salePrice="33.000 ₫"
                        price="29.000 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428216881110054007-G1-Pizza-Manna-thit-bu-sot-BBQ-200g.jpg"
                        alt="Lỗi ảnh"
                        title="Măng trúc quân thử Kim Bôi 300g"
                        dvt="ĐVT: Gói"
                        salePrice="55.000 ₫"
                        price="51.000 ₫"
                    />
                    <ProductItem
                        src="https://cdn-crownx.winmart.vn/images/prod/162428563546510054024-G1-Tat-cao-nam-Bizmen-BSC1605.jpg"
                        alt="Lỗi ảnh"
                        title="Nấm Bunapi Biovegi hộp 100g"
                        dvt="ĐVT: Gói"
                        salePrice="
                    33.500 ₫"
                        price="
                    28.500 ₫"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
