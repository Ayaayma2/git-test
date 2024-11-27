var siteName_input = document.getElementById("sitename")
var siteUrl_input = document.getElementById("siteurl")
var sitesearch_input = document.getElementById("sitesearch")
var mainindex = 0;
var siteList;
if (localStorage.getItem("LIST") == null) {
    siteList = [];
}
else {
    siteList = JSON.parse(localStorage.getItem("LIST"))
    display()
}

function addSite() {
    var site = {
        name: siteName_input.value,
        url: siteUrl_input.value
    }
    if (document.getElementById("submitsite").innerHTML == "Submit") {
        siteList.push(site);
    }
    else {
        siteList.splice(mainindex, 1, site)
        document.getElementById("submitsite").innerHTML = "Submit"
    }


    localStorage.setItem("LIST", JSON.stringify(siteList))
    display()
    clear()
}

function clear(){
    siteName_input.value = ""
    siteUrl_input.value = ""
}
function deletesite(x) {
    siteList.splice(x, 1)
    localStorage.setItem("LIST", JSON.stringify(siteList))
    display();
}
function updatesite(siteIndex) {
    mainindex = siteIndex
    var site = siteList[siteIndex]
    siteName_input.value = site.name
    siteUrl_input.value = site.url
    document.getElementById("submitsite").innerHTML = "Update"

}

function display() {
    var temp = ""
    for (var i = 1; i <= siteList.length; i++) {
        temp += `<tr>
                        <td> `+ i + `</td>
                        <td>  `+siteList[i-1].name + `</td>
                        <td><a href="`+ siteList[i-1].url + `" target="_blank"><button class="btn btn-warning">
                                <i class="fa-solid fa-eye me-2"></i>
                                visit</button></a>
                                </td>
                        <td><button onclick=deletesite(`+ (i-1) + `) " class="btn btn-danger">
                        <i class="fa-solid fa-trash-can me-2"></i>
                        delete</button></td>
                         <td><button onclick=" updatesite(`+ (i-1)  + `)" class="btn btn-success">
                                <i class="fa-solid fa-pen me-2"></i>
                                update</button></td>

                    </tr> `

    }
    document.getElementById("myTable").innerHTML = temp
}



function search() {
    var searchvaL = sitesearch_input.value.toLowerCase()
    var temp = ""
    for (var i = 1; i <= siteList.length; i++) {
        if (siteList[i-1].name.toLowerCase().includes(searchvaL) == true) {
            temp += `<tr>
            <td> `+ i + `</td>
            <td>  `+ siteList[i-1].name + `</td>
                        <td><a href="`+ siteList[i-1].url + `" target="_blank"><button class="btn btn-warning">
                                <i class="fa-solid fa-eye me-2"></i>
                                visit</button></a>
                                </td>
            <td><button onclick=deletesite(`+ (i-1) + `) " class="btn btn-danger">
            <i class="fa-solid fa-trash-can me-2"></i>
            delete</button></td>
             <td><button class="btn btn-success">
                                <i class="fa-solid fa-pen me-2"></i>
                                update</button></td>

        </tr> `

        }

    }
    document.getElementById("myTable").innerHTML = temp
}




