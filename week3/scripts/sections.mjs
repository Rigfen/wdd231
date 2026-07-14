function setSectionSelection() {
  const sectionSelect = document.querySelector("#sectionNumber");
  
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  };
  