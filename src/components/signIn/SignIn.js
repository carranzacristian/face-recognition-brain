import React from 'react';
import BackdropFilter from "react-backdrop-filter";

const SignIn = ({ onRouteChange }) => {
	return (
    <article className="br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw5 center">
      <div className="container" style={{zIndex:'3'}}>
        <BackdropFilter
          className="bluredForm"
          filter={"blur(8px)"}
          canvasFallback={true}
          html2canvasOpts={{
              allowTaint: true
          }}
          onDraw={() => {
              console.log("Rendered !");
          }}>
          <main className="pa4 black-80" style={{zIndex:'3'}}>
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={() => onRouteChange('home') }
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange('register') }
                  href="#0" className="pointer f6 link dim black db">Register</p>
              </div>
            </div>
          </main>
        </BackdropFilter>
      </div>
    </article>
  );
}

export default SignIn;