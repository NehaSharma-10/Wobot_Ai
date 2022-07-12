import React from "react";
import logo from "./images/logo.jpeg";
import "./App.css";
function App() {
  return (
    <div className="main-container">
      <div className="logo-div">
        <img className="img" src={logo} alt="jh" />
      </div>

      <div className="content-div">
        <div className="hr-div">
          <hr className="hrStyle1 " />
          <hr className="hrStyle2" />
          <hr className="hrStyle1" />
        </div>

        <div className=" form-div">
          <h3 className="heading1">It's a delight to have you</h3>
          <h3 className="heading1">onboard</h3>
          <p className="para">Help us know you better.</p>
          <p className="para">
            (This is how we optimize Wobot as per your business needs)
          </p>
          <br />

          <label className="label" htmlFor="company-name">
            Company name
          </label>

          <input className="input" type="text" placeholder="e.g. Example Inc" />
          <br />
          <label className="label" htmlFor="industry">
            Industry
          </label>

          <select className="input" name="industry" id="">
            <option value="select1">Select</option>
            <option value="select2"> option 1</option>
          </select>
          <br />

          <label className="label" htmlFor="company-size">
            Company size
          </label>

          <div className="button-div">
            <button className="btns">1-20</button>
            <button className="btns">21-50</button>
            <button className="btns">51-200</button>
            <button className="btns">201-500</button>
            <button className="btns">500+</button>
          </div>
          <br />

          <button className="start-button"> Get Started</button>
        </div>
      </div>

      <div className="footer">
        <a href="#">Terms of use</a> | <a href="#"> Privacy Policy</a>
      </div>

      <div>
        <hr className="left-line" />
        <hr className="right-line" />
      </div>
    </div>
  );
}

export default App;
