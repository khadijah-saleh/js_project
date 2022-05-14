

var div2 = document.getElementById("div2")
var ber = new XMLHttpRequest;

ber.open("GET", "http://localhost:3000/berfums");

ber.onreadystatechange = function () {
    if (ber.status == 200 && ber.readyState == 4) {

        var newber = JSON.parse(ber.responseText)

        // console.log(newpro[1])

        for (var i = 0; i < newber.length; i++) {

            var newdiv2 = document.createElement("div");
            newdiv2.setAttribute("class", "card")
            

            var berimg = document.createElement("img");
            berimg.setAttribute("src", newber[i].image)
            berimg.setAttribute("width", "200px")
            berimg.setAttribute("height", "200px")

            var p1ber = document.createElement("p");
            p1ber.innerText = newber[i].category;
            p1ber.setAttribute("class", "pstyl3")

            var p2ber = document.createElement("p");
            p2ber.innerText = newber[i].name;
            p2ber.style.color = "gray"
            p2ber.setAttribute("class", "pstyle4")


            var p3ber = document.createElement("p");
            p3ber.innerText = newber[i].price;
            p3ber.setAttribute("class", "span1")

            var berbt = document.createElement("button")
            berbt.innerText = "Add To Cart"
            // bt.setAttribute("class", "bt1")
            berbt.addEventListener('click',show)

            function show(e)
            {
                // console.log(this)
                console.log(e.target.parentElement.children[2].innerText);
                // localStorage.setItem('name', e.target.parentElement.children[2].innerText);
                localStorage.setItem('name',JSON.stringify(e.target.parentElement.children[2].innerText));  
            }

            newdiv2.appendChild(berimg);
            newdiv2.appendChild(p1ber);
            newdiv2.appendChild(p2ber);
            newdiv2.appendChild(p3ber);
            newdiv2.appendChild(berbt);
            div2.appendChild(newdiv2) ;
            // console.log(newdiv)
        }
    }

}

ber.send()

