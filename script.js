//Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their IDs
    var profilePictureInput = document.getElementById("profile-picture");
    var nameElement = document.getElementById("name");
    var contactElement = document.getElementById("contact");
    var emailElement = document.getElementById("email");
    var addressElement = document.getElementById("address");
    var ageElement = document.getElementById("age");
    var educationElement = document.getElementById("education");
    var WorkexperienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var certificationsElement = document.getElementById("certifications");
    var hobbiesElement = document.getElementById("hobbies");
    var usernameElement = document.getElementById("username");
    //Check if all form elements are present
    if (profilePictureInput && nameElement && contactElement && emailElement && addressElement && ageElement && educationElement && WorkexperienceElement && skillsElement && certificationsElement && hobbiesElement && usernameElement) {
        var name_1 = nameElement.value;
        var contact = contactElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var age = ageElement.value;
        var education = educationElement.value;
        var Workexperience = WorkexperienceElement.value;
        var skills = skillsElement.value;
        var certifications = certificationsElement.value;
        var hobbies = hobbiesElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n    <p><strong>Name:</strong>").concat(name_1, "</p>\n    <p><strong>Contact:</strong>").concat(contact, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n    <p><strong>age:</strong>").concat(age, "</p>\n   \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Work Experience</h3>\n    <p>").concat(Workexperience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Certifications</h3>\n    <p>").concat(certifications, "</p>\n\n    <h3>Hobbies</h3>\n    <p>").concat(hobbies, "</p>\n    ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8, ".concat(encodeURIComponent(resumeOutput));
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024Resume";
        //Display Resume Output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("One or more output elements are missing.");
    }
});
