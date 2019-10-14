import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/Browse.css';
import card1 from '../assets/Cards/example1.jpg';
import card2 from '../assets/Cards/example2.jpg';
import card3 from '../assets/Cards/example3.jpg';
import card4 from '../assets/Cards/example4.jpg';



class Browse extends React.Component {
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
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
                        <li className="nav-item active">
                            <Link to="/browse" className="nav-link" href="#">Browse</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/test" className="nav-link" href="#">SEO Test</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/abouts" className="nav-link" href="#">About us</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        <div className="container headline-pos">
            <h3>Browse - SEO Providers</h3>
            <hr id="headlineline"/>
            <div className="flexbox-container">
                <div className="filterbox">
                    <div>
                        <div className="card filtermenu">
                            <h5>Filter:</h5>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                            <div><input type="checkbox"/>Krav1</div>
                        </div>
                    </div>
                </div>
            
                <div className="flexbox-container-items align-items-start">
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={card1} className="card-img" alt="..."/>
                                </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 className="card-title">Does small companies need SEO</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={card2} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">What are the benefits of SEO</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={card3} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Why SEO is important</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div classNameName="card mb-3">
                            <div classNameName="row no-gutters">
                                <div classNameName="col-md-4">
                                    <img src={card4} classNameName="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">What is SEO</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 15 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="container" id="endingline"/>
        <footer className="container" id="footerline">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2019 CompanyName, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
    </div>
        );
    }
}
export default Browse