class Project {
    constructor(project, name, year, imageOne, textOne, textTwo, tools, imageTwo) {
        this.project = project;
        this.name = name;
        this.year = year;
        this.imageOne = imageOne;
        this.textOne = textOne;
        this.textTwo = textTwo;
        this.tools = tools;
        this.imageTwo = imageTwo;
    }
}

var projects = [];

projects.push(new Project(
    "projectRicoh",
    "Internship Ricoh", 
    "Jan 2025 - May 2025",
    "/images/ProjectRicoh/RicohImgOne.jpg",
    "During my internship at Ricoh Netherlands I worked a lot with ASP.NET and SQL to work on a internal piece of software that holds informationa bout what products customers have.",
    "",
    "ASP.NET/Git/C#/SQL/Jquery",
    ""
));

loadPage();

async function loadPage() {
    // Get project name from file name and get project data
    const projectName = window.location.pathname.split("/").pop().split(".").shift();
    const project = projects.find(proj => proj.projectName = projectName)

    // Get project base html
    const response = await fetch("/pages/projectPages/projectBase.html");
    const projectBase = await response.text();
    
    // Set all the data
    document.getElementById("mainContainer").innerHTML = projectBase;
    document.getElementById("nameYear").innerHTML = `${project.name} (${project.year})`;
    document.getElementById("imageOne").src = project.imageOne;
    document.getElementById("textOne").innerHTML = project.textOne;
    document.getElementById("textTwo").innerHTML = project.textTwo;
    
    // Create list item for every tool
    var toolsString = "";
    const tools = project.tools.split("/").forEach(function(item){
        var listItem = `<li>${item}</li>`;
        toolsString += listItem;
    });
    document.getElementById("tools").innerHTML = toolsString;

    document.getElementById("imageTwo").src = project.imageTwo;
}