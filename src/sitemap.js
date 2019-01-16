import React from 'react';
import App from './components/App';
import { ShoppingList } from './components/ShoppingList';
import Home from './components/Home';

const PAGES = {
    '/': Home,
    '/shopping': ShoppingList
}

export default class Sitemap extends React.Component {
    render() {
        const Page = PAGES[window.location.pathname] || Home;
        return (
            <App>
                <Page />
            </App>
        )
    }
}