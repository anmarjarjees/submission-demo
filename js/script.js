/*
    JavaScript HTML DOM EventListener
    Method: addEventListener()
    addEventListener(argument1, argument2)
    argument1 = the name of the event, examples: "click", "mouseover", "mouseout", ....
    argument2 = our own function that we want to run/trigger or other JS code we want to run

    Notice that argument2 could be:
    - the name of our function without ()
    - it could be the function block itself [Anonymous Function]

    W3Schools: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/

let menuItems = document.getElementById("menu-items");
let loginBtn = document.getElementById("loginBtn");
let hamChkbx = document.getElementById("hamburger");

function clickLogin() {
    let newListItems = ["Loans", "Finance", "Dept"];
    for (let i = 0; i < 3; i++) {
        let itemList = document.createElement('li');
        itemList.setAttribute('class', 'temp');

        let itemLink = document.createElement('a');
        itemLink.setAttribute('href', '#');
        itemLink.appendChild(document.createTextNode(newListItems[i]));
        itemList.appendChild(itemLink);

        // This code for inserting at the end of the existing list items:
        // menuItems.appendChild(itemList);

        // This code for inserting at the top of the existing list items:
        menuItems.insertBefore(itemList, menuItems.firstChild);
    }

    window.scrollTo(0, document.body.scrollHeight);
}

function closeMenu() {
    if (!hamChkbx.checked) {
        let tempItems = document.querySelectorAll('.temp');
        tempItems.forEach(item => {
            item.remove();
        });
        window.scrollTo(0, document.body.scrollTop);
    }
}


loginBtn.addEventListener('click', clickLogin);
hamChkbx.addEventListener('click', closeMenu);

// The following part for the slider:
let slideIndex = 1;
showDivs(slideIndex);

function jumpToItem(n) {
    showDivs(slideIndex += n);
}

function clickItemNum(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let slideList = document.getElementsByClassName("slide");
    let dotList = document.getElementsByClassName("numBtn");

    if (n > slideList.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slideList.length
    }

    for (let i = 0; i < slideList.length; i++) {
        slideList[i].style.display = "none";
    }

    slideList[slideIndex - 1].style.display = "block";
}