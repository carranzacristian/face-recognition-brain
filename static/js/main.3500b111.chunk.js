(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{108:function(e,t,n){},387:function(e,t,n){},389:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var i=n(12),a=n.n(i),c=n(54),s=n.n(c),o=(n(108),n(98)),r=n(99),l=n(38),u=n(103),d=n(102),b=n(100),h=n.n(b),m=n(55),p=n.n(m),j=(n(387),n(3)),g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"white f3",children:"Cristian, your current rank is..."}),Object(j.jsx)("div",{className:"white f1",children:"#5"})]})},f=function(){return Object(j.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(j.jsx)("p",{style:{zIndex:"3"},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})})},x=n(101),v=n.n(x),y=(n(389),n.p+"static/media/brainLogo2.30c2c6b0.png"),O=function(){return Object(j.jsx)("div",{className:"ma4 mt0",children:Object(j.jsx)(v.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{position:"relative",zIndex:"3",height:150,width:150},children:Object(j.jsx)("div",{className:"Tilt-inner pa3",style:{width:"100%",height:"100%"},children:Object(j.jsx)("img",{alt:"logo",src:y})})})})},w=(n(390),function(e){var t=e.onInputChange,n=e.onBtnSubmit,i=e.keyPressed;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try."}),Object(j.jsx)("div",{className:"center",children:Object(j.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(j.jsx)("input",{className:"outl-n f4 pa2 ph w-70 center bn br--left br4",type:"text",placeholder:"Image URL",onChange:t,onKeyPress:i}),Object(j.jsx)("button",{className:"outl-n w-30 grow f4 link ph1 pv2 dib white\r bg-blue bn br--right br4",onClick:n,children:"Detect"})]})})]})}),C=(n(391),function(e){var t=e.imageUrl,n=e.box;return Object(j.jsx)("div",{className:"center ma",children:Object(j.jsxs)("div",{className:"absolute mt2 m2",style:{zIndex:"3",position:"relative"},children:[Object(j.jsx)("img",{id:"inputImage",alt:"",style:{width:"500px",height:"auto"},src:t}),Object(j.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),k=new p.a.App({apiKey:"13901b317f664b328f1d8d123271fd5b"}),N={particles:{number:{value:150,density:{enable:!0,value_area:800}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this))._isMounted=!1,e.updateDims=function(){var t=document.getElementById("inputImage");e.setState({imageWidth:Number(t.width),imageHeight:Number(t.height)},e.displayFaceBox(e.calculateFaceLocationUpdated()))},e.calculateFaceLocation=function(t){var n=null;e.setState({clarifaiFace:t.outputs[0].data.regions[0].region_info.bounding_box},(function(){n=this.state.clarifaiFace}));var i=e.state.imageWidth,a=e.state.imageHeight;return{leftCol:n.left_col*i,topRow:n.top_row*a,rightCol:i-n.right_col*i,bottomRow:a-n.bottom_row*a}},e.calculateFaceLocationUpdated=function(){var t=e.state.clarifaiFace,n=e.state.imageWidth,i=e.state.imageHeight;return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t},(function(){console.log(t)}))},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onBtnSubmit=function(){e.setState({imageUrl:e.state.input},(function(){var e=this;k.models.predict(p.a.FACE_DETECT_MODEL,this.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))}))},e.state={input:"",imageUrl:"",box:{},imageWidth:null,imageHeight:null,clarifaiFace:{}},e.keyPressed=e.keyPressed.bind(Object(l.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,window.addEventListener("resize",this.updateDims)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateDims)}},{key:"keyPressed",value:function(e){"Enter"===e.key&&this.onBtnSubmit()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h.a,{className:"particles",params:N}),Object(j.jsx)(f,{}),Object(j.jsx)(g,{}),Object(j.jsx)(O,{}),Object(j.jsx)(w,{onInputChange:this.onInputChange,onBtnSubmit:this.onBtnSubmit,keyPressed:this.keyPressed}),Object(j.jsx)(C,{box:this.state.box,imageUrl:this.state.imageUrl})]})}}]),n}(i.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,394)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};n(392);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),_()}},[[393,1,2]]]);
//# sourceMappingURL=main.3500b111.chunk.js.map