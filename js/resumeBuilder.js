var name = "Joel";
var role = "web developer";

var formattedName = HTMLheaderName
	.replace("%data%", name);

var formattedRole = HTMLheaderRole
	.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var skills = ["html","javascript","css"];

var bio = {
	"name" : "Joel",
	"role" : "Front end developer",
	"contacts" : {
		"email": "jozaco@gmail.com",
		"mobile": "654304665",
		"github": "jozaco",
		"twitter": "JoelZarrias",
		"location": "Granollers"
	},
	"image"	:	"../images/fry.jpg",
	"welcomeMessage" :	"Hi there! I'm trying JS!",
	"skills" :	[
		"html",
		"javascript",
		"css"
	]
};

var work={
	"jobs" : [
		{
			"employer": "Ascamm",
			"title": 	"Webmaster",
			"location": "Sant Cugat del Valles",
			"dates": {
				"from": "2007",
				"to":	"2014"
			},
			"description": "lorem ipsum dolor sit amet"
		},
		{
			"employer": "Scytl",
			"title":	"Front end developer",
			"location":	"Barcelona",
			"dates":	{
				"from":	"2014",
				"to":	"nowadays"
			},
			"description": "Amet sit dolor ipsum lorem"
		}
	]
};

var projects={
	"projects": [
		{
			"title": "Ascamm website",
			"dates": {
				"from": "2007",
				"to":	"2014"
			},
			"description": "Development of the corporate website",
			"images": [
				"http://www.ascamm.com",
				"http://www.ascamm.commm",
				"http://www.ascamm.co"
			]
		},
		{
			"title": "Scytl website",
			"dates": {
				"from": "2014",
				"to":	"2015"
			},
			"description": "Development of the corporate website",
			"images": [
				"http://www.scytl.com",
				"http://www.scytl.commm",
				"http://www.scytl.co"
			]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Escola Pia de Granollers",
			"location": "Granollers",
			"degree":	"EGB-ESO",
			"majors": [
				"Dolors",
				"Asumpció",
				"Jançana",
				"Miquel Angel"
			],
			"dates": {
				"from": "1992",
				"to":	"2002"
			},
			"url": "http://www.escolapia.com"
		},
		{
			"name": "IES Celestí Bellera",
			"location": "Granollers",
			"degree":	"Bachelor",
			"majors": [
				"Alvar",
				"Josep",
				"Maria",
				"Anna"
			],
			"dates": {
				"from": "2002",
				"to":	"2004"
			},
			"url": "http://www.bellera.org"
		},
		{
			"name": "EU Gimbernat",
			"location": "Sant Cugat",
			"degree":	"Higher studies",
			"majors": [
				"Francesc",
				"Eva",
				"Alejandro",
				"Anna"
			],
			"dates": {
				"from": "2004",
				"to":	"2010"
			},
			"url": "http://www.eugimbernat.com"
		}
	],
	"onlineCourses": [
		{
			"name": "Javascript Basics",
			"school": "Udacity",
			"dates": {
				"from": "06/25/2015",
				"to":	"06/31/2015"
			},
			"url":	"http://www.udacity.com"
		}
	]
};


function displayWork(){
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
	}

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates.from+ '-'+ work.jobs[job].dates.to);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWork.concat(' - ', formattedTitle));
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDesc);
	}
}

displayWork();

projects.display = function() {
	for(project in projects.projects){
		$("#main").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var projectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates.from.concat(' - ',projects.projects[project].dates.to));
		var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);

	}
}

projects.display();

$("#mapDiv").append(googleMap);
