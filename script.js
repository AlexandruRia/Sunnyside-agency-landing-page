function toggle_window() {
    let x = document.getElementById("nav");
    if(x.className === "navigation-bar") {
        x.className += " toggle-on"
    }
    else{
        x.className = "navigation-bar"
    }
}