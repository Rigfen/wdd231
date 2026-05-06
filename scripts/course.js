const courses = [
  { code: "WDD 130", credits: 2, completed: true, subject: "WDD" },
  { code: "WDD 231", credits: 3, completed: false, subject: "WDD" },
  { code: "CSE 111", credits: 2, completed: true, subject: "CSE" },
  { code: "CSE 210", credits: 3, completed: false, subject: "CSE" }
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

  // CALCULATE CREDITS (reduce requirement)
  const total = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditsDisplay.textContent = `Total Credits: ${total}`;
}

// FILTER BUTTONS
document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.subject === "WDD"));
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.subject === "CSE"));
});

// INITIAL LOAD
displayCourses(courses);