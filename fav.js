var sorted
function loading() {
    var div = document.createElement('div')
    div.setAttribute("class", "flexstyle")
    div.classList.add("flexstyle", "sec1style")

    var container = document.createElement('div')
    container.classList.add("container")

    if (localStorage.getItem('name2') != null) {

        sorted = JSON.parse(localStorage.getItem('name2'))

        for (var i = 0; i < sorted.length; i++) {

            var newdiv = document.createElement("div");
            newdiv.setAttribute("class", "card")

            var img = document.createElement("img");
            img.setAttribute("src", sorted[i].image)
            img.setAttribute("width", "200px")
            img.setAttribute("height", "200px")

            var p1 = document.createElement("p");
            p1.innerText = sorted[i].category;
            // p1.style.color = "red"
            p1.setAttribute("class", "pstyl3")

            var p2 = document.createElement("p");
            p2.innerText = sorted[i].name;
            p2.style.color = "gray"
            p2.setAttribute("class", "pstyle4")


            var p3 = document.createElement("p");
            p3.innerText = sorted[i].price;
            p3.setAttribute("class", "span1")


            var bt = document.createElement("button")
            bt.innerText = "Remove"
            // bt.setAttribute("class", "bt1")
            bt.addEventListener('click', remove)

            newdiv.appendChild(img);
            newdiv.appendChild(p1);
            newdiv.appendChild(p2);
            newdiv.appendChild(p3);
            newdiv.appendChild(bt);

            div.append(newdiv);
            container.appendChild(div)
            document.body.appendChild(container)
        }


    }


    function remove(e) {
        for (var i = 0; i < sorted.length; i++) {


            if (sorted[i].name == e.target.parentElement.children[2].innerText) {

                sorted.splice(i, 1)
                localStorage.setItem('name2', JSON.stringify(sorted))
            }
        }
    }
}