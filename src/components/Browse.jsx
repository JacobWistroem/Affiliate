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
        this.state = {
            Providers: [],
        }
    }
        

    componentWillMount() {
        this.loadDatabase();
    }

    loadDatabase = () => {
        fetch('http://localhost:3001/api/read', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-Request-App': 'Affiliate',
            }
        }).then(function (response) {
            return response.json();
        },error => {
            console.log(error);
            console.log("didnt work, step1")
        }).then((response) => {
            //Delivers the response to the state as a array
            this.setState({ Providers: response });
        },error => {
            console.log(error);
            console.log("didnt work, step2")
        });
    }

    render() {
        console.log(this.state.Providers)
        var Providerlist;
        if(this.state.Providers != undefined){
        Providerlist = this.state.Providers.map(Li => {
            const element = <li key={Li.Id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={card4} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{Li.Name}</h5>
                                <p className="card-text">{Li.Description}</p>
                                <p className="card-text"><small className="text-muted">Last updated {Li.Date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </li>
            //Returns the list components with information from state
            return element
            })    
        } else {
            Providerlist = <li><div class="alert alert-danger" role="alert">
            An error has occured
          </div></li>;
        }                  

        return (
    <div>
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-light">
                <div className="container">
                    <Link to="http://localhost:3000/" className="navbar-brand" href="#">
                        <i className="fas fa-search-dollar" width="100" height="100"></i>
                    SEO Tool Selector
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="http://localhost:3000/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="http://localhost:3000/browse" className="nav-link" href="#">Browse</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="http://localhost:3000/test" className="nav-link" href="#">SEO Test</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="http://localhost:3000/aboutus" className="nav-link" href="#">About us</Link>
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
                <div className="filterbox card w-25">
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
            
                <div className="flexbox-container-items align-items-start">
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={card1} className="card-img" alt="..."/>
                                </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 className="card-title">*SEOCOMPANY*</h5>
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
                                        <h5 className="card-title">*SEOCOMPANY*</h5>
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
                                        <h5 className="card-title">*SEOCOMPANY*</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={card4} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">*SEOCOMPANY*</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {Providerlist}
                </div>
            </div>
        </div>
        <footer className="container" id="footerline">
            <hr className="hrline" id="endingline"/>
            <p className="float-right"><a href="http://localhost:3000/browse">Back to top</a></p>
            <p>&copy; 2019 CompanyName, Inc. &middot; <a href="http://localhost:3000/Privacy">Privacy</a> &middot; <a href="http://localhost:3000/Terms">Terms</a></p>
        </footer>
    </div>
        );
    }
}
export default Browse