
overlay1 = document.getElementById("overlay1");
overlay2 = document.getElementById("overlay2");
overlay3 = document.getElementById("overlay3");
overlay4 = document.getElementById("overlay4");
overlay5 = document.getElementById("overlay5");
overlay6 = document.getElementById("overlay6");
overlay7 = document.getElementById("overlay7");
overlay8 = document.getElementById("overlay8");
overlay9 = document.getElementById("overlay9");
overlay = document.getElementsByClassName("boxOverlay")
// circles -----
Circle1 = document.getElementById("circle1")
Circle2 = document.getElementById("circle2")
Circle3 = document.getElementById("circle3")
Circle4 = document.getElementById("circle4")
Circle5 = document.getElementById("circle5")
Circle6 = document.getElementById("circle6")
Circle7 = document.getElementById("circle7")
Circle8 = document.getElementById("circle8")
Circle9 = document.getElementById("circle9")
Circle10 = document.getElementById("circle10")
Circle11 = document.getElementById("circle11")
Circle12 = document.getElementById("circle12")
Circle13 = document.getElementById("circle13")
Circle14 = document.getElementById("circle14")
Circle15 = document.getElementById("circle15")
Circle16 = document.getElementById("circle16")
Circle17 = document.getElementById("circle17")
Circle18 = document.getElementById("circle18")
Circle19 = document.getElementById("circle19")
Circle20 = document.getElementById("circle20")
Circle21 = document.getElementById("circle21")
Circle22 = document.getElementById("circle22")
Circle23 = document.getElementById("circle23")
Circle24 = document.getElementById("circle24")
Circle25 = document.getElementById("circle25")
Circle26 = document.getElementById("circle26")
Circle27 = document.getElementById("circle27")
Circle28 = document.getElementById("circle28")
Circle29 = document.getElementById("circle29")
Circle30 = document.getElementById("circle30")
Circle31 = document.getElementById("circle31")
Circle32 = document.getElementById("circle32")
Circle33 = document.getElementById("circle33")
Circle34 = document.getElementById("circle34")
Circle35 = document.getElementById("circle35")
Circle36 = document.getElementById("circle36")
Circle37 = document.getElementById("circle37")
Circle38 = document.getElementById("circle38")
Circle39 = document.getElementById("circle39")
Circle40 = document.getElementById("circle40")
Circle41 = document.getElementById("circle41")
Circle42 = document.getElementById("circle42")
Circle43 = document.getElementById("circle43")
Circle44 = document.getElementById("circle44")
Circle45 = document.getElementById("circle45")
Circle46 = document.getElementById("circle46")
Circle47 = document.getElementById("circle47")
Circle48 = document.getElementById("circle48")
Circle49 = document.getElementById("circle49")
Circle50 = document.getElementById("circle50")
Circle51 = document.getElementById("circle51")
Circle52 = document.getElementById("circle52")
Circle53 = document.getElementById("circle53")
Circle54 = document.getElementById("circle54")
Circle55 = document.getElementById("circle55")
Circle56 = document.getElementById("circle56")
Circle57 = document.getElementById("circle57")
Circle58 = document.getElementById("circle58")
Circle59 = document.getElementById("circle59")
Circle60 = document.getElementById("circle60")
Circle61 = document.getElementById("circle61")
Circle62 = document.getElementById("circle62")
Circle63 = document.getElementById("circle63")
Circle64 = document.getElementById("circle64")
Circle65 = document.getElementById("circle65")
Circle66 = document.getElementById("circle66")
Circle67 = document.getElementById("circle67")
Circle68 = document.getElementById("circle68")
Circle69 = document.getElementById("circle69")
Circle70 = document.getElementById("circle70")
Circle71 = document.getElementById("circle71")
Circle72 = document.getElementById("circle72")
Circle73 = document.getElementById("circle73")
Circle74 = document.getElementById("circle74")
Circle75 = document.getElementById("circle75")
Circle76 = document.getElementById("circle76")
Circle77 = document.getElementById("circle77")
Circle78 = document.getElementById("circle78")
Circle79 = document.getElementById("circle79")
Circle80 = document.getElementById("circle80")
Circle81 = document.getElementById("circle81")

var x = 0; // ------------------ ultimate decider
var counter = 0;

// cross and circle interchange
function counter1() {
    x += 1;
}


// Chat ---
function hide() {
    chat = document.getElementById("chat");
    header = document.getElementById("header");
    cbox = document.getElementById("cbox");
    send = document.getElementById("send");
    console.log()
    counter += 1;
    if (counter % 2 != 0) {
        cbox.classList.add("sendCboxClick");
        send.classList.add("sendCboxClick");
        chat.classList.add("chatClick")
        header.classList.add("headerClick")
    } else {
        header.classList.remove("headerClick")
        cbox.classList.remove("sendCboxClick");
        send.classList.remove("sendCboxClick");
        chat.classList.remove("chatClick")
    }
}

// win box ---

function win1() {
    circle = document.getElementById("circleOverlay1")
    cross = document.getElementById("crossOverlay1")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle1.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle9.classList.contains("circleFix") || Circle3.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle7.classList.contains("circleFix") || Circle1.classList.contains("circleFix") && Circle4.classList.contains("circleFix") && Circle7.classList.contains("circleFix") || Circle2.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle8.classList.contains("circleFix") || Circle3.classList.contains("circleFix") && Circle6.classList.contains("circleFix") && Circle9.classList.contains("circleFix") || Circle1.classList.contains("circleFix") && Circle2.classList.contains("circleFix") && Circle3.classList.contains("circleFix") || Circle4.classList.contains("circleFix") && Circle5.classList.contains("circleFix") && Circle6.classList.contains("circleFix") || Circle7.classList.contains("circleFix") && Circle8.classList.contains("circleFix") && Circle9.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin")
    }
    if (cross1.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross9.classList.contains("crossFix") || cross3.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross7.classList.contains("crossFix") || cross1.classList.contains("crossFix") && cross4.classList.contains("crossFix") && cross7.classList.contains("crossFix") || cross2.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross8.classList.contains("crossFix") || cross3.classList.contains("crossFix") && cross6.classList.contains("crossFix") && cross9.classList.contains("crossFix") || cross1.classList.contains("crossFix") && cross2.classList.contains("crossFix") && cross3.classList.contains("crossFix") || cross4.classList.contains("crossFix") && cross5.classList.contains("crossFix") && cross6.classList.contains("crossFix") || cross7.classList.contains("crossFix") && cross8.classList.contains("crossFix") && cross9.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin")
    }
}
function win2() {
    circle = document.getElementById("circleOverlay2")
    cross = document.getElementById("crossOverlay2")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle10.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle18.classList.contains("circleFix") || Circle12.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle16.classList.contains("circleFix") || Circle10.classList.contains("circleFix") && Circle13.classList.contains("circleFix") && Circle16.classList.contains("circleFix") || Circle11.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle17.classList.contains("circleFix") || Circle12.classList.contains("circleFix") && Circle15.classList.contains("circleFix") && Circle18.classList.contains("circleFix") || Circle10.classList.contains("circleFix") && Circle11.classList.contains("circleFix") && Circle12.classList.contains("circleFix") || Circle13.classList.contains("circleFix") && Circle14.classList.contains("circleFix") && Circle15.classList.contains("circleFix") || Circle16.classList.contains("circleFix") && Circle17.classList.contains("circleFix") && Circle18.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin")
    }
    if (cross10.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross18.classList.contains("crossFix") || cross12.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross16.classList.contains("crossFix") || cross10.classList.contains("crossFix") && cross13.classList.contains("crossFix") && cross16.classList.contains("crossFix") || cross11.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross17.classList.contains("crossFix") || cross12.classList.contains("crossFix") && cross15.classList.contains("crossFix") && cross18.classList.contains("crossFix") || cross10.classList.contains("crossFix") && cross11.classList.contains("crossFix") && cross12.classList.contains("crossFix") || cross13.classList.contains("crossFix") && cross14.classList.contains("crossFix") && cross15.classList.contains("crossFix") || cross16.classList.contains("crossFix") && cross17.classList.contains("crossFix") && cross18.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin")
    }
}
function win3() {
    circle = document.getElementById("circleOverlay3")
    cross = document.getElementById("crossOverlay3")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle19.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle27.classList.contains("circleFix") || Circle21.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle25.classList.contains("circleFix") || Circle19.classList.contains("circleFix") && Circle22.classList.contains("circleFix") && Circle25.classList.contains("circleFix") || Circle20.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle26.classList.contains("circleFix") || Circle21.classList.contains("circleFix") && Circle24.classList.contains("circleFix") && Circle27.classList.contains("circleFix") || Circle19.classList.contains("circleFix") && Circle20.classList.contains("circleFix") && Circle21.classList.contains("circleFix") || Circle22.classList.contains("circleFix") && Circle23.classList.contains("circleFix") && Circle24.classList.contains("circleFix") || Circle25.classList.contains("circleFix") && Circle26.classList.contains("circleFix") && Circle27.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin")

    }    
    if (cross19.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross27.classList.contains("crossFix") || cross21.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross25.classList.contains("crossFix") || cross19.classList.contains("crossFix") && cross22.classList.contains("crossFix") && cross25.classList.contains("crossFix") || cross20.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross26.classList.contains("crossFix") || cross21.classList.contains("crossFix") && cross24.classList.contains("crossFix") && cross27.classList.contains("crossFix") || cross19.classList.contains("crossFix") && cross20.classList.contains("crossFix") && cross21.classList.contains("crossFix") || cross22.classList.contains("crossFix") && cross23.classList.contains("crossFix") && cross24.classList.contains("crossFix") || cross25.classList.contains("crossFix") && cross26.classList.contains("crossFix") && cross27.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin")

    }
}
function win4() {    circle = document.getElementById("circleOverlay4")
    cross = document.getElementById("crossOverlay4")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle28.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle36.classList.contains("circleFix") || Circle30.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle34.classList.contains("circleFix") || Circle28.classList.contains("circleFix") && Circle31.classList.contains("circleFix") && Circle34.classList.contains("circleFix") || Circle29.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle35.classList.contains("circleFix") || Circle30.classList.contains("circleFix") && Circle33.classList.contains("circleFix") && Circle36.classList.contains("circleFix") || Circle28.classList.contains("circleFix") && Circle29.classList.contains("circleFix") && Circle30.classList.contains("circleFix") || Circle31.classList.contains("circleFix") && Circle32.classList.contains("circleFix") && Circle33.classList.contains("circleFix") || Circle34.classList.contains("circleFix") && Circle35.classList.contains("circleFix") && Circle36.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin")

    }
    if (cross28.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross36.classList.contains("crossFix") || cross30.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross34.classList.contains("crossFix") || cross28.classList.contains("crossFix") && cross31.classList.contains("crossFix") && cross34.classList.contains("crossFix") || cross29.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross35.classList.contains("crossFix") || cross30.classList.contains("crossFix") && cross33.classList.contains("crossFix") && cross36.classList.contains("crossFix") || cross28.classList.contains("crossFix") && cross29.classList.contains("crossFix") && cross30.classList.contains("crossFix") || cross31.classList.contains("crossFix") && cross32.classList.contains("crossFix") && cross33.classList.contains("crossFix") || cross34.classList.contains("crossFix") && cross35.classList.contains("crossFix") && cross36.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin")
    }
}
function win5() {
    circle = document.getElementById("circleOverlay5")
    cross = document.getElementById("crossOverlay5")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle37.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle40.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle38.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle44.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle42.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle38.classList.contains("circleFix") && Circle39.classList.contains("circleFix") || Circle40.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle42.classList.contains("circleFix") || Circle43.classList.contains("circleFix") && Circle44.classList.contains("circleFix") && Circle45.classList.contains("circleFix")) {        circle.classList.add("circleFix2")
ansOverlay.classList.add("Gwin")
    }
    if (cross37.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross40.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross38.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross44.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross42.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross38.classList.contains("crossFix") && cross39.classList.contains("crossFix") || cross40.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross42.classList.contains("crossFix") || cross43.classList.contains("crossFix") && cross44.classList.contains("crossFix") && cross45.classList.contains("crossFix")) {
        ansOverlay.classList.add("Ywin")

    }
}
function win6() {
    circle = document.getElementById("circleOverlay6")    
    cross = document.getElementById("crossOverlay6")
    ansOverlay = document.getElementById("ansOverlay")
    if (Circle37.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle40.classList.contains("circleFix") && Circle43.classList.contains("circleFix") || Circle38.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle44.classList.contains("circleFix") || Circle39.classList.contains("circleFix") && Circle42.classList.contains("circleFix") && Circle45.classList.contains("circleFix") || Circle37.classList.contains("circleFix") && Circle38.classList.contains("circleFix") && Circle39.classList.contains("circleFix") || Circle40.classList.contains("circleFix") && Circle41.classList.contains("circleFix") && Circle42.classList.contains("circleFix") || Circle43.classList.contains("circleFix") && Circle44.classList.contains("circleFix") && Circle45.classList.contains("circleFix")) {
        ansOverlay.classList.add("Gwin")

    }
    if (cross37.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross40.classList.contains("crossFix") && cross43.classList.contains("crossFix") || cross38.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross44.classList.contains("crossFix") || cross39.classList.contains("crossFix") && cross42.classList.contains("crossFix") && cross45.classList.contains("crossFix") || cross37.classList.contains("crossFix") && cross38.classList.contains("crossFix") && cross39.classList.contains("crossFix") || cross40.classList.contains("crossFix") && cross41.classList.contains("crossFix") && cross42.classList.contains("crossFix") || cross43.classList.contains("crossFix") && cross44.classList.contains("crossFix") && cross45.classList.contains("crossFix")) {        overlay6.classList.add("displayIMP");
        ansOverlay.classList.add("Ywin")

    }
}

// onclick circle and cross ---

function circle1() {
    cross = document.getElementById("cross1");
    circle = document.getElementById("circle1");        
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
    }

}
function circle2() {
    cross = document.getElementById("cross2");
    circle = document.getElementById("circle2");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle3() {
    cross = document.getElementById("cross3");
    circle = document.getElementById("circle3");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle4() {
    cross = document.getElementById("cross4");
    circle = document.getElementById("circle4");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle5() {
    cross = document.getElementById("cross5");
    circle = document.getElementById("circle5");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle6() {
    cross = document.getElementById("cross6");
    circle = document.getElementById("circle6");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle7() {
    cross = document.getElementById("cross7");
    circle = document.getElementById("circle7");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle8() {
    cross = document.getElementById("cross8");
    circle = document.getElementById("circle8");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle9() {
    cross = document.getElementById("cross9");
    circle = document.getElementById("circle9");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle10() {
    cross = document.getElementById("cross10");
    circle = document.getElementById("circle10");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle11() {
    cross = document.getElementById("cross11");
    circle = document.getElementById("circle11");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle12() {
    cross = document.getElementById("cross12");
    circle = document.getElementById("circle12");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle13() {
    cross = document.getElementById("cross13");
    circle = document.getElementById("circle13");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle14() {
    cross = document.getElementById("cross14");
    circle = document.getElementById("circle14");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle15() {
    cross = document.getElementById("cross15");
    circle = document.getElementById("circle15");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle16() {
    cross = document.getElementById("cross16");
    circle = document.getElementById("circle16");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle17() {
    cross = document.getElementById("cross17");
    circle = document.getElementById("circle17");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle18() {
    cross = document.getElementById("cross18");
    circle = document.getElementById("circle18");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle19() {
    cross = document.getElementById("cross19");
    circle = document.getElementById("circle19");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
            for (var i = 0, max = overlay.length; i < max; i++) {
                overlay[i].style.display = "none";
            }
            overlay1.style.display = "flex";
            console.log("doneeeeeee")
        } else {
            overlay1.style.display = "none";
        }

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
            for (var i = 0, max = overlay.length; i < max; i++) {
                overlay[i].style.display = "none";
            }
            overlay1.style.display = "flex";
            console.log("doneeeeeee")
        } else {
            overlay1.style.display = "none";
        }
    }
}
function circle20() {
    cross = document.getElementById("cross20");
    circle = document.getElementById("circle20");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle21() {
    cross = document.getElementById("cross21");
    circle = document.getElementById("circle21");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle22() {
    cross = document.getElementById("cross22");
    circle = document.getElementById("circle22");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle23() {
    cross = document.getElementById("cross23");
    circle = document.getElementById("circle23");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle24() {
    cross = document.getElementById("cross24");
    circle = document.getElementById("circle24");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle25() {
    cross = document.getElementById("cross25");
    circle = document.getElementById("circle25");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle26() {
    cross = document.getElementById("cross26");
    circle = document.getElementById("circle26");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle27() {
    cross = document.getElementById("cross27");
    circle = document.getElementById("circle27");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle28() {
    cross = document.getElementById("cross28");
    circle = document.getElementById("circle28");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle29() {
    cross = document.getElementById("cross29");
    circle = document.getElementById("circle29");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle30() {
    cross = document.getElementById("cross30");
    circle = document.getElementById("circle30");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle31() {
    cross = document.getElementById("cross31");
    circle = document.getElementById("circle31");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle32() {
    cross = document.getElementById("cross32");
    circle = document.getElementById("circle32");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle33() {
    cross = document.getElementById("cross33");
    circle = document.getElementById("circle33");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle34() {
    cross = document.getElementById("cross34");
    circle = document.getElementById("circle34");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle35() {
    cross = document.getElementById("cross35");
    circle = document.getElementById("circle35");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle36() {
    cross = document.getElementById("cross36");
    circle = document.getElementById("circle36");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle37() {
    cross = document.getElementById("cross37");
    circle = document.getElementById("circle37");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle38() {
    cross = document.getElementById("cross38");
    circle = document.getElementById("circle38");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle39() {
    cross = document.getElementById("cross39");
    circle = document.getElementById("circle39");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle40() {
    cross = document.getElementById("cross40");
    circle = document.getElementById("circle40");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle41() {
    cross = document.getElementById("cross41");
    circle = document.getElementById("circle41");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle42() {
    cross = document.getElementById("cross42");
    circle = document.getElementById("circle42");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle43() {
    cross = document.getElementById("cross43");
    circle = document.getElementById("circle43");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle44() {
    cross = document.getElementById("cross44");
    circle = document.getElementById("circle44");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle45() {
    cross = document.getElementById("cross45");
    circle = document.getElementById("circle45");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle46() {
    cross = document.getElementById("cross46");
    circle = document.getElementById("circle46");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle47() {
    cross = document.getElementById("cross47");
    circle = document.getElementById("circle47");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle48() {
    cross = document.getElementById("cross48");
    circle = document.getElementById("circle48");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle49() {
    cross = document.getElementById("cross49");
    circle = document.getElementById("circle49");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle50() {
    cross = document.getElementById("cross50");
    circle = document.getElementById("circle50");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle51() {
    cross = document.getElementById("cross51");
    circle = document.getElementById("circle51");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle52() {
    cross = document.getElementById("cross52");
    circle = document.getElementById("circle52");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle53() {
    cross = document.getElementById("cross53");
    circle = document.getElementById("circle53");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle54() {
    cross = document.getElementById("cross54");
    circle = document.getElementById("circle54");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle55() {
    cross = document.getElementById("cross55");
    circle = document.getElementById("circle55");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle56() {
    cross = document.getElementById("cross56");
    circle = document.getElementById("circle56");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle57() {
    cross = document.getElementById("cross57");
    circle = document.getElementById("circle57");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle58() {
    cross = document.getElementById("cross58");
    circle = document.getElementById("circle58");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle59() {
    cross = document.getElementById("cross59");
    circle = document.getElementById("circle59");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle60() {
    cross = document.getElementById("cross60");
    circle = document.getElementById("circle60");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle61() {
    cross = document.getElementById("cross61");
    circle = document.getElementById("circle61");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle62() {
    cross = document.getElementById("cross62");
    circle = document.getElementById("circle62");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle63() {
    cross = document.getElementById("cross63");
    circle = document.getElementById("circle63");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle64() {
    cross = document.getElementById("cross64");
    circle = document.getElementById("circle64");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"

            if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }} else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay1.style.display = "none"
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle65() {
    cross = document.getElementById("cross65");
    circle = document.getElementById("circle65");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle66() {
    cross = document.getElementById("cross66");
    circle = document.getElementById("circle66");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle67() {
    cross = document.getElementById("cross67");
    circle = document.getElementById("circle67");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle68() {
    cross = document.getElementById("cross68");
    circle = document.getElementById("circle68");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle69() {
    cross = document.getElementById("cross69");
    circle = document.getElementById("circle69");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle70() {
    cross = document.getElementById("cross70");
    circle = document.getElementById("circle70");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle71() {
    cross = document.getElementById("cross71");
    circle = document.getElementById("circle71");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle72() {
    cross = document.getElementById("cross72");
    circle = document.getElementById("circle72");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}
function circle73() {
    cross = document.getElementById("circle73");
    circle = document.getElementById("circle73");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        if (overlay1.classList.contains("displayIMP")) {
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.display = "none";
        }
        overlay1.style.display = "flex";
        console.log("doneeeeeee")
    } else {
        overlay1.style.display = "none";
    }
    }
    
}
function circle74() {
    cross = document.getElementById("cross74");
    circle = document.getElementById("circle74");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay2.style.display = "none"
    }
}
function circle75() {
    cross = document.getElementById("cross75");
    circle = document.getElementById("circle75");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay3.style.display = "none"
    }
}
function circle76() {
    cross = document.getElementById("cross76");
    circle = document.getElementById("circle76");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay4.style.display = "none"
    }
}
function circle77() {
    cross = document.getElementById("cross77");
    circle = document.getElementById("circle77");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay5.style.display = "none"
    }
}
function circle78() {
    cross = document.getElementById("cross78");
    circle = document.getElementById("circle78");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay6.style.display = "none"
    }
}
function circle79() {
    cross = document.getElementById("cross79");
    circle = document.getElementById("circle79");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay7.style.display = "none"
    }
}
function circle80() {
    cross = document.getElementById("cross80");
    circle = document.getElementById("circle80");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay8.style.display = "none"
    }
}
function circle81() {
    cross = document.getElementById("cross81");
    circle = document.getElementById("circle81");
    if (x % 2 == 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("circleFix")
        circle.classList.add("clicked")
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"

    } else if (x % 2 != 0 && !circle.classList.contains("clicked")) {
        circle.classList.add("clicked")
        cross.classList.add("crossFix");
        for (var i = 0, max = overlay.length; i < max; i++) {
            overlay[i].style.animation = "visible forwards 400ms ease running"
            overlay[i].style.display = "flex";
        }
        overlay9.style.display = "none"
    }
}