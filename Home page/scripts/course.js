const courses = [
  { code: "WDD 130", credits: 2, completed: true },
  { code: "WDD 131", credits: 2, completed: true },
  { code: "WDD 231", credits: 2, completed: false },
  { code: "CSE 111", credits: 2, completed: true },
  { code: "CSE 210", credits: 2, completed: false },
  { code: "CSEPC 110", credits: 2, completed: true }
];

const container = document.getElementById("courses");
const credits = document.getElementById("credits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.textContent = course.code;
    container.appendChild(div);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  credits.textContent = "Total Credits: " + total;
}

displayCourses(courses);

document.getElementById("all").onclick = () => displayCourses(courses);
document.getElementById("wdd").onclick = () =>
  displayCourses(courses.filter(c => c.code.includes("WDD")));
document.getElementById("cse").onclick = () =>
  displayCourses(courses.filter(c => c.code.includes("CSE")));