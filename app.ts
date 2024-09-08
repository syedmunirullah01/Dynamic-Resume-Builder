document.getElementById('resume-form')!.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const location = (document.getElementById('location') as HTMLInputElement).value;
  const dob = (document.getElementById('dob') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Display values in the resume section
  (document.getElementById('displayName') as HTMLHeadingElement).textContent = name;
  (document.getElementById('displayEmail') as HTMLParagraphElement).textContent = `Email: ${email}`;
  (document.getElementById('displayPhone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
  (document.getElementById('displayLocation') as HTMLParagraphElement).textContent = `Location: ${location}`;
  (document.getElementById('displayDob') as HTMLParagraphElement).textContent = `Date of Birth: ${dob}`;
  (document.getElementById('displayEducation') as HTMLParagraphElement).textContent = education;
  (document.getElementById('displayWorkExperience') as HTMLParagraphElement).textContent = workExperience;

  const skillsList = document.getElementById('displaySkills') as HTMLUListElement;
  skillsList.innerHTML = ''; // Clear any previous entries
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  // Handle image upload
  const fileInput = document.getElementById('profile-pic') as HTMLInputElement;
  const file = fileInput.files?.[0];
  const displayImage = document.getElementById('displayImage') as HTMLImageElement;

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      displayImage.src = event.target?.result as string;
      displayImage.style.display = 'block'; // Show the image
    };
    reader.readAsDataURL(file);
  } else {
    displayImage.style.display = 'none'; // Hide if no image uploaded
  }

  // Show the resume section
  document.getElementById('generated-resume')!.style.display = 'block';
});
