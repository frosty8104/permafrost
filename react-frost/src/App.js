<<<<<<< HEAD
import React, { Component } from "react";
import header from "./Header.js";
import footer from "./Footer.js";
import skills from "./Skills.js";
import samples from "./Samples.js";
import reviews from "./Reviews.js";
import styles from "./index.css";

class App extends Component {
    render() {
        return (
            <div className="App"></div>
        )
    }
};

export default App;
=======
import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class App extends { Component } {

}
render() {
    return(
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default App;
>>>>>>> main
