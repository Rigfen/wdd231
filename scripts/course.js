const courses = [
  { code: "WDD 130", credits: 2, completed: true, subject: "WDD" },
  { code: "WDD 131", credits: 2, completed: false, subject: "WDD" },
  { code: "WDD 231", credits: 2, completed: true, subject: "WDD" },
];

const courseContainer = document.getElementById("courses");
const creditsDisplay = document.getElementById("credits");

// DISPLAY FUNCTION
function displayCourses(courseList) {
  courseContainer.innerHTML = "";

  courseList.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.textContent = `${course.code} - ${course.credits} credits`;
    courseContainer.appendChild(div);
  });

 
  const total = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditsDisplay.textContent = `Total Credits: ${total}`;
}


document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.subject === "WDD"));
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.subject === "CSE"));
});


displayCourses(courses);