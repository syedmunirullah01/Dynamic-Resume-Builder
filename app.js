document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Handle image upload
    var fileInput = document.getElementById('profile-pic');
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicURL = '';
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            profilePicURL = e.target.result;
            generateResume();
        };
        reader.readAsDataURL(file);
    }
    else {
        generateResume();
    }
    function generateResume() {
        var resumeOutput = "\n          <header>\n              ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n              <h1>").concat(name, "</h1>\n              <p>Email: ").concat(email, "</p>\n              <p>Phone: ").concat(phone, "</p>\n              <p>Location: ").concat(location, "</p>\n              <p>Date of Birth: ").concat(dob, "</p>\n          </header>\n          <section id=\"education\">\n              <h2>Education</h2>\n              <p>").concat(education, "</p>\n          </section>\n          <section id=\"work-experience\">\n              <h2>Work Experience</h2>\n              <p>").concat(workExperience, "</p>\n          </section>\n          <section id=\"skills\">\n              <h2>Skills</h2>\n              <ul>\n                  ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n              </ul>\n          </section>\n      ");
        document.getElementById('resume-output').innerHTML = resumeOutput;
        document.getElementById('generated-resume').style.display = 'block';
    }
});
