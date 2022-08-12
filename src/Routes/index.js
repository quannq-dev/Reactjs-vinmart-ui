import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import { HeaderOnly } from '~/Components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category', component: Category, layout: HeaderOnly },
    { path: '/product', component: Product },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
