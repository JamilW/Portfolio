import React from "react";
import "./about.css";
import jw from "../../images/rsz_1jw.jpg";

function About() {

  return (
      <div className="container aheight">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            {/* <div class="card" style="width: 18rem;">
              <Link />
                <img src={jw} class="card-img-top" alt="Jamil Weeks" style={{fontSize:"12px", backgroundColor: "#3b3a30", color:"white"}}>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div> */}
          
            <div className="card" style={{fontSize:"12px", backgroundColor: "#3b3a30", color:"white"}}>
              <div className="img-container" >
                <img alt="jw" className="card-img-top-fluid" src={jw} style={{objectFit: "cover"}}></img> 
              </div>
              <div className="card-footer" style={{color: "#ffef96", background: "#3b3a30", paddingTop: "30px", textAlign: "center", height: "77px"}}>
              <b><p><em>Click Contact above to connect.</em></p></b>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8" id="aboutMe">
            <p style={{fontSize:"14px", color: "#ffef96", background: "black", marginLeft: "100px"}}>
            <b><em>
            Web Developer with a passion for using my natural ability for creativity alongside my technical expertise
            in HTML, CSS, and Javascript to work in a team friendly environment. Honing my research skills from my 
            English degree at the University of North Carolina at Chapel Hill, I successfully use wireframes, such as 
            Bootstrap and jQuery, to create innovative websites. Over 10 years expertise in working in teams with peers 
            in an office environment, best demonstrated by helping my team become the number one team in the nation in 
            sales through developing weekly competitive projects for my team to attain monthly goals.</em></b>
              </p>
              <p style={{fontSize:"14px", color: "#ffef96", background: "black", marginLeft: "100px"}}>
              <b>Education:<br/><br/>
              Full stack web development from UNC at Chapel Hill, NC<br/>
              <em>2018-2019</em><br/><br/>
              B.A. English, UNC-Chapel Hill, Chapel Hill NC<br/>
              <em>1998-2002</em><br/><br/>
              <em>Skills:<br/><br/>
              Express, Security and Sessions storage, User Authentication, MERN-Stack MongoDB, Express.js,
              React.js, Node.js<br/><br/>
              MySQL, ORM, Sequelize, firebase, MongoDB.<br/><br/>
              Heroku & Git<br/><br/>
              HTML5/CSS, Javascript/Jquery, Responsive design, Bootstrap, Handlebars, Firebase,
              cookies/localstorage, React.js, Json, Cloud database usage.<br/>
              </em>
              </b>           
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;