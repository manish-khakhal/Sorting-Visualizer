(this.webpackJsonpalgorithm_visualizer=this.webpackJsonpalgorithm_visualizer||[]).push([[0],{32:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(20),n=r.n(c),s=r(1),a=r(7),i=r(0);var j=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"w3-bar w3-theme",style:{position:"sticky",top:"0"},children:[Object(i.jsx)(a.b,{to:"/Sorting-Visualizer",className:"w3-bar-item w3-button w3-padding-16",children:"Home"}),Object(i.jsx)(a.b,{to:"/bubble_sort",className:"w3-bar-item w3-button w3-padding-16",children:"Bubble Sort"}),Object(i.jsx)(a.b,{to:"/insertion_sort",className:"w3-bar-item w3-button w3-padding-16",children:"Insertion Sort"}),Object(i.jsx)(a.b,{to:"/about",className:"w3-bar-item w3-button w3-padding-16",children:"About Us"}),Object(i.jsx)(a.b,{to:"/contact",className:"w3-bar-item w3-button w3-padding-16",children:"Contact Us"})]})})};var o=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{className:"w3-container w3-theme w3-padding",id:"myHeader",style:{minHeight:"300px"},children:Object(i.jsxs)("div",{className:"w3-center",children:[Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"Enjoy the new way of studying algorithms"}),Object(i.jsx)("h1",{className:"w3-xxxlarge w3-animate-bottom",children:"Algorithm Visualizer"}),Object(i.jsx)("h4",{children:"Choose from below algorithms to get started"})]})})})};var b=function(e){var t=e.sort_image,r=e.sort_type,c=e.best_tc,n=e.avg_tc,s=e.link;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"w3-half",children:Object(i.jsxs)("div",{className:"w3-card w3-container",style:{minHeight:"460px"},children:[Object(i.jsx)("h3",{style:{marginTop:"10px !important"},children:r}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:t,height:"200px",width:"400px"}),Object(i.jsxs)("p",{children:["Best time Complexity is ",c]}),Object(i.jsxs)("p",{children:["Average and Worst time complexity is ",n]}),Object(i.jsx)("p",{children:Object(i.jsx)(a.b,{to:s,children:Object(i.jsx)("button",{className:"w3-button w3-theme",children:"Click Here to Get Started"})})})]})})})};var l=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"w3-row-padding w3-center w3-margin-top w3-margin-bottom",children:[Object(i.jsx)(b,{sort_type:"Bubble Sort",sort_image:"https://picsum.photos/200/300?grayscale",best_tc:"O(nlogn)",avg_tc:"O(n^2)",link:"/bubble_sort"}),Object(i.jsx)(b,{sort_type:"Insertion Sort",sort_image:"https://picsum.photos/200/300?grayscale",best_tc:"O(n)",avg_tc:"O(Nlog(N))",link:"/insertion_sort"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})};var d=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("footer",{className:"w3-container w3-theme-dark w3-padding-16",children:[Object(i.jsx)("h3",{children:"Made by Prakash Dhayal"}),Object(i.jsx)("h4",{children:"Software Engineering Project"}),Object(i.jsxs)("p",{children:["Contact Me: ",Object(i.jsx)("a",{href:"https://www.linkedin.com",target:"_blank",children:"LinkedIn"})]}),Object(i.jsxs)("div",{style:{position:"relative;bottom:55px"},className:"w3-tooltip w3-right",children:[Object(i.jsx)("span",{className:"w3-text w3-theme-light w3-padding",children:"Go To Top"}),Object(i.jsx)("a",{className:"w3-text-white",href:"#myHeader",children:Object(i.jsx)("span",{className:"w3-xlarge",children:Object(i.jsx)("i",{className:"fa fa-chevron-circle-up"})})})]})]})})};var h=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(l,{}),Object(i.jsx)(d,{})]})};var x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"About Us"}),Object(i.jsx)(d,{})]})};var O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Contact Us"}),Object(i.jsx)(d,{})]})},u=r(9);var m=function(e){var t=e.value,r=(e.id,e.color),c=e.bgc;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{style:{color:r,margin:"10px",textAlign:"center",fontSize:"1.7rem",fontWeight:"bold",backgroundColor:c,height:"40px",minWidth:"40px",padding:"0 8px"},children:["  ",t," "]})})};var g=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"sh",children:Object(i.jsx)(i.Fragment,{children:e.arr.map((function(e,t){return Object(i.jsx)(m,{value:e,color:"black",bgc:"white"},t)}))})})})};var p=function(e){var t=e.sort_type,r=e.sort,c=e.showArray,n=e.setshowArray,a=Object(s.useState)(""),j=Object(u.a)(a,2),o=j[0],b=j[1];return Object(s.useEffect)((function(){}),[c]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{id:"contain",children:[Object(i.jsx)("h2",{id:"heading",style:{textTransform:"uppercase"},children:t}),Object(i.jsx)("div",{id:"bod",children:Object(i.jsx)(g,{arr:c})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{id:"buttons",children:[Object(i.jsx)("input",{id:"array",type:"text",value:o,onChange:function(e){b(e.target.value)},placeholder:"Enter array seperated by space",size:"30"}),Object(i.jsx)("button",{id:"submit",className:"btn-primary btn-default",onClick:function(){var e=o.split(" ").map(Number);n(e)},children:"Submit"}),Object(i.jsx)("button",{className:"btn-default ",onClick:function(){r(c)},children:t}),Object(i.jsx)("button",{className:"btn-default",style:{marginLeft:"40px"},children:"Stop"}),Object(i.jsx)("button",{className:"btn-default",children:"Resume"}),Object(i.jsx)("button",{className:"btn-default",children:"Reset"}),Object(i.jsx)("button",{className:"btn-deafault btn-danger",children:"Clear"})]})})]})})};var w=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,{sort_type:"Bubble Sort",sort:function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e.length-t-1;r++)!function(t,r){setTimeout((function(){if(e[r]>e[r+1]){var t=e[r];e[r]=e[r+1],e[r+1]=t}c(e),document.getElementById("bod").innerHTML="<Board arr={showArray}/>"}),1e3*(10*t+r+1))}(t,r)},showArray:r,setshowArray:c})})};var f=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2);return t[0],t[1],Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,{sort_type:"Insertion Sort",sort:function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e.length-t-1;r++)setTimeout((function(){console.log(t,r)}),1e3)}})})},v=(r(32),r(2));var y=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(a.a,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)(v.c,{children:[Object(i.jsx)(v.a,{exact:!0,path:"/Sorting-Visualizer",children:Object(i.jsx)(h,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/about",children:Object(i.jsx)(x,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/contact",children:Object(i.jsx)(O,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/bubble_sort",children:Object(i.jsx)(w,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/insertion_sort",children:Object(i.jsx)(f,{})})]})]})})};r(33),r(34);n.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.375c1de0.chunk.js.map