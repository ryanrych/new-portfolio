import{A as e}from"./UIcon.81a58a64.js";import{g as t}from"./skills.0e91a2c7.js";const s=[{slug:"fairways",color:"white",description:`When I decided to create a golf course mobile app, I quickly found out that golf course APIs can be incredibly 
			expensive. This lead to me decide to create my own database and later add an API and Python library for others to 
			access. I found the data I needed on a crowd-sourced golf course data website, so I wrote a Python program that 
			used Selenium to scrape the data of each course and organize it into a MySQL database. I also have the program set 
			to only added courses that haven't yet been seen so that I can schedule the program to run monthly on Heroku to keep 
			my data up to date. After this I utilized FastAPI to create the API for others to access the data. The API has 
			4 endpoints that developers can use to get data on courses, individual holes, and individual tee boxes. Then I used 
			the API to create a more user-friendly Python library to access the data without making HTTP requests. Finally, I 
			created a webpage in React to advertise the data and sell access.
			`,shortDescription:"An API I created using Fast API to my personal golf course database.",links:[{to:"https://fairways-api-ryanrychlak.koyeb.app/docs",label:"API"}],logo:e.Fairways,name:"Fairways API",period:{from:new Date},skills:t("py","MySQL","js","fastapi","selenium","koyeb"),type:"API"},{slug:"fairwayfinder",color:"white",description:`Currently a work in progress. I'm developing a golf GPS and stat keeping mobile app in JS and React Native that will utilize my own 
			database for course information. What will separate my app from the plethora of golf apps out there are 2 key features. 
			First, my app will take a mechanic directly from my favorite video game, The Golf Club 2. The mechanic is that before 
			starting your round, you can look at past rounds played on the same course by yourself or others. You can then pick one 
			or more of the rounds based on the users' handicap and score and add their "ghost" to your group. While playing, you will be 
			able to see where each of their shots landed, helping you with your round. In the far future, I would like to expand this 
			to utilize AI and be able to predict what professional golfers would do for each shot and create a ghost player for them. 
			The second feature is a touring competition. I've created an algorithm that groups courses into 25-mile radius' and uses 
			Chat GPT to give a name for the tour based on the location. Over periods of about 10 weeks, users can join these leagues where they 
			will have to record a score at one of the courses per week. This will give average golfers the feel of a tour professional 
			as they travel around their home area and compete with other locals.
			`,shortDescription:"A golf mobile app for score keeping, data tracking, GPS locating, and competition",links:[],logo:e.FairwayFinder,name:"Fairway Finder",period:{from:new Date},skills:t("js","react","expo"),type:"Mobile App",screenshots:[]},{slug:"cauda",color:"white",description:`In January of 2024, I stumbled on an Instagram page where somebody started with $1 and was sports betting his way 
			to $1 million. Sounds crazy at first, but when I found the page he was up to $50. This made me upset because I realized 
			if I followed each of his bets but multiplied the amount by 10, I could have made $500 without any real work. This lead 
			me to develop an algorithm that scraped Instagram and would text me and my friends the bets as soon as they were posted, as 
			well as how much to put on each. This quickly started making us good amounts of money, so we expanded to include several 
			other accounts that post bets via Telegram. As the number of people who wanted the texts grew, I decided to create a website 
			where users could login to see the bets as well as show the earnings of the past bets. We grew the service to 15 users and have 
			seen a 60% ROI over the past 2 months.
			`,shortDescription:"A website to view sports bets and track earnings.",links:[{to:"https://www.caudainvestments.com",label:"Website"}],logo:e.cauda,name:"Cauda  Investments",period:{from:new Date},skills:t("py","MySQL","js","ensta","Heroku"),type:"Website",screenshots:[]}],r="Projects";export{s as i,r as t};
