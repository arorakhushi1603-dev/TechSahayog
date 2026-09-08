/* =========================================
   TECHSAHAYOG
   INTERACTIVE NGO WEBSITE
========================================= */


/* =========================================
   BASIC NAVIGATION
========================================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* =========================================
   DARK MODE
========================================= */

function toggleDarkMode() {

   document.body.classList.toggle("dark");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "techsahayog-dark",
        darkModeEnabled
    );

    showToast(
        darkModeEnabled
            ? "🌙 Dark mode enabled"
            : "☀️ Light mode enabled"
    );
}


/* Load saved dark mode */

if (localStorage.getItem("techsahayog-dark") === "true") {

    document.body.classList.add("dark-mode");

}


/* =========================================
   LANGUAGE TOGGLE
========================================= */

let hindiMode = false;

function toggleLanguage() {

    hindiMode = !hindiMode;

    if (hindiMode) {

        showToast("🇮🇳 Hindi mode selected");

        document.querySelector(".tagline").innerText =
            "💚 समुदाय • तकनीक • मानवता";

        document.querySelector(".hero-content h1").innerHTML =
            "तकनीक जो <span>मानवता की सेवा करे।</span>";

    } else {

        showToast("🇬🇧 English mode selected");

        document.querySelector(".tagline").innerText =
            "💚 COMMUNITY • TECHNOLOGY • IMPACT";

        document.querySelector(".hero-content h1").innerHTML =
            "Technology that <span>serves humanity.</span>";

    }

}


/* =========================================
   IMPACT COUNTERS
========================================= */

function animateCounter(elementId, target) {

    const element = document.getElementById(elementId);

    let current = 0;

    const increment = Math.ceil(target / 80);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.innerText = current;

    }, 25);
}


/* Start counters */

window.addEventListener("load", () => {

    animateCounter("peopleCount", 2500);

    animateCounter("volunteerCount", 180);

    animateCounter("eventCount", 45);

    animateCounter("helpCount", 920);

});


/* =========================================
   PROGRAMS
========================================= */

function showProgram(programName) {

    showToast(
        `🌱 ${programName}: Thank you for your interest!`
    );

}


/* =========================================
   HELP REQUEST SYSTEM
========================================= */

document
    .getElementById("helpForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("helpName").value;

        const type =
            document.getElementById("helpType").value;

        const urgency =
            document.getElementById("urgency").value;

        if (!name || !type || !urgency) {

            showToast("⚠️ Please complete all required fields.");

            return;
        }


        /* Generate demo request ID */

        const requestNumber =
            Math.floor(1000 + Math.random() * 9000);

        const requestId =
            `TS-HELP-${requestNumber}`;


        /* Store request locally */

        const request = {

            id: requestId,

            name: name,

            type: type,

            urgency: urgency,

            date: new Date().toLocaleString(),

            status: "Pending"

        };


        let requests =
            JSON.parse(
                localStorage.getItem("techsahayog-help")
            ) || [];


        requests.push(request);


        localStorage.setItem(
            "techsahayog-help",
            JSON.stringify(requests)
        );


        showToast(
            `🆘 Request submitted! Your ID is ${requestId}`
        );


        this.reset();

    });


/* =========================================
   VOLUNTEER REGISTRATION
========================================= */

document
    .getElementById("volunteerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("volunteerName").value;

        const email =
            document.getElementById("volunteerEmail").value;

        const skill =
            document.getElementById("volunteerSkill").value;


        if (!name || !email || !skill) {

            showToast(
                "⚠️ Please fill all volunteer details."
            );

            return;
        }


        const volunteerId =
            "VOL-" +
            Math.floor(
                1000 + Math.random() * 9000
            );


        const volunteer = {

            id: volunteerId,

            name: name,

            email: email,

            skill: skill,

            status: "Pending"

        };


        let volunteers =
            JSON.parse(
                localStorage.getItem(
                    "techsahayog-volunteers"
                )
            ) || [];


        volunteers.push(volunteer);


        localStorage.setItem(
            "techsahayog-volunteers",
            JSON.stringify(volunteers)
        );


        showToast(
            `🤝 Registration successful! ID: ${volunteerId}`
        );


        this.reset();

    });


/* =========================================
   MEMBER REGISTRATION
========================================= */

document
    .getElementById("memberForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("memberName").value;

        const email =
            document.getElementById("memberEmail").value;

        const interest =
            document.getElementById("memberInterest").value;


        if (!name || !email || !interest) {

            showToast(
                "⚠️ Please complete your registration."
            );

            return;
        }


        const memberId =
            "TS-MEMBER-" +
            Math.floor(
                1000 + Math.random() * 9000
            );


        const member = {

            id: memberId,

            name: name,

            email: email,

            interest: interest,

            date: new Date().toLocaleDateString()

        };


        let members =
            JSON.parse(
                localStorage.getItem(
                    "techsahayog-members"
                )
            ) || [];


        members.push(member);


        localStorage.setItem(
            "techsahayog-members",
            JSON.stringify(members)
        );


        showToast(
            `👤 Member registered! Your ID: ${memberId}`
        );


        this.reset();

    });


/* =========================================
   DONATION
========================================= */

let selectedDonation = 0;


function selectDonation(amount) {

    selectedDonation = amount;

    document.getElementById(
        "customDonation"
    ).value = amount;

    showToast(`💰 ₹${amount} selected`);

}


function donate() {

    const customAmount =
        Number(
            document.getElementById(
                "customDonation"
            ).value
        );


    const amount =
        customAmount || selectedDonation;


    if (!amount || amount <= 0) {

        showToast(
            "⚠️ Please select or enter a donation amount."
        );

        return;
    }


    /*
       This is a frontend demo.
       Real payment gateway should be
       connected through backend.
    */

    const donation = {

        id:
            "DON-" +
            Math.floor(
                1000 + Math.random() * 9000
            ),

        amount: amount,

        date: new Date().toLocaleString()

    };


    let donations =
        JSON.parse(
            localStorage.getItem(
                "techsahayog-donations"
            )
        ) || [];


    donations.push(donation);


    localStorage.setItem(
        "techsahayog-donations",
        JSON.stringify(donations)
    );


    showToast(
        `❤️ Thank you! Demo donation of ₹${amount} recorded.`
    );

}


/* =========================================
   EVENT REGISTRATION
========================================= */

function registerEvent(eventName) {

    const eventRegistration = {

        event: eventName,

        date: new Date().toLocaleString(),

        id:
            "EVENT-" +
            Math.floor(
                1000 + Math.random() * 9000
            )

    };


    let registrations =
        JSON.parse(
            localStorage.getItem(
                "techsahayog-events"
            )
        ) || [];


    registrations.push(eventRegistration);


    localStorage.setItem(
        "techsahayog-events",
        JSON.stringify(registrations)
    );


    showToast(
        `📅 Registered for ${eventName}!`
    );

}


/* =========================================
   CERTIFICATE VERIFICATION
========================================= */

function verifyCertificate() {

    const id =
        document
            .getElementById("certificateId")
            .value
            .trim()
            .toUpperCase();


    const result =
        document.getElementById(
            "certificateResult"
        );


    if (!id) {

        result.innerHTML =
            "<p>⚠️ Please enter a certificate ID.</p>";

        return;
    }


    /*
       Demo certificates.
       Backend/database can replace this later.
    */

    const certificates = {

        "TS-2026-001": {
            name: "Demo Volunteer",
            activity: "Community Service",
            date: "15 August 2026"
        },

        "TS-2026-002": {
            name: "Demo Participant",
            activity: "Digital Literacy Workshop",
            date: "22 August 2026"
        }

    };


    if (certificates[id]) {

        const certificate =
            certificates[id];


        result.innerHTML = `

            <div class="certificate-valid">

                <strong>✓ Certificate Verified</strong>

                <p>
                    <b>Name:</b>
                    ${certificate.name}
                </p>

                <p>
                    <b>Activity:</b>
                    ${certificate.activity}
                </p>

                <p>
                    <b>Date:</b>
                    ${certificate.date}
                </p>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div class="certificate-invalid">

                ❌ Certificate ID not found.

            </div>

        `;

    }

}


/* =========================================
   GALLERY
========================================= */

function showGallery(category) {

    showToast(
        `📸 Opening ${category} gallery`
    );

}


/* =========================================
   FAQ
========================================= */

function toggleFAQ(button) {

    const faqItem =
        button.parentElement;


    const answer =
        faqItem.querySelector("p");


    const icon =
        button.querySelector("span");


    if (faqItem.classList.contains("active")) {

        faqItem.classList.remove("active");

        answer.style.maxHeight = null;

        icon.innerText = "+";

    } else {

        faqItem.classList.add("active");

        answer.style.maxHeight =
            answer.scrollHeight + "px";

        icon.innerText = "−";

    }

}


/* =========================================
   CONTACT
========================================= */

function contactAction(type) {

    if (type === "phone") {

        window.location.href =
            "tel:+919876543210";

    }


    if (type === "whatsapp") {

        window.open(
            "https://wa.me/919876543210",
            "_blank"
        );

    }


    if (type === "email") {

        window.location.href =
            "mailto:hello@techsahayog.org";

    }

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".problem-card, .program-card, .event-card, .form-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   CONSOLE INFORMATION
========================================= */

console.log(
    "%cTechSahayog",
    "font-size:25px;font-weight:bold;"
);

console.log(
    "Technology that serves humanity."
);