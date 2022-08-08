function changeBG(color) {
    document.body.style.backgroundColor = color;
    let text = document.getElementsByClassName('text');
    //if the color is black then change the color of h1 & p to white
    if (color == '#000000') {
        for (var elem of text) {
            elem.style.color = "white"
        }
    }
    //if the background-color is black then change the color of h1 & p to white
    else if(color == "#00008B"){
        for (var elem of text) {
            elem.style.color = "white"
        }
    }
    //if the background-color is red then change the color of h1 & p to white
    else if(color == "#FF0000"){
        for (var elem of text) {
            elem.style.color = "white"
        }
    }
    //if the background-color is blue then change the color of h1 & p to white
    else if(color == "#008000"){
        for (var elem of text) {
            elem.style.color = "white"
        }
    }

    else{
        for (var elem of text) {
            elem.style.color = "black"
        }
    }

}