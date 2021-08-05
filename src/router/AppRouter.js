import React from 'react';
import { BrowserRouter, Route, Switch,HashRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactUsPage from '../components/ContactUsPage';
import NotFound from '../components/NotFound';
import ProductPage from '../components/ProductPage';
import TeamPage from '../components/TeamPage';
import BlogPage from '../components/BlogPage';
import SiteMapPage from '../components/SiteMapPage';
import FeedBack from '../components/sections/FeedBack';
import ProfilePage from '../components/ProfilePage';

export const AppRouter = () => (
    <div>   
            <div className = "CommonClass">
                <Header/>
                <Switch>
                    <Route path = "/" component={HomePage} exact = {true}/>
                    <Route path = "/products" component={ProductPage} />
                    <Route path = "/contact_us"  component={ContactUsPage} />
                    <Route path = "/team" component={TeamPage} />
                    <Route path = "/blog" component = {BlogPage}/>
                    <Route path = "/sitemap" component = {SiteMapPage}/>
                    <Route path = "/profile" component = {ProfilePage}/>
                    <Route component = {NotFound}/>
                </Switch>
            </div>
            <Footer/>
    </div>
);

