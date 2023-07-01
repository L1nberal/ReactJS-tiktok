import Home from '../pages/Home';
import Folowing from '../pages/Following';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../components/Layouts';
import Search from '../pages/Search';

// public routes
const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Folowing },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
];
// private routes
const privateRoutes = [];

export { publishRoutes, privateRoutes };
