import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactUsPage from '../components/ContactUsPage';
import NotFound from '../components/NotFound';
import ProductPage from '../components/ProductPage';
import TeamPage from '../components/TeamPage';
import BlogPage from '../components/BlogPage';
import SiteMapPage from '../components/SiteMapPage';

export const AppRouter = () => (
    <div>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path = "/Carr-Merchants/public" component={HomePage} exact = {true}/>
                <Route path = "/Carr-Merchants/public/products" component={ProductPage} />
                <Route path = "/Carr-Merchants/public/contact_us"  component={ContactUsPage} />
                <Route path = "/Carr-Merchants/public/team" component={TeamPage} />
                <Route path = "/Carr-Merchants/public/blog" component = {BlogPage}/>
                <Route path = "/Carr-Merchants/public/sitemap" component = {SiteMapPage}/>
                <Route component = {NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
);

