function OpenText(blockNum){
    let id = "skill" + blockNum;
    let element = document.getElementById(id);

    element.classList.toggle("active");


    //element.classList.add() style.display = element.style.display  === "block" ? "none" : "block";
}