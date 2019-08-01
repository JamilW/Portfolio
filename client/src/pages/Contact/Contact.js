import React, { Component } from "react";
import "./contact.css";

function Contact() {  
    return(
      <div className="jumbotron">
        <h4 className="page-header" style={{fontFamily: "'Cinzel', serif"}}><b>Contact Information</b><hr/></h4>
          <ul class="list-group">
            <li class="list-group-item"><b>E-Mail:</b><br/><br/> jamilw5@gmail.com</li><br/>
            <li class="list-group-item"><b>Github:</b><br/><br/> <a href="https://github.com/JamilW" target="blank" style={{textDecoration: "underline"}}>Link</a></li><br/>
            <li class="list-group-item"><b>LinkedIn:</b><br/><br/> <a href="https://www.linkedin.com/in/jamil-weeks-72703315a/" target="blank" style={{textDecoration: "underline"}}>Link</a></li><br/>
            <li class="list-group-item"><b>Phone Number:</b><br/><br/> (910) 922-3044</li><br/>
            <li class="list-group-item"><b>Resume:</b><br/><br/> <a href="https://hephophome.files.wordpress.com/2019/03/professional-resume.docx" target="blank" style={{textDecoration: "underline"}}>Link</a></li>
          </ul>	 
      </div>  
    )
}

export default Contact;