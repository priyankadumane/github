function emailPhoneCheck() {
    if (document.getElementById('email').checked) {
        document.getElementById('ifEmail').style.visibility = 'visible';
        document.getElementById('ifPhone').style.visibility = 'hidden'; 
    }
    else if (document.getElementById('phone').checked) {
        document.getElementById('ifPhone').style.visibility = 'visible';
        document.getElementById('ifEmail').style.visibility = 'hidden';   
    }
}
function emailValidate() {

        
        if (document.getElementById('email').checked) {
          
        var inputText=document.form1.email1.value;
        var atposition=inputText.indexOf("@");
        var dotposition=inputText.lastIndexOf(".");
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=inputText.length){
        alert("Please enter a valid e-mail address");
        return false;
        }
        }
        else if (document.getElementById('phone').checked) {
        var inputText=document.form1.phone1.value;
        }
}

