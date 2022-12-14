function onLoad() {
    var url = new URL(window.location.href);
    var title = url.searchParams.get("title");
    const arr = [
        "Bio-inspired, another approach to the exhibition",
        "Paris 20th: where to donate your clothes in Paris?",
        "Tour of Paris by scooter and treasure hunt!",
        'Spectacle "Ruy Blas ou la folie des Moutons Noirs"',
        '"Me, you, us" • Photo workshop 15/18 years old',
        "Family Saturdays Crèche Victor Massé",
        "The play places", ,
        "Concert: Jam Session hosted by Tom Ibarra"
    ]
    switch (title) {
        case arr[0]:
            window.location.href = getDirectory() + '/html/event.html#event-1';
            break;
        case arr[1]:
            window.location.href = getDirectory() + '/html/event.html#event-2';
            break;
        case arr[2]:
            window.location.href = getDirectory() + '/html/event.html#event-3';
            break;
        case arr[3]:
            window.location.href = getDirectory() + '/html/event.html#event-4';
            break;
        case arr[4]:
            window.location.href = getDirectory() + '/html/event2.html#event-5';
            break;
        case arr[5]:
            window.location.href = getDirectory() + '/html/event2.html#event-6';
            break;
        case arr[6]:
            window.location.href = getDirectory() + '/html/event2.html#event-7';
            break;
        case arr[7]:
            window.location.href = getDirectory() + '/html/event2.html#event-8';
            break;
    }
}

function getDirectory() {
    var loc = window.location.href;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir = loc.substring(0, dir.lastIndexOf('/'));
    return dir
}

onLoad()