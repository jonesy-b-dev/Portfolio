class Project {
    constructor(project, name, year, imageOne, textOne, textTwo, tools, imageTwo, optional) {
        this.project = project;
        this.name = name;
        this.year = year;
        this.imageOne = imageOne;
        this.textOne = textOne;
        this.textTwo = textTwo;
        this.tools = tools;
        this.imageTwo = imageTwo;
        this.optional = optional;
    }
}

async function loadPage() {
    // Get project name from file name and get project data
    const projectName = window.location.pathname.split("/").pop().split(".").shift();
    const project = projects.find(proj => proj.project == projectName);

    // Get project base html
    const response = await fetch("/pages/projectPages/projectBase.html");
    const projectBase = (await response.text()).trim();
    
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
    document.getElementById("optional").innerHTML = project.optional;
}

var projects = [];

// Appbooter
projects.push(new Project(
    "projectAppBooter",
    "AppBooter", 
    "2022",
    "/images/ProjectAppBooter/AppBooterImgOne.png",
    "During my internship at Ricoh Netherlands I worked a lot with ASP.NET and SQL to work on a internal piece of software that holds informationa bout what products customers have.AppBooter is a ongoing side project of me. It’s mostly to test my skills and learn more about programming with C# and .net forms. The main idea is to start a custom set of apps in bulk. You will have groups too so you can start different sets of apps. You can use it when you for example want to code and with one click you can start Visual Studio, GitHub etc. It’s in its early stages of development but having a lot fun making it. It has a lot of rough edges but I’m refining it bit by bit.",
    "",
    "C#/.NET Forms/Git:Github",
    "",
    ""
));

// CrescentOne
projects.push(new Project(
    "projectCrescentOne",
    "Internship CrescentOne", 
    "2022",
    "/images/ProjectCrescentOne/CrescentOneImgOne.png",
    "During the first 2 weeks I delved into several topics that are important within the company. These were topics such as REST APIs, the software they use, networking, and working with GitHub and Azure DevOps. After these 2 weeks, my old internship supervisor Ard put me on c1crm. C1crm is CrescentOne's integration technology between HubSpot, FreshDesk and CrescentOne's CRM database. Ard gave me assignments that I worked on for the rest of my internship. I delivered my work to CrescentOne on January 10.",
    "",
    "NodeJS/Node-Red/Git:Github (Actions)",
    "/images/ProjectCrescentOneo/CrescentOneImgTwo.jpg",
    ""
));

// GameDesign
projects.push(new Project(
    "projectGameDesign",
    "GameDesign", 
    "2022",
    "/images/ProjectGameDesign/GameDesignImgOne.png",
    `In the second year of my software development study I finished a game design course at school. We learned about the basics of general game design like the MDA model and formal elements. We also covered a bit of ludology. The lessons were mostly created by Jan Lamoen who is a professional in the industry. After half a year we made an exam and my game design document I is linked below. We had about 10h to think of a game, make a GDD and make a papaer prototype.
    <br><br>
        <a class="mailto"  target="_blank" href="/pages/GDD Superhero Game.pdf">My exam</a>`,
    "",
    "Word",
    "",
    ""
));

// Grapple Game
projects.push(new Project(
    "projectGrappleGame",
    "GrappleGame", 
    "2022",
    "/images/ProjectGrappleGame/GrappleGameImgOne.png",
    "The grapple game was a project from school in the first year. It’s a grapple demo made in Unity where I made a grapple system where you can grapple around in a map with a little parkour. I had fun making it and was happy with the end result. I learned a lot about Unity and C# and can use that knowledge for future projects.",
    "",
    "Unity/C#/Git:Github",
    "",
    ""
));

// Mouse Game
projects.push(new Project(
    "projectMouseGame",
    "MouseGame", 
    "Sep 2024 - Oct 2025",
    "/images/ProjectMouseGame/MouseGameImgOne.png",
    "The Mouse Game was my final exam of my software developer study on SintLucas, and was also potentionally as an intake asignment for BUAS. It utilises the power of SFML to create the game, it game me the extra challange and motivation to make something good of this project. It game me the chance to learn how to make games without a game engine and learn a lot of C++. This project brought me a lot of knowlegde in all aspects of game development and general computer science.",
    "During the produciton of this game I applied the agile software development. For the project itself, I used Premake5 for the build system and a simple object oriented approach to building the project. All objects in the game inherit from the same base object.",
    "SFML 2.6.1/Git:Github/Premake 5/Paint",
    "/images/ProjectMouseGame/MouseGameImgTwo.png",
    ""
));

// Ricoh
projects.push(new Project(
    "projectRicoh",
    "Internship Ricoh", 
    "Jan 2025 - May 2025",
    "/images/ProjectRicoh/RicohImgOne.jpg",
    "During my internship at Ricoh Netherlands I worked a lot with ASP.NET and SQL to work on a internal piece of software that holds informationa bout what products customers have.",
    "",
    "ASP.NET/Git/C#/SQL/Jquery",
    "",
    ""
));

// Róka
projects.push(new Project(
    "projectR%C3%B3ka", // ó doesnt work
    "Róka",
    "2022 - 2023",
    "/images/ProjectRóka/RókaImgOne.png",
    "Ròka is a 2D boss fight game were you will play as a little fox in a underground world. A boss will chase you and you will have to fight against him. It was a school project where 2 developers had to work together with a few designers. The final game we had to put on a arcade at school. It was a very fun experience and I learned a lot about working with a team and to play stuff with a team to get work done on time.",
    `<iframe src="https://itch.io/embed/1874348" width="552" height="167" frameborder="0"><a href="https://jonesy-b.itch.io/roka">Róka by Jonesy B</a></iframe>`,
    "Unity/C#/Agile Development/Git:Github",
    "",
    ""
))

// SCP Infinity
projects.push(new Project(
    "projectSCPInfinity", 
    "SCPInfinity",
    "2020 - 2022",
    "/images/ProjectSCPInfinity/SCPInfinityImgOne.png",
    "SCP Infinity is a old game I was making with some friends. It was a SCP horror story game. We never got far with the game but I learned a lot about Unreal Engine and game development. We already had made a lot of the core mechanics which were pretty good. Sadly the team fell apart.",
    "",
    "Unreal Engine 5/Unreal Engine Blueprints/Blender/Git:Github",
    "",
    `<iframe class="youtubeVideo" src="https://www.youtube.com/embed/6dHexUsJFI8?si=CKiCUsgE2D8LocfL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
))

// SFML
projects.push(new Project(
    "projectSFML", // ó doesnt work
    "SFML",
    "2023",
    "/images/ProjectSFML/SFMLImgOne.png",
    "I've been interested in graphics programming for a long while now, but it was very hard to get into with writing pure OpenGL and with GLFW it also didn't work out. But at the starts of 2023 I found out about SFML(Simple and Fast Multimedia Library) and withing a few days of learning I got vertex arrays, sprites, textures, text, some physics and even ImGui working. I hope to learn a lot more about it and make some games with it and go and write with OpenGL it self.",
    "",
    "SFML/C++/ImGui/Git:GitHub",
    "",
    ""
))

// Stellar Engine
projects.push(new Project(
    "projectStellar", 
    "Stellar Engine",
    "2023 - 2024",
    "/images/ProjectStellar/StellarImgOne.png",
    `In December 2023 me and a school mate started with the development of a 3D game engine made in OpenGL and C++. This project is mostly for learning but we do have many plans for it. recently we started an organization called Outer Celestics to host all the projects of the engine. Currently we have only some basics system in. more info can be found on our <a class="mailto" target="_blank" href="https://github.com/OuterCelestics">GitHub</a>.`,
    `<h1><b>Features</b></h1><br>
    <ul>
        <li>3D rendering</li>
        <li>Camera system</li>
        <li>Core/app design</li>
        <li>Config system</li>
        <li>Textures</li>
    </ul>`,
    "C++/OpenGL/GLFW",
    "",
    ""
))

// VPS
projects.push(new Project(
    "projectVPS", // ó doesnt work
    "Virtual Production Movie",
    "2022 -2023",
    "/images/ProjectVPS/VPSImgOne.png",
    "In 2023 I was involved in a virtual production movie being made by several schools and recorded at BUAS. It's a short movie about a water bomb traveling across several worlds created in Unreal Engine 5.1. I created the whole outside world of our part and helped with extra shots. Right here is the final product. Due to copyright reasons it might be unavalible to watch on this website. (Our part is the third part)",
    "During the produciton of the movie I was being appointed to be the level designer of 1 of the 2 scenes and lead of the rest of the software team.",
    "Unreal Engine 5.1/Virtual production studio at BUAS/Blender/Quixel/BlackMagic URT mini 12k/Davinci Resolve",
    "",
    `<iframe class="youtubeVideo" src="https://www.youtube.com/embed/QUf_So8vMIs?si=oyIo0kZCCz6sFDJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
))

loadPage();