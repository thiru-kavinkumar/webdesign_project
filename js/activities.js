async function displayCard1() {
    // import json
    const response = await fetch("../data/building.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Building </h1>`
    for (let d of data.building){
        txt +=  `
        <div >
                <h1>`+d["name"]+`</h1>
                <div class="img-div">
                    <p>
                        <span > Adress </span> : `+d["adress"]+`<br>
                    </p>
                        <table>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                            <tr>
                                <td>`+d["schedule"][0]["monday"]+`</td>
                                <td>`+d["schedule"][0]["tuesday"]+`</td>
                                <td>`+d["schedule"][0]["wednesday"]+`</td>
                                <td>`+d["schedule"][0]["thursday"]+`</td>
                                <td>`+d["schedule"][0]["friday"]+`</td>
                                <td>`+d["schedule"][0]["saturday"]+`</td>
                                <td>`+d["schedule"][0]["sunday"]+`</td>
                            </tr>
                        </table>
                    </p>
                </div>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}


async function displayCard2() {
    // import json
    const response = await fetch("../data/museum.json");
    let data = await response.json();
    console.log(data);
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Museum </h1>`
    for (let d of data.museum){
        txt += `
        <div >
            <h1>`+d["name"]+`</h1>
            <div class="img-div">
                <p>
                    <span > Adress </span> : `+d["adress"]+`<br>
                    <span > Phone </span>: `+d["phone"]+`<br>
                    <table>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        <tr>
                            <td>`+d["schedule"][0]["monday"]+`</td>
                            <td>`+d["schedule"][0]["tuesday"]+`</td>
                            <td>`+d["schedule"][0]["wednesday"]+`</td>
                            <td>`+d["schedule"][0]["thursday"]+`</td>
                            <td>`+d["schedule"][0]["friday"]+`</td>
                            <td>`+d["schedule"][0]["saturday"]+`</td>
                            <td>`+d["schedule"][0]["sunday"]+`</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}

async function displayCard3() {
    // import json
    const response = await fetch("../data/theater.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Theater </h1>`
    console.log(data)
    for (let d of data.theater){
        txt += `
        <div>
            <h1>`+d["name"]+`</h1>
            <div class="img-div">
                <img src="`+d["images"][0]+`">
                <img src="`+d["images"][1]+`"><br>
                <p>
                    <span > First Opening : </span>: `+d["first_opening"]+`<br>
                    <span > Capacity : </span>: `+d["capacity"]+`<br>
                    <span > Adress </span> : `+d["adress"]+`<br>
                    <span > Website </span>: `+d["website"]+`<br>
                    <span > Phone </span>: `+d["phone"]+`
                </p>
            </div>
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}

async function displayCard4() {
    // import json
    const response = await fetch("../data/science.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Science </h1>`
    for (let d of data.science){
        txt += `
        <div>
            <h1>`+d["name"]+`</h1>
            <div class="img-div">
                <img src="`+d["images"][0]+`">
                <img src="`+d["images"][1]+`"><br>
                <p>
                    <span > Adress </span> : `+d["adress"]+`<br>
                    <span > Website </span>: `+d["website"]+`<br>
                    <span > Phone </span>: `+d["phone"]+`
                    <table>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        <tr>
                            <td>`+d["schedule"][0]["monday"]+`</td>
                            <td>`+d["schedule"][0]["tuesday"]+`</td>
                            <td>`+d["schedule"][0]["wednesday"]+`</td>
                            <td>`+d["schedule"][0]["thursday"]+`</td>
                            <td>`+d["schedule"][0]["friday"]+`</td>
                            <td>`+d["schedule"][0]["saturday"]+`</td>
                            <td>`+d["schedule"][0]["sunday"]+`</td>
                        </tr>
                    </table>
                </p>
            </div>
        </>`
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}

async function displayCard5() {
    // import json
    const response = await fetch("../data/attraction.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Attraction </h1>`
    for (let d of data.attraction){
        txt += `
        <div >
            <h1>`+d["name"]+`</h1>
            <div class="img-div">
                <p>
                <span > Adress </span> : `+d["adress"]+`<br>
                <table>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                    <tr>
                        <td>`+d["schedule"][0]["monday"]+`</td>
                        <td>`+d["schedule"][0]["tuesday"]+`</td>
                        <td>`+d["schedule"][0]["wednesday"]+`</td>
                        <td>`+d["schedule"][0]["thursday"]+`</td>
                        <td>`+d["schedule"][0]["friday"]+`</td>
                        <td>`+d["schedule"][0]["saturday"]+`</td>
                        <td>`+d["schedule"][0]["sunday"]+`</td>
                    </tr>
                </table>
            </p>
        </div >
    </div>`;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}


async function displayCard6() {
    // import json
    const response = await fetch("../data/street.json");
    let data = await response.json();
    let el = document.getElementById("text_section_activities"); 
    let txt = `<h1> Street </h1>`
    for (let d of data.streets){
        txt += `
        <div ">
            <h1>`+d["name"]+`</h1>
            <div class="img-div">
                <img src="`+d["images"]+`">
            
            <p>
                <span > Length : </span>: `+d["length"]+`<br>
                <span > Width : </span>: `+d["width"]+`<br>
                <span > Features : </span>: `+d["features"]+`<br>
            </p>
            </div">
        </div>
        `;
    }
    el.innerHTML = txt;
    window.location.href = "#text_section_activities";
}
