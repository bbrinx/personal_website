(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(27)},16:function(e,a,t){},24:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),s=t.n(r),c=(t(16),t(4)),i=t(5),o=t(9),m=t(6),d=t(10),p=t(7),u=t.n(p),h=t(8),f=t.n(h);t(1),t(22),t(24);var E=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={tldr:!1},e.header=l.a.createRef(),e.bio1=l.a.createRef(),e.bio2=l.a.createRef(),e.bio3=l.a.createRef(),e.bio4=l.a.createRef(),e.bio5=l.a.createRef(),e.projects1=l.a.createRef(),e.projects2=l.a.createRef(),e.projects3=l.a.createRef(),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"tldr",value:function(){this.setState({tldr:!this.state.tldr})}},{key:"scroll",value:function(e){f.a.polyfill(),window.scrollBy({top:e.current.offsetTop-120,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("header",{className:"App-header dashed-line"},l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("h1",null,"Jonathan Derin"),l.a.createElement("ul",{className:"contact"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:info@jonathanderin.de"},"info@jonathanderin.de")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/bbrinx"},"github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/jonathan-derin"},"linkedin"))))),l.a.createElement("main",{className:"main dashed-line"},l.a.createElement("div",{className:"header",ref:this.header},l.a.createElement("h2",null,"Biography"),l.a.createElement("div",{className:"tldr-wrapper"},l.a.createElement(u.a,{onChange:function(){e.tldr()},offColor:"#222",onColor:"#222",onHandleColor:"#fff",offHandleColor:"#fff",checked:this.state.tldr,id:"normal-switch",uncheckedIcon:!1,checkedIcon:!1,activeBoxShadow:"#fff",height:20,width:45}),l.a.createElement("h2",{className:"tldr-toggle",onClick:function(){e.tldr()}},"TL;DR"))),l.a.createElement("div",{className:"bio"},l.a.createElement("div",{className:"bio-text"},l.a.createElement("div",{className:"text ".concat(this.state.tldr?"hidden":"")},l.a.createElement("p",null,"After graduating and earning some money working in social media marketing I wanted to start studying computer science. To be sure I was on the right path, I completed an ",l.a.createElement("span",{className:"tldr"},"internship")," as a ",l.a.createElement("span",{className:"tldr"},"web developer")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.bio1)},className:"footnote"},"[1]"),". I created websites for clients, Wordpress templates and optimized existing websites in respect of ",l.a.createElement("span",{className:"tldr"},"usability, design and SEO"),"."),l.a.createElement("p",null,"In October I moved to Berlin to ",l.a.createElement("span",{className:"tldr"},"study international media and computing")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.bio2)},className:"footnote"},"[2]"),", a computer science major with focus on image processing and web development. While studying I was ",l.a.createElement("span",{className:"tldr"},"awarded with the Deutschland Stipendium"),", a scholarship for high-achieving students ",l.a.createElement("span",{onClick:function(){e.scroll(e.bio3)},className:"footnote"},"[3]"),". As part of the program, we could complete an internship abroad. I decided to use this opportunity to live in Mexico for six months."),l.a.createElement("p",null,"From March until August 2017 I worked as a ",l.a.createElement("span",{className:"tldr"},"full stack development intern at Decidata"),", a marketing startup ",l.a.createElement("span",{className:"tldr"},"in Mexico City "),l.a.createElement("span",{onClick:function(){e.scroll(e.bio4)},className:"footnote"},"[4]"),". As part of the dev team I built a new application using ",l.a.createElement("span",{className:"tldr"},"Python, Django and Javascript"),", that would let advertisers trigger their online campaigns based on the weather. I implemented automated ",l.a.createElement("span",{className:"tldr"},"python unit tests")," and ",l.a.createElement("span",{className:"tldr"},"refactored")," parts of the ",l.a.createElement("span",{className:"tldr"},"code"),". For the last months I worked on a new version of the platform, including ",l.a.createElement("span",{className:"tldr"},"implementing React")," as a frontend framework to a Django backend and ",l.a.createElement("span",{className:"tldr"},"changing the database structure"),"."),l.a.createElement("p",null,"During my last two semesters I worked as a ",l.a.createElement("span",{className:"tldr"},"full stack developer")," at the ",l.a.createElement("span",{className:"tldr"},"Berlin")," startup ",l.a.createElement("span",{className:"tldr"},"Foodly")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.bio5)},className:"footnote"},"[5]"),". There I was responsible for building Foodly\u2019s web application with ",l.a.createElement("span",{className:"tldr"},"Meteor, React, Node.js and MongoDB"),". I implemented new featueres and prototyped an iOS mobile app version using ",l.a.createElement("span",{className:"tldr"},"React Native"),"."),l.a.createElement("p",null,"I ",l.a.createElement("span",{className:"tldr"},"graduated in 2018")," with the highest mark, obtaining a ",l.a.createElement("span",{className:"tldr"},"bachelor of science"),". My final thesis was focused on natural language processing techniques, analyzing the effect of the European Refugee Crisis on German media."))),l.a.createElement("div",{className:"ref"},l.a.createElement("div",{className:"ref-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"References")),l.a.createElement("div",{className:"references"},l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.bio1,className:"number"},"[1]"),l.a.createElement("p",null,"Mar 2015 - Jun 2015 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Pjunger Design / T\xfcbingen"),l.a.createElement("br",null),"Web Development Intern")),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.bio2,className:"number"},"[2]"),l.a.createElement("p",null,"Oct 2015 - Sep 2018 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Bachelor of Science"),l.a.createElement("br",null),"University of Applied Science Berlin ",l.a.createElement("br",null),"Int. Media and Computing")),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.bio3,className:"number"},"[3]"),l.a.createElement("p",null,"Oct 2016 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Deutschland Stipendium"),l.a.createElement("br",null),"University of Applied Science Berlin ",l.a.createElement("br",null),"Scholarship Award")),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.bio4,className:"number"},"[4]"),l.a.createElement("p",null,"Mar 2017 - Aug 2017 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Decidata / Mexico City"),l.a.createElement("br",null),"Fullstack Dev Intern")),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.bio5,className:"number"},"[5]"),l.a.createElement("p",null,"Jan 2018 - Sep 2018 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Foodly / Berlin"),l.a.createElement("br",null),"Fullstack Dev")))))),l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"projects-text"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",{className:"desktop"},"Selection of Projects"),l.a.createElement("h2",{className:"mobile"},"Projects")),l.a.createElement("div",{className:"text ".concat(this.state.tldr?"hidden":"")},l.a.createElement("p",null,"One of my favorite projects I worked on was my ",l.a.createElement("span",{className:"tldr"},"semester project")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.projects1)},className:"footnote"},"[1]"),". Using ",l.a.createElement("span",{className:"tldr"},"React Native")," we built a ",l.a.createElement("span",{className:"tldr"},"mobile navigation app")," for our university over four months. The app allows to search for the fastest path, find points of interests and is equipped with many more features."),l.a.createElement("p",null,"Another important project for me was my ",l.a.createElement("span",{className:"tldr"},"bachelor thesis")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.projects2)},className:"footnote"},"[2]"),". Using ",l.a.createElement("span",{className:"tldr"},"python, natural language processing techniques and machine learning")," I researched the effect of the European Refugee Crisis on German media. This project was a great fusion of my interest in politics and journalism combined with my interest of data science and resulted in a new found love for natural language processing."),l.a.createElement("p",null,"After I finished school I finally got to work on a few projects I have had in mind for a while. This resulted in a small ",l.a.createElement("span",{className:"tldr"},"newsreader"),", called simple newsfeed, built with ",l.a.createElement("span",{className:"tldr"},"React.js and Node.js")," ",l.a.createElement("span",{onClick:function(){e.scroll(e.projects3)},className:"footnote"},"[3]"),". The idea behind it was to build a simple and clean rss reader that would declutter my morning news routine (and help me avoid badly designed websites)."))),l.a.createElement("div",{className:"ref"},l.a.createElement("div",{className:"ref-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"References")),l.a.createElement("div",{className:"references"},l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.projects1,className:"number"},"[1]"),l.a.createElement("a",{href:"https://github.com/bbrinx/cm.bp.htw-mapper",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"Oct 2017 - Mar 2018 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"HTW Mapper"),l.a.createElement("br",null),"Semester Project"))),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.projects2,className:"number"},"[2]"),l.a.createElement("a",{href:"%PUBLIC_URL%/resume.pdf",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"April 2018 - Aug 2018 ",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Textual Analysis of German Online Media"),l.a.createElement("br",null),"Bachelor Thesis"))),l.a.createElement("div",{className:"reference"},l.a.createElement("p",{ref:this.projects3,className:"number"},"[3]"),l.a.createElement("a",{href:"https://github.com/bbrinx/newsfeed",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"Oct 2018 - present",l.a.createElement("br",null),l.a.createElement("span",{className:"title"},"Simple Newsfeed"),l.a.createElement("br",null),"Hobby Project ",l.a.createElement("br",null)))))))))))}}]),a}(n.Component);s.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.5ead2c2e.chunk.js.map