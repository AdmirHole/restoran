let editSection = document.getElementById("edit-section-lang");

if (editSection != null) {
  
  editSection.onchange = function () {
    let project_name = document.getElementById("project_name").value;
    let section_name = document.getElementById("section_name").value;
    let time = document.getElementById("timestamp").value;
    let lang = document.getElementById("language").value;

  window.location.href =
      "edit-section?project_name=" +
      project_name +
      "&section_name=" +
      section_name +
      "&time=" +
      time +
      "&lang=" +
      lang; 
  };
}
