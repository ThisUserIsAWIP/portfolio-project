import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/navbar'
import Home from './views/home'
import Footer from './components/footer'
import InfoFooter from './components/infoFooter';
import Portfolio from './views/portfolio';
import Blog from './views/blog';
import Contact from './views/contact';
import About from './views/about';
// import AppContext from './components/AppContext'

const App = (props: AppProps) => {



	return (
		<>

			<BrowserRouter>
				<Navbar />
				<Switch>
				<div className="min-vh-100 container d-flex justify-content-center align-items-center" style={{
			backgroundImage: "url(" + "https://i.imgur.com/o83VNjS.gif" + ")",
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
			minWidth: '100%'
			
		}}>

        
					
					<Route exact path={'/'}>
						<Home />
					</Route>
					<Route exact path={'/portfolio'}>
						<Portfolio />
					</Route>
					<Route exact path={'/blog'}>
						<Blog />
					</Route>
					<Route exact path={'/contact'}>
						<Contact />
					</Route>
					<Route exact path={'/about'}>
						<About />
					</Route>
					</div>
				</Switch>
				<Footer />
				<InfoFooter />
			</BrowserRouter>

		</>
	);
};

interface AppProps { }


export default App;
