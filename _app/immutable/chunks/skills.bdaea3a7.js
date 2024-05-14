import{A as e}from"./UIcon.a3a50ad2.js";function g(t,...s){const i=Object.assign({},t);return Object.keys(i).forEach(r=>{s.includes(r)&&delete i[r]}),i}const a=t=>t,p=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Software",slug:"software"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],o=t=>{const s=g(t,"category");return t.category&&(s.category=p.find(i=>i.slug===t.category)),s},c=[o({slug:"py",color:"yellow",description:`Python was the first text based language I learned and is still my best language.
			Over the 9 years I've known Python, I've used many of its libraries including but not limited
			to: Pandas, Selenium, Beautiful Soup, Openpyxl, Kivy, Tweepy, MySql Connector, Simple Salesforce, and Robinstocks`,logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"js",color:"yellow",description:`I first learned Javascript in my second year of undergrad in a web development course where it was taught
			with React and MongoDB. Since then I've used it with React Native to develop mobile apps for internships and contracts.
			`,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"dodgerblue",description:`I made the transition from Javascript to Typescript during my internship with Next Gen HQ. Here, I utilized
			Typescript with React Native and Firebase to create a social media mobile app and administrative dashboard website.
			`,logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"Java",color:"orange",description:`Java was the first "traditional" object oriented language I learned. I mainly used it for classes teaching the principals
			of OOP. I utilized JavaFX to make a desktop application for the product managers at Primex.
			`,logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"cpp",color:"dodgerblue",description:`C++ was my main object oriented language in high school. I chose it over Java because of the manual garbage
			collection. It allowed me to implement many data structures and algorithms with no hanging pointers.
			`,logo:e.Cpp,name:"C++",category:"pro-lang"}),o({slug:"react",color:"lightskyblue",description:`I first leanred React in a web development class at Stony Brook. For both web development 1 and 2, I utilized this 
			tool for the front-end of my applications. I also used React Native at Next Gen HQ for the front end of their 
			mobile app and admin dashboard webpage.
			`,logo:e.ReactJs,name:"React",category:"library"}),o({slug:"fastapi",color:"darkcyan",description:`I learned FastAPI to create an API for my golf course database. The program has 4 GET endpoints for the data 
			as well as a root endpoint that gives a description of the others.`,logo:e.FastApi,name:"Fast API",category:"library"}),o({slug:"selenium",color:"limegreen",description:`I was first introduced to Selenium through an off-shoot library "Appium". I used Appium to automate test cases 
			of the My Acurite weather app from Primex. I've since used Selenium for web scraping, most recently to get the data 
			for my golf course database.
			`,logo:e.Selenium,name:"Selenium",category:"library"}),o({slug:"pandas",color:"slateblue",description:`Pandas is my go to tool for viewing and editing Excel data using Python. I've used it for both internship and 
			personal projects. Its ability to easily convert spreadsheets into dictionaries makes it ideal for Excel work.
			`,logo:e.Pandas,name:"Pandas",category:"library"}),o({slug:"kivy",color:"black",description:`I learned Kivy to create the GUI of my senior engineering project in high school. I used it to make a golf score 
			keeping mobile app, which utilized its object oriented design to create mutliple screens with transitions between 
			each to give the app a "natural" usability.
			`,logo:e.kivy,name:"Kivy",category:"library"}),o({slug:"javafx",color:"orange",description:`I utilized JavaFX for my first development project at Primex. It was used for the front-end of my database 
			searching tool.
			`,logo:e.javafx,name:"JavaFX",category:"library"}),o({slug:"tweepy",color:"yellow",description:`I used Tweepy for a side project in crypto trading. I used this library to access Elon Musk's timeline on Twitter 
			and buy Dogecoin whenever he tweeted anything about the coin or a dog in general.
			`,logo:e.tweepy,name:"Tweepy",category:"library"}),o({slug:"ensta",color:"mediumvioletred",description:`I used Ensta to track sport bets off of various Instagram pages and notify me via text when new ones were posted.
			`,logo:e.ensta,name:"Ensta",category:"library"}),o({slug:"mongo",color:"limegreen",description:`I learned MongoDB in a web development class in my second year of university. In that course, I developed a website 
			that allowed users to create top 5 lists of any category of their choosing, and like/dislike and comment other other 
			users' lists. Mongo was used to hold the data for users' logins and their lists.
			`,logo:e.MongoDB,name:"MongoDB",category:"db"}),o({slug:"MySQL",color:"teal",description:`MySQL was the first database managment tool I learned. I've worked with MySQL servers for school projects, internship 
			work, and side programs. Currently, all of my personal projects utilize JawsDB which is a cheap MySQL server hosted 
			on AWS.
			`,logo:e.MySql,name:"MySQL",category:"db"}),o({slug:"Firebase",color:"orange",description:`I gained experience with Firebase during my internship at Next Gen HQ. Here my team used it as our backend for a 
			forum like social media app and an administrator dashboard for the app. We utilized many of its built in features 
			such as password encryption and profile pictures.
			`,logo:e.Firebase,name:"Firebase",category:"db"}),o({slug:"GitHub",color:"black",description:`I've been using GitHub for 6 years. In high school I used it soley as a place to show my code, and I progressed to use
			all of its collaboration features throughout college for school projects and internships.
			`,logo:e.Github,name:"Github",category:"software"}),o({slug:"Heroku",color:"mediumpurple",description:`I've used Heroku for school, internship, and personal projects. I've used several of its add-ons including 
			schedulers, command-line dynos, and database tools. The simplistic use and cheap tools make this software 
			perfect for my projects.
			`,logo:e.Heroku,name:"Heroku",category:"software"}),o({slug:"Boomi",color:"#005B8B",description:`I completed the associate and professional level flow certifications of Boomi as part of my training with 
			RJ Reliance. They used this tool as their main solution for IPaaS problems. My project utilizing it was to debug 
			and complete a flow that took employee information, reformatted it to fit a Saleforces template, and uploaded the 
			data into an SFTP.
			`,logo:e.Boomi,name:"Boomi",category:"software"}),o({slug:"PowerAutomate",color:"dodgerblue",description:`I learned Power Automate during my internship at RJ Reliance. We used it for IPaaS programs when Boomi didn't have 
			the proper connections for a project. My project with this software was to create a flow that logged into Paylocity, 
			located applicants for jobs at Kendall Auto, and saved their information in an Excel sheet.
			`,logo:e.PowerAutomate,name:"Power Automate",category:"software"}),o({slug:"dbeaver",color:"saddlebrown",description:`When I began using MySQL for personal projects, I wanted a a way to easily view and edit the databases. This
			tool allowed me to do exactly that. In addition, it allowed me to setup the data such that it could be edited by 
			others who didn't have knowledge of SQL.
			`,logo:e.dbeaver,name:"DBeaver",category:"software"}),o({slug:"expo",color:"black",description:`Expo was the deployment tool used by Next Gen HQ. This is because of it's pairing with React Native and
			ability to push to the Apple and Android stores easily. After using it there, I decided to use it as my deployment
			service for my second contract with the International Cardiology Consultants.
			`,logo:e.expo,name:"Expo",category:"software"}),o({slug:"koyeb",color:"black",description:`I first found Koyeb when looking for a platform to deploy my golf course API on. This tool provided a very simple
			deployment process as well as free hosting which was perfect for my project.
			`,logo:e.koyeb,name:"Koyeb",category:"software"})],m="Skills",h=(...t)=>c.filter(s=>t.includes(s.slug)),y=t=>{const s=[],i=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){console.log(r.category),i.push(r);return}let n=s.find(d=>{var l;return d.category.slug===((l=r.category)==null?void 0:l.slug)});n||(n={items:[],category:r.category},s.push(n)),n.items.push(r)}),i.length!==0&&s.push({category:{name:"Others",slug:"others"},items:i}),s};export{y as a,h as g,c as i,m as t};
