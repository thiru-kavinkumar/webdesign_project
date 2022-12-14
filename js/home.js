function getDirectory() {
    var loc = window.location.href;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir = loc.substring(0, dir.lastIndexOf('/'));
    return dir
}

function changeImage(direction) {
    src = document.getElementById("img").src;
    var dir = getDirectory()

    const imgArr = [
        dir + "/images/champs_elysees_1.jpg",
        dir + "/images/champs_elysees_2.jpg",
        dir + "/images/louvre_1.jpg",
        dir + "/images/paris_pont.jpg",
        dir + "/images/sacree_coeur.jpg",
        dir + "/images/vue_ensemble_1.jpg",
        dir + "/images/vue_ensemble_2.jpg"
    ]

    let imgIndex = imgArr.findIndex(img => img == src)

    if (direction == 'left') {
        imgIndex = imgIndex == 0 ? imgArr.length - 1 : imgIndex - 1
        document.getElementById('img').src = imgArr[imgIndex]
    }

    if (direction == 'right') {
        imgIndex = imgIndex == imgArr.length - 1 ? 0 : imgIndex + 1
        document.getElementById('img').src = imgArr[imgIndex]
    }


}

function changeHistory(direction) {
    src = document.getElementById('home-history').innerText
    const arr = [
        ["Roman Empire", "/images/roman_empire.jpg"],
        ["Middle Age", "/images/middle_age.jpg"],
        ["First Empire", "/images/first_empire.jpg"],
        ["Modern Era", "/images/modern_era.jpeg"]
    ]


    let index = arr.findIndex(tab => tab[0] == src)
    const dir = getDirectory()

    if (direction == 'left') {
        index = index == 0 ? arr.length - 1 : index - 1
        document.getElementById('home-history').innerText = arr[index][0]
        document.getElementById('home-history-img').src = dir + arr[index][1]
    }

    if (direction == 'right') {
        index = index == arr.length - 1 ? 0 : index + 1
        document.getElementById('home-history').innerText = arr[index][0]
        document.getElementById('home-history-img').src = dir + arr[index][1]
    }
}

function changeActivities(direction) {
    src = document.getElementById('home-activities').innerText
    const arr = [
        ["Building", "/images/building.jpg"],
        ["Museum", "/images/museum.jpg"],
        ["Theater", "/images/theater.jpg"],
        ["Science and technology", "/images/science.jpg"],
        ["Attraction", "/images/attraction.jpg"],
        ["Famous street", "/images/street.jpg"]
    ]


    let index = arr.findIndex(tab => tab[0] == src)
    const dir = getDirectory()

    if (direction == 'left') {
        index = index == 0 ? arr.length - 1 : index - 1
        document.getElementById('home-activities').innerText = arr[index][0]
        document.getElementById('home-activities-img').src = dir + arr[index][1]
    }

    if (direction == 'right') {
        index = index == arr.length - 1 ? 0 : index + 1
        document.getElementById('home-activities').innerText = arr[index][0]
        document.getElementById('home-activities-img').src = dir + arr[index][1]
    }
}


function redirect(title) {
    window.location.href = getDirectory() + '/html/'+title+'.html?title=' + document.getElementById('home-'+title).innerText
}

function changeEvent(direction) {
    const arr = [
        ["Bio-inspired, another approach to the exhibition","/images/event1.jpg"],
        ["Paris 20th: where to donate your clothes in Paris?","/images/event2.jpg"],
        ["Tour of Paris by scooter and treasure hunt!","/images/event3.jpg"],
        ['Spectacle "Ruy Blas ou la folie des Moutons Noirs"',"/images/event4.jpg"],
        ['"Me, you, us" • Photo workshop 15/18 years old',"/images/event5.jpg"],
        ["Family Saturdays Crèche Victor Massé","/images/event6.jpg"],
        ["The play places","/images/event7.jpg"],
        ["Concert: Jam Session hosted by Tom Ibarra","/images/event8.jpeg"]
    ]
    src = document.getElementById('home-event').innerText
    const dir = getDirectory()
    let index = arr.findIndex(tab => tab[0] == src)
    console.log(index)
    if (direction == 'left') {
        index = index == 0 ? arr.length - 1 : index - 1
        document.getElementById('home-event').innerText = arr[index][0]
        document.getElementById('home-event-img').src = dir + arr[index][1]
    }

    if (direction == 'right') {
        index = index == arr.length - 1 ? 0 : index + 1
        document.getElementById('home-event').innerText = arr[index][0]
        document.getElementById('home-event-img').src = dir + arr[index][1]
    }


}


