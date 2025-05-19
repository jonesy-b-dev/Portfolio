function OpenText(blockNum){
    // Set active for cardBoxes
    let id = "skill" + blockNum;
    let element = document.getElementById(id);

    element.classList.toggle("active");
    element.classList.toggle("boxBorder");

    // Flip caret icon
    let caretClass = "skillCaret" + blockNum;
    let caretElement = document.getElementsByClassName(caretClass);
    
    Array.from(caretElement).forEach(element => {
        element.classList.toggle("fa-caret-down");
        element.classList.toggle("fa-caret-up");
    });
}