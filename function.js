// Change Theme
window.addEventListener('load',
    function LoadTheme() {
        if (localStorage.theme) {
            if (localStorage.theme == "dark") {
                SetThemeDark();
            }
            else {
                SetThemeLight();
            }
        }
        else {
            localStorage.setItem("theme","light");
        }
    }
);
function ChangeTheme() {
    if (localStorage.theme == "dark") {
        SetThemeLight();
        localStorage.theme = "light";
    }
    else {
        SetThemeDark();
        localStorage.theme = "dark";
    }
}
function SetThemeDark() {
    let a = document.getElementsByTagName('body')[0];
    a.style.backgroundColor = '#333';
    a.style.color = '#f2f2f2';
}
function SetThemeLight() {
    let a = document.getElementsByTagName('body')[0];
    a.style.backgroundColor = '#f2f2f2';
    a.style.color = '#222';
}

// Change Top Button
window.addEventListener('load', 
    function LoadTopButton() {
        if (localStorage.topbutton) {
            switch(localStorage.topbutton) {
                case "bottomright":
                    SetBottomRight();
                    break;
                case "bottomleft":
                    SetBottomLeft();
                    break;
                case "topleft":
                    SetTopLeft();
                    break;
                case "topright":
                    SetTopRight();
                    break;
                default:
                    SetBottomRight();
            }
        }
        else {
            localStorage.setItem("topbutton","bottomright");
            SetBottomRight();
        }
    }
);
function ChangeTopButton() {
    switch(localStorage.topbutton) {
        case "bottomright":
            SetBottomLeft();
            localStorage.topbutton = "bottomleft";
            break;
        case "bottomleft":
            SetTopLeft();
            localStorage.topbutton = "topleft";
            break;
        case "topleft":
            SetTopRight();
            localStorage.topbutton = "topright";
            break;
        case "topright":
            SetBottomRight();
            localStorage.topbutton = "bottomright";
            break;
        default:
            SetBottomRight();
            localStorage.topbutton = "bottomright";
    }
}
function TopButton() {
    document.documentElement.scrollTop = 0;
}
function SetBottomLeft() {
    let a = document.getElementById("topbutton");
    a.style.right = "auto";
    a.style.top = "auto";
    a.style.left = "5px";
    a.style.bottom = "5px";
}
function SetBottomRight() {
    let a = document.getElementById("topbutton");
    a.style.left = "auto";
    a.style.top = "auto";
    a.style.right = "5px";
    a.style.bottom = "5px";
}
function SetTopLeft() {
    let a = document.getElementById("topbutton");
    a.style.right = "auto";
    a.style.bottom = "auto";
    a.style.left = "5px";
    a.style.top = "5px";
}
function SetTopRight() {
    let a = document.getElementById("topbutton");
    a.style.left = "auto";
    a.style.bottom = "auto";
    a.style.right = "5px";
    a.style.top = "5px";
}

// Toggle Top Button
window.addEventListener('load',
    function LoadTopButtonOnLoad() {
	   if (localStorage.displayButton) {
		  if (localStorage.displayButton == "no") {
		  	DeleteTopButton();
		  }
	   }
	   else {
		  localStorage.setItem("displayButton","yes");
	   }
    }
);
function ToggleTopButton() {
    if (localStorage.displayButton == "yes") {
        DeleteTopButton();
        localStorage.displayButton = "no";
    }
    else {
        ShowTopButton();
        localStorage.displayButton = "yes";
    }
}
function DeleteTopButton() {
    let a = document.getElementById("topbutton");
    a.classList.add("displaynone");
}
function ShowTopButton() {
    let a = document.getElementById("topbutton");
    a.classList.remove("displaynone");
}