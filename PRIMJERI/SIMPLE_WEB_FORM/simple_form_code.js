function submitFormData(){
    let username = document.getElementById('user_name_field').value;
    let password = document.getElementById('password_field').value;
    let email = document.getElementById('email_field').value;
    let confirm_password = document.getElementById('confirm_password_field').value;
    let year = document.getElementById("year_of_study_field").value;
    let date = new Date();
    let today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ".";
    let choice = document.getElementById("year_of_study_field");

    if (username === "" || password === "" || email === "" || confirm_password === "" || year === ""){
        alert("Please fill in all fields.");
    } else if (password !== confirm_password){
        alert("Passwords do not match.");
    } else {
        let par = paragraphActivated();
        par.innerHTML = "Username: " + username + "<br>" + "Email: " + email + "<br>" + "Year of Study: " + choice.options[choice.selectedIndex].text + "<br>" + "Date of Submission: " + today;
        resetForm();
    }
}

function paragraphActivated(){
    let paragraph = document.getElementById('form_data_p');
    paragraph.style.color = 'yellow';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = '20px';
    paragraph.style.textAlign = 'left';
    paragraph.style.fontFamily = 'Bookman Old Style, serif';
    paragraph.style.paddingLeft = '30px';
    return  paragraph;
}

function resetForm(){
    document.getElementById('user_name_field').value = "";
    document.getElementById('password_field').value = "";
    document.getElementById('email_field').value = "";
    document.getElementById('confirm_password_field').value = "";
    document.getElementById('year_of_study_field').selectedIndex = 0;

}