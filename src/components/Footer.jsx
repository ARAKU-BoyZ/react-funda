import React from "react"
import "../styles/Footer.css"

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer-text">
                <h3>{this.props.message}</h3> {/*Memanggil props di class function */}
            </footer>
        )
    }
}

export default Footer;