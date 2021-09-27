if("serviceWorker" in navigator){
    window.addEventListener('load' , function(){
        navigator.serviceWorker
        .register('assets/js/config/serviceWorker.js')
        .then(res => console.log('berhasil : ' + res))
        .catch(err => console.log('gagal : ' +err))
    })
}
