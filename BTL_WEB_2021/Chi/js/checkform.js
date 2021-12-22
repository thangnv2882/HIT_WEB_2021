function checkname(name) {
    document.getElementById('notename').innerHTML = '';
    if(name===''){
        document.getElementById('notename').innerHTML = '*The field is required!';
    }   
}
function checkemail(email){
    let check=/(\.?[a-z0-9])@g(oogle)?mail\.com/g;
    document.getElementById('noteemail').innerHTML = '';
    if(email===''){
        document.getElementById('noteemail').innerHTML = '*The field is required!';
    }
    else if(!check.test(email)){
        document.getElementById('noteemail').innerHTML = '*Invalid email!';
    }
}
function checkmes(mes) {
    document.getElementById('notemes').innerHTML = '';
    if(mes===''){
        document.getElementById('notemes').innerHTML = '*Leave a message';
    }   
}