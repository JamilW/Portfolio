import React from "react";
import "./portfolio.css";
import dadirri from "../../images/rsz_1dadirri.png";
import buknuk from "../../images/rsz_buknuk.png";
import bamazon from "../../images/bamazon.png";
import woofer from "../../images/woofer1.png";
import liri from "../../images/rsz_liri-node-app.png";
import GifTastic from "../../images/rsz_giftastic.jpg";
import crystalscollector from "../../images/rsz_crystalscollector.png";

function Portfolio() {
    return (
        <div className="container">
            <div className="row pagecolor">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4 className="page-header">Portfolio<hr/></h4>
                    <div className="row">
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "18rem"}}>
                            <img src={dadirri} class="card-img-top-fluid" alt="dadirri"></img>
                                <div class="card-body">
                                    <h3 class="card-title">Dadirri</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://dadirri.herokuapp.com/" class="card-link">Deployment</a>
                                    <a href="https://github.com/jlevine84/Dadirri" class="card-link">Github Repo</a>
                                </div>
                            </div>
                        </div><hr/>    
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "16rem"}}>
                            <img src={buknuk} class="card-img-top-fluid" alt="buknuk" style={{boxShadow: "10px 10px 5px rgba(yellow)"}}></img>   
                                <div class="card-body">
                                    <h3 class="card-title">BukNuk</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hankatola.github.io/BukNuk/" class="card-link">Deployment</a>
                                    <a href="https://github.com/hankatola/BukNuk" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "16rem"}}>
                            <img src={bamazon} class="card-img-top-fluid" alt="bamazon"></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Liri Node App</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://github.com/JamilW/bamazon" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "16rem"}}>
                            <img src={woofer} class="card-img-top-fluid" alt="woofer"></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Woofer</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://hankatola.github.io/BukNuk/" class="card-link">Deployment</a>
                                    <a href="https://github.com/hankatola/BukNuk" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "18rem"}}>
                            <img src={liri} class="card-img-top-fluid" alt="liri"></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Liri Node App</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://github.com/JamilW/liri-node-app" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "18rem"}}>
                            <img src={GifTastic} class="card-img-top-fluid" alt="giftastic"></img>   
                                <div class="card-body">
                                    <h3 class="card-title">GifTastic</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/GifTastic/" class="card-link">Deployment</a>
                                    <a href="https://github.com/JamilW/GifTastic" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div><hr/>
                        <div classname="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div class="card bg-dark mb-3" style={{width: "18rem"}}>
                            <img src={crystalscollector} class="card-img-top-fluid" alt="crystals=collector"></img>   
                                <div class="card-body">
                                    <h3 class="card-title">Crystals Collector</h3>
                                </div>
                                <div class="card-body" style={{textDecoration: "underline"}}>
                                    <a href="https://jamilw.github.io/unit-4-game/" class="card-link">Deployment</a>
                                    <a href="https://github.com/JamilW/unit-4-game" class="card-link">Github Repo</a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Portfolio;