import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/Test.css';
import card1 from '../assets/Cards/example1.jpg';
import card2 from '../assets/Cards/example2.jpg';
import card3 from '../assets/Cards/example3.jpg';
import card4 from '../assets/Cards/example4.jpg';



class Test extends React.Component {
    constructor() {
        super()
    }
        

    componentWillMount() {
            
    }

    functionName = () => {

    }

    render() {
        return (
            <div>
            <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-light ">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">
                        <i className="fas fa-search-dollar" width="100" height="100"></i>
                    SEO Tool Selector
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/browse" className="nav-link" href="#">Browse</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/test" className="nav-link" href="#">SEO Test</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link" href="#">About us</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            <div className="container headline-pos">
                <h3>Test</h3>
                <hr className="hrline" id="headlineline"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <footer className="container">
                <hr className="container hrline" id="footerline"/>
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; 2019 CompanyName, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </div>
        );
    }
}
export default Test