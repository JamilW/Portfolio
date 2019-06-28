import React from 'react';
import "./modal.css";

const modalStyle = {
    boxShadow: "10px 10px 2px black", 
    transform: "translateY(4px)",
    backgroundColor: "#ffef96",
    color: "black",
    fontFamily: "'Cinzel', serif",
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: "0 auto",
    padding: 30,
    position: "relative"
}

const footerStyle = {
    position: "absolute",
    justifyContent: "center",
    bottom: -25,
    left: 100,
    color: "#ffef96",
    fontFamily: "'Cinzel', serif"
}

export default class Modal extends React.Component  {
    onClose = (e) =>    {
        this.props.onClose && this.props.onClose(e);
    }
    render()    {
        if (!this.props.show)   {
            return null;
        }
        return (
            <div>  
                <div style={modalStyle}>
                    {this.props.children}
                        <div style={footerStyle}>
                            <div>
                                <button className="closeBtn" onClick={(e) => { this.onClose(e) }}>
                                    Close
                                </button>
                            </div>
                        </div>             
                </div>
            </div>
        )
    }
}

