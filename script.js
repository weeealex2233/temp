function changeText(){
  var current_val == document.getElementById('my_description').innerText   
  if (current_val == "Teacher"){ 
    document.getElementById('my_description').innerHTML = "Student" 

  }else if (current_val == "Student"){ 
    document.getElementById('my_description').innerHTML = "Teacher" 
  } 
} 
