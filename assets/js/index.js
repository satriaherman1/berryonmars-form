const nextPage = (value) => {
    localStorage.setItem('form-status' , value);
}

window.onload = function(){
    if(localStorage.getItem('form-status') === "1"){
        document.location.href = "/"
    }
}