function sendEmail(formSubmission){
  $.post("http://localhost:3001/email", formSubmission, function(result){
    alert("Congrats!");
    console.log(result);
  });
}



function attachFormSubmitHandler(){
  $("form[name=contact_form]").submit(function(event){
    event.preventDefault();
    var user_data = {
      user_name : $("input[name=user_name]").val(),
      user_email : $("input[name=user_email]").val(),
      message : $("textarea[name=message]").val()
    };

    sendEmail(user_data);
    clearFormValues();
  });
}

function clearFormValues(){

 $("input[name=user_name]").val("");
 $("input[name=user_email]").val("");
 $("textarea[name=message]").val("");

}

$(document).ready(function(){
  attachFormSubmitHandler();
});
