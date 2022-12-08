function changeImage() {
    src = document.getElementById("img").src;
    var loc = window.location.href;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir = loc.substring(0, dir.lastIndexOf('/'));
 
    switch (src) {
        case dir + "/images/champs_elysees_1.jpg":
            src = dir + "/images/champs_elysees_2.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/champs_elysees_2.jpg":
            src = dir + "/images/louvre_1.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/louvre_1.jpg":
            src = dir + "/images/paris_pont.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/paris_pont.jpg":
            src = dir + "/images/sacree_coeur.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/sacree_coeur.jpg":
            src = dir + "/images/vue_ensemble_1.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/vue_ensemble_1.jpg":
            src = dir + "/images/vue_ensemble_2.jpg";
            document.getElementById('img').src = src
            break;
        case dir + "/images/vue_ensemble_2.jpg":
            src = dir + "/images/champs_elysees_1.jpg";
            document.getElementById('img').src = src
            break;
        default:
            console.log(src)
            break;
    }
}

function changeHistory(dir) {

}

function changeEvent(dir) {

}

function changeActivities() {
    getRestaurant()
}

function getRestaurant() {

    console.log('test')
    fetch('https://api.yelp.com/v3/transactions/delivery/search?latitude=48.861788&longitude=2.344272', {
        method: 'GET',
        mode: 'no-cors',
        headers: new Headers({
            'Access-Control-Allow-Origin': 'https://api.yelp.com/v3/transactions/delivery/search?latitude=48.861788&longitude=2.344272',
            'Access-Control-Allow-Credentials': 'true',
            'Authorization': 'Bearer EGUAF1nMETNZwZB2_sgtPCKb9nisR8XgCza4CrHV5a_q2-CmNDyYfxMwXqCMGz1KCYOiAUXI1FdKGkLt4r3uDs92vJxk852jVdlWBVNNnElnrdFiv8FKhTL5ihySY3Yx',
            'Content-Type': 'text/plain'
        }),
        
    })
}