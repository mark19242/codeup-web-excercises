const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const changeProfileName = (nameElem) => {
    const userName = prompt("What is your new name?");
    nameElem.innerText = userName;
};
function runAllTimeouts() {
    const profilePic = document.querySelector("#profile-pic");
    setTimeout(() => {
        profilePic.setAttribute("src", "./img/jason-profile.jpeg");
    }, 2000);

    const profileName = document.querySelector("#profile-name");
    setTimeout(() => {
        profileName.innerText = "Jason Merrell";
    }, 4000);

    const profileDesc = document.querySelector("#profile-desc");
    setTimeout(() => {
        profileDesc.classList.add("profile-desc");
    }, 6000);

    setTimeout(() => {
        changeProfileName(profileName);
    }, 6000);
}

const runAllIntervals = (colorsArr) => {
    const profileCard = document.querySelector("#profile-card");
    setInterval(() => {
        // get a random value from colors
        const randomIndex = Math.floor(Math.random() * colorsArr.length);
        profileCard.style.backgroundColor = colorsArr[randomIndex];
    }, 2000);
};

//MAIN
(() => {
    // THIS IS THE FIRST THING RUNNING WHEN THE PAGE LOADS
    runAllTimeouts();

    runAllIntervals(colors);
})();
