let forms = document.querySelectorAll(".frm");
let length = forms.length;

for (let i = 0; i < length; i++) {
  forms[i].onchange = () => {
    let project_name = forms[i][0].value;
    let time = forms[i][1].value;
    let lang = forms[i][2].value;

    forms[i].submit();

    window.location.href = 
        "index?project_name=" + project_name + "&lang=" + lang;
  };
}
