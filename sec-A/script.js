let username = document.querySelector(".usename").value;
let pwd = document.querySelector(".usepwd").value;

function check(){
  if((username == "admin" || username == "ADMIN") && (pwd == "admin" || pwd =="ADMIN")){
    alert("login Successfully");
  }
  else{
    alert("credentials are wrong");
  }
}