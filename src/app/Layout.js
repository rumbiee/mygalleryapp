import React, { Component } from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import Home from "../containers/home";
import GalleryPage from "../containers/gallery";
import Contact from "../containers/contact";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "homepage"
        };
    }

    handleOnClick = event => {
        this.setState({ currentPage: event.target.className.replace(/nav-link|active/ig, '').trim() });
    };

    render() {
        let content = <Home />;

        if (this.state.currentPage === "gallery") {
            content = <GalleryPage />;
        } else if (this.state.currentPage === "contact") {
            content = <Contact />;
        }

        return (
            <div>
                <Navigation linkClicked={this.handleOnClick} />
                {content}
                <Footer />
            </div>
        );
    }
}
