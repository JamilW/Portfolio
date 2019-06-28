import React, { Component } from "react"
import "./portfolio.css";
import dadirri from "../../images/rsz_1dadirri.png";
import buknuk from "../../images/rsz_buknuk.png";
import bamazon from "../../images/bamazon.png";
import woofer from "../../images/woofer1.png";
import liri from "../../images/rsz_liri-node-app.png";
import GifTastic from "../../images/rsz_giftastic.jpg";
import crystalscollector from "../../images/rsz_crystalscollector.png";
import triviagame from "../../images/rsz_triviagame.png";
import TrainScheduler from "../../images/TrainScheduler.png";
import Modal from "../../components/Modal/Modal";

class Portfolio extends Component   {
    state = {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false
      }
      
      showModal1 = () => {
        this.setState({
          ...this.state,
        show1: !this.state.show1
        })
      }

      showModal2 = () => {
        this.setState({
          ...this.state,
        show2: !this.state.show2
        })
      }

      showModal3 = () => {
        this.setState({
          ...this.state,
        show3: !this.state.show3
        })
      }

      showModal4 = () => {
        this.setState({
          ...this.state,
        show4: !this.state.show4
        })
      }

      showModal5 = () => {
        this.setState({
          ...this.state,
        show5: !this.state.show5
        })
      }

      showModal6 = () => {
        this.setState({
          ...this.state,
        show6: !this.state.show6
        })
      }

      showModal7 = () => {
        this.setState({
          ...this.state,
        show7: !this.state.show7
        })
      }
      
      showModal8 = () => {
        this.setState({
          ...this.state,
        show8: !this.state.show8
        })
      }

      showModal9 = () => {
        this.setState({
          ...this.state,
        show9: !this.state.show9
        })
      }

    render() {
        return (
            <div className="container">
                <div className="row pagecolor">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12-fluid">
                    <h4 className="page-header" style={{marginTop: "10px", paddingLeft: "70px", paddingRight: "60px"}}>Portfolio<hr/></h4>
                        <div className="row" id="apps">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={dadirri} className="card-img-top-fluid" alt="dadirri" style={{paddingBottom: "25px"}}></img>
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal1}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Dadirri" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal1}
                                            show={this.state.show1}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>APIs, Axios, Bootstrap, CSS, Express, HTML, Javascript, JQuery, Moment, MongoDB, Mongoose, Node.Js, Passport, & React.Js</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://dadirri.herokuapp.com/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/jlevine84/Dadirri" className="card-link">Github Repo</a>
                                    </div>
                                </div>
                            </div><hr/>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2-fluid">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={bamazon} className="card-img-top-fluid" alt="bamazon" style={{paddingBottom: "25px"}}></img>      
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal2}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Bamazon" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal2}
                                            show={this.state.show2}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>Javascript, JQuery, MySQL, & Node.Js</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://hephophome.files.wordpress.com/2019/06/ordersummary.png">Screenshot</a><hr/>
                                        <a href="https://github.com/JamilW/bamazon" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2-fluid">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={liri} className="card-img-top-fluid" alt="liri" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal3}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Liri Node App" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal3}
                                            show={this.state.show3}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>APIs, Axios, Dotenv, Javasript, JQuery, Moment.Js, & Node.Js</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://hephophome.files.wordpress.com/2019/06/ordersummary.png">Screenshot</a><hr/>
                                        <a href="https://github.com/JamilW/liri-node-app" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                        </div>
                        <div className="row" id="apps">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2-fluid">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={crystalscollector} className="card-img-top-fluid" alt="crystals=collector" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal4}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Crystals Game" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal4}
                                            show={this.state.show4}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>Bootstrap, CSS, Google Fonts, HTML, Javascript, & JQuery</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://jamilw.github.io/unit-4-game/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/JamilW/unit-4-game" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>   
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2-fluid">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={buknuk} className="card-img-top-fluid" alt="buknuk" style={{paddingBottom: "25px"}}></img>   
                                    <div className= "card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal5}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="BukNuk" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal5}
                                            show={this.state.show5}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>APIs, Bootstrap, CSS, Firebase, Google Fonts, HTML, Javascript, & JQuery</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://hankatola.github.io/BukNuk/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/hankatola/BukNuk" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={GifTastic} className="card-img-top-fluid" alt="giftastic" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal6}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="GifTastic" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal6}
                                            show={this.state.show6}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>AJAX, APIs, Bootstrap, CSS, Google Fonts, HTML, Javascript, & JQuery</p>
                                                <hr/>  
                                            </Modal>  
                                        </div> 
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://jamilw.github.io/GifTastic/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/JamilW/GifTastic" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                        </div>
                        <div className="row" id="apps">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={triviagame} className="card-img-top-fluid" alt="triviagame" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                            <input type="button"
                                            onClick={this.showModal7}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Hip Hop Trivia" />   

                                            <Modal 
                                            onClose={this.showModal7}
                                            show={this.state.show7}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>Bootstrap, CSS, Google Fonts, HTML, Javascript, JQuery, & Timers</p>
                                                <hr/>      
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://jamilw.github.io/Triviagame/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/JamilW/Triviagame" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={woofer} className="card-img-top-fluid" alt="woofer" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                            <input type="button" 
                                            id="wooferBtn"
                                            onClick={this.showModal8}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Woofer" />   

                                            <Modal 
                                            onClose={this.showModal8}
                                            show={this.state.show8}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>APIs, CSS, Cypress, Dotenv, Express, Google Fonts, Handlebars, HTML, Javascript, JQuery, Morgan, Multer, Passport, & Sequelize</p>
                                                <hr/>
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://hankatola.github.io/BukNuk/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/hankatola/BukNuk" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                                <img src={TrainScheduler} className="card-img-top-fluid" alt="trainscheduler" style={{paddingBottom: "25px"}}></img>   
                                    <div className="card-body">
                                        <div>
                                        <input type="button"
                                            onClick={this.showModal9}
                                            style={{color: "#ffef96", background: "black", fontSize: "24px", width: "100%", height: "50px", border: "#ffef96 solid 1px", fontFamily: "'Cinzel', serif"}}
                                            value="Train Scheduler" />   
                                                        
                                            <Modal 
                                            onClose={this.showModal9}
                                            show={this.state.show9}>
                                                <h3>Skills Used</h3>
                                                <hr/>
                                                <p>Bootstrap, CSS, Firebase, Google Fonts, HTML, Javascript, & JQuery</p>
                                                <hr/>  
                                            </Modal>  
                                        </div>
                                    </div>
                                    <div className="card-body" style={{textDecoration: "underline"}}>
                                        <a href="https://jamilw.github.io/TrainScheduler/" className="card-link">Deployment</a><hr/>
                                        <a href="https://github.com/JamilW/TrainScheduler" className="card-link">Github Repo</a>
                                    </div>
                                </div>    
                            </div><hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Portfolio;