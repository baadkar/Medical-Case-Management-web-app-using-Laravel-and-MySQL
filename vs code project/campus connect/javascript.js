/* =====================================================
   CAMPUS CONNECT JAVASCRIPT
===================================================== */


/* =====================================================
   SIGNUP
===================================================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const email =
            document.getElementById("email").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        if (password.length < 8) {

            alert("Password must contain at least 8 characters.");

            return;
        }


        if (!email.includes("@")) {

            alert("Please enter a valid college email.");

            return;
        }


        /*
            Temporary frontend demo.

            Later this will send the data to:

            PHP → MySQL

            Example:

            fetch("register.php", {
                method: "POST",
                body: new FormData(signupForm)
            });
        */


        alert(
            "Account created successfully! " +
            "You can now login."
        );


        window.location.href = "login.html";

    });

}


/* =====================================================
   LOGIN
===================================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        if (email === "" || password === "") {

            alert("Please enter your login details.");

            return;
        }


        /*
            Temporary frontend login.

            Later:

            JavaScript
                  ↓
            login.php
                  ↓
            MySQL
                  ↓
            PHP Session
        */


        localStorage.setItem(
            "campusUser",
            email
        );


        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

const showPassword =
    document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("click", function () {

        const password =
            document.getElementById("loginPassword");

        const icon =
            this.querySelector("i");


        if (password.type === "password") {

            password.type = "text";

            icon.classList.remove("bi-eye");

            icon.classList.add("bi-eye-slash");

        } else {

            password.type = "password";

            icon.classList.remove("bi-eye-slash");

            icon.classList.add("bi-eye");

        }

    });

}


/* =====================================================
   SIDEBAR
===================================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    if (sidebar) {

        sidebar.classList.toggle("show");

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

    localStorage.removeItem("campusUser");

}


/* =====================================================
   HELP ME
===================================================== */

function requestHelp() {

    const confirmation = confirm(
        "Do you need assistance from authorized college staff?"
    );


    if (!confirmation) {

        return;

    }


    /*
        IMPORTANT:

        In the real system,
        location should only be shared
        after explicit permission.

        Later this can use:

        navigator.geolocation.getCurrentPosition()
    */


    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;


                console.log(
                    "Location:",
                    latitude,
                    longitude
                );


                alert(
                    "Help request submitted.\n\n" +
                    "Authorized college staff have been notified."
                );

            },

            function () {

                alert(
                    "Help request submitted without location."
                );

            }

        );

    } else {

        alert(
            "Help request submitted."
        );

    }

}


/* =====================================================
   GLOBAL SEARCH
===================================================== */

const globalSearch =
    document.getElementById("globalSearch");

if (globalSearch) {

    globalSearch.addEventListener(
        "keyup",
        function () {

            const searchText =
                this.value.toLowerCase().trim();


            if (searchText === "") {

                return;

            }


            /*
                In the complete system,
                this search will query:

                Announcements
                Notes
                Events
                Clubs
                Study Groups
                Lost & Found
                Internships
                Jobs

                from MySQL through PHP.
            */


            console.log(
                "Searching Campus Connect for:",
                searchText
            );

        }
    );

}


/* =====================================================
   PROFILE FORM
===================================================== */

const profileForm =
    document.getElementById("profileForm");

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Profile changes saved successfully."
            );

        }
    );

}


/* =====================================================
   SAVE / BOOKMARK
===================================================== */

function saveItem(itemName) {

    let savedItems =
        JSON.parse(
            localStorage.getItem("savedItems")
        ) || [];


    if (!savedItems.includes(itemName)) {

        savedItems.push(itemName);

        localStorage.setItem(
            "savedItems",
            JSON.stringify(savedItems)
        );

        alert(
            itemName + " saved successfully."
        );

    } else {

        alert(
            itemName + " is already saved."
        );

    }

}


/* =====================================================
   EVENT REGISTRATION
===================================================== */

function registerEvent(eventName) {

    let registeredEvents =
        JSON.parse(
            localStorage.getItem("registeredEvents")
        ) || [];


    if (!registeredEvents.includes(eventName)) {

        registeredEvents.push(eventName);

        localStorage.setItem(
            "registeredEvents",
            JSON.stringify(registeredEvents)
        );

        alert(
            "You have successfully registered for " +
            eventName
        );

    } else {

        alert(
            "You are already registered for this event."
        );

    }

}


/* =====================================================
   JOIN STUDY GROUP
===================================================== */

function joinStudyGroup(groupName) {

    alert(
        "Join request sent to " +
        groupName
    );

}


/* =====================================================
   JOIN CLUB
===================================================== */

function joinClub(clubName) {

    alert(
        "Join request sent for " +
        clubName
    );

}


/* =====================================================
   LOST ITEM
===================================================== */

function reportLostItem() {

    const item =
        prompt("Enter the name of the lost item:");

    if (!item) {

        return;

    }


    const location =
        prompt("Where did you last see the item?");


    alert(
        "Lost item report created.\n\n" +
        "Item: " + item +
        "\nLocation: " + location
    );

}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Campus Connect loaded successfully."
        );

    }
);
