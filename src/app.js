
//Create Album Class
//constructor for Album


class Album { //class decleration
    constructor (title, artist, url) {
        this.title = title;
        this.artist = artist;
        this.url = url;
    }
}
class UI {
    //Create UI class, what does the UI look like. Methods for changing UI? Displaying Albums.
    //1. display album
    displayAlbum(album) {`<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%" alt=""></div><div class="remove-album">Remove Album X</div>` 
    let newHtml = newHtml.replace("%title%", album.title);
    newHtml = newHtml.replace("%artist%", album.artist);
    newHtml = newHtml.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
    }
    //2. clear out input fields method
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("url").value = "";
    }
    //3. Delete album method
}
//Event Listener for the form, control flow, init function
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    //get values from user
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const url = document.getElementById("url").value;
    //instantiate or get new instance of Album
    const album = new Album(title, artist, url);
    const ui = new UI();
    ui.displayAlbum(album);
    ui.clearFields();
})