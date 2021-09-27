if("serviceWorker" in navigator){
    window.addEventListener('load' , function(){
        navigator.serviceWorker
        .register('config/service-worker.js')
        .then(res => console.log('berhasil : ' + res))
        .catch(err => console.log('gagal : ' +err))
    })
}
