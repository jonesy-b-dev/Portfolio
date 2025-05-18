function OpenText(blockNum){
    let id = "skill" + blockNum;

    let element = document.getElementById(id);

    element.style.display = element.style.display  === "block" ? "none" : "block";
}