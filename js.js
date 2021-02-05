window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("buttonone").className = "buttonbottom";
        document.getElementById("buttontwo").className = "buttonbottom";
        document.getElementById("menulinkone").className = "menulinkbottom";
        document.getElementById("menulinktwo").className = "menulinkbottom";
        document.getElementById("menulinkthree").className = "menulinkbottom";
        document.getElementById("menulinkfour").className = "menulinkbottom";
        document.getElementById("github").className = "githubbottom sociallink fab fa-github";
        document.getElementById("facebook").className = "facebookbottom sociallink fab fa-facebook";
        document.getElementById("instagram").className = "instagrambottom sociallink fab fa-instagram";
        document.getElementById("youtube").className = "youtubebottom sociallink fab fa-youtube";
    } else {
        document.getElementById("buttonone").className = "normalbutton";
        document.getElementById("buttontwo").className = "normalbutton";
        document.getElementById("menulinkone").className = "menulinknormal";
        document.getElementById("menulinktwo").className = "menulinknormal";
        document.getElementById("menulinkthree").className = "menulinknormal";
        document.getElementById("menulinkfour").className = "menulinknormal";
        document.getElementById("github").className = "socialnormal sociallink fab fa-github";
        document.getElementById("facebook").className = "socialnormal sociallink fab fa-facebook";
        document.getElementById("instagram").className = "socialnormal sociallink fab fa-instagram";
        document.getElementById("youtube").className = "socialnormal sociallink fab fa-youtube";
    }
};