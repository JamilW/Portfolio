import React from "react";
import "./portfolio.css";
import dadirri from "../../images/rsz_1dadirri.png";
import buknuk from "../../images/rsz_buknuk.png";
import bamazon from "../../images/bamazon.png";
import woofer from "../../images/woofer1.png";
import liri from "../../images/rsz_liri-node-app.png";
import GifTastic from "../../images/rsz_giftastic.jpg";
import crystalscollector from "../../images/rsz_crystalscollector.png";
import triviagame from "../../images/rsz_triviagame.png"
import TrainScheduler from "../../images/TrainScheduler.png"

function Portfolio() {

    return (
        <div className="container">
            <div class="row pagecolor">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4 class="page-header" style={{marginTop: "10px", paddingLeft: "70px", paddingRight: "60px"}}>Portfolio<hr/></h4>
                    <div class="row" id="apps">
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={dadirri} class="card-img-top-fluid" alt="dadirri" style={{paddingBottom: "25px"}}></img>
                                <div class="card-body">
                                    <h3 class="card-title">Dadirri</h3>
                                        {/* <Button color="primary" onClick={this.toggleModal.bind(this)}>Dadirri</Button>
                                       
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Modal Title</ModalHeader>
          <ModalBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem fugiat perspiciatis sint, nostrum labore nobis quidem sed impedit quae quisquam corrupti, libero commodi a quod pariatur quo qui. Id?</ModalBody>
          <ModalFooter>
            <Button color="primary">Sign Up</Button>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
                                    {/* <Modal>
                                    <div class="modal" id="dadirri" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Dadirri</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                </div>
                                                <div class="modal-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item">Axios</li>
                                                        <li class="list-group-item">Barchart.JS</li>
                                                        <li class="list-group-item">Bcrypt.JS</li>
                                                        <li class="list-group-item">Bootstrap</li>
                                                        <li class="list-group-item">CSS</li>
                                                        <li class="list-group-item">Express</li>
                                                        <li class="list-group-item">HTML</li>
                                                        <li class="list-group-item">Javascript</li>
                                                        <li class="list-group-item">JQuery</li>
                                                        <li class="list-group-item">Moment.JS</li>
                                                        <li class="list-group-item">MongoDB</li>
                                                        <li class="list-group-item">Mongoose</li>
                                                        <li class="list-group-item">Node.JS</li>
                                                        <li class="list-group-item">Passport</li>
                                                        <li class="list-group-item">Passport-Local</li>
                                                        <li class="list-group-item">React.JS</li>
                                                    </ul>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Modal>     */}
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://dadirri.herokuapp.com/" className="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/jlevine84/Dadirri" className="card-link">Github Repo</a>
                                </div>
                            </div>
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={bamazon} class="card-img-top-fluid" alt="bamazon" style={{paddingBottom: "25px"}}></img>      
                                <div class="card-body">
                                    <h3 class="card-title">BAmazon</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hephophome.files.wordpress.com/2019/06/ordersummary.png">Screenshot</a><hr/>
                                    <a href="https://github.com/JamilW/bamazon" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={liri} class="card-img-top-fluid" alt="liri" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Liri Node App</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hephophome.files.wordpress.com/2019/06/ordersummary.png">Screenshot</a><hr/>
                                    <a href="https://github.com/JamilW/liri-node-app" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={crystalscollector} class="card-img-top-fluid" alt="crystals=collector" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Crystals Collector</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/unit-4-game/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/JamilW/unit-4-game" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>   
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={buknuk} class="card-img-top-fluid" alt="buknuk" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">BukNuk</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hankatola.github.io/BukNuk/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/hankatola/BukNuk" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={GifTastic} class="card-img-top-fluid" alt="giftastic" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">GifTastic</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/GifTastic/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/JamilW/GifTastic" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={triviagame} class="card-img-top-fluid" alt="triviagame" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Hip Hop Trivia</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/Triviagame/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/JamilW/Triviagame" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={woofer} class="card-img-top-fluid" alt="woofer" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Woofer</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hankatola.github.io/BukNuk/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/hankatola/BukNuk" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "19rem", boxShadow: "10px 10px 2px black", transform: "translateY(4px)"}}>
                            <img src={TrainScheduler} class="card-img-top-fluid" alt="trainscheduler" style={{paddingBottom: "25px"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Train Scheduler</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/TrainScheduler/" class="card-link">Deployment</a><hr/>
                                    <a href="https://github.com/JamilW/TrainScheduler" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Portfolio;