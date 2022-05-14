
var counter = 0

var pro = new XMLHttpRequest;


pro.open("GET", "http://localhost:3000/products");

pro.onreadystatechange = function () {


 
    if (pro.status == 200 && pro.readyState == 4) {


        var newpro = JSON.parse(pro.responseText)
       var sorted =  newpro.sort(function(a,b){
            return a.price - b.price
        })
        // console.log(newpro[0].name)
        // console.log(newpro)
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
            bt.innerText = "Add To Cart"
            // bt.setAttribute("class", "bt1")
            bt.addEventListener('click', add)

            newdiv.appendChild(img);
            newdiv.appendChild(p1);
            newdiv.appendChild(p2);
            newdiv.appendChild(p3);
            newdiv.appendChild(bt);
            var div1 = document.getElementById('div1')

            div1.append(newdiv);
        
        function add(e) {
            // console.log(this)
            // console.log(e.target);
            // localStorage.setItem('name', e.target.parentElement.children[2].innerText);
            // localStorage.setItem('price', e.target.parentElement.children[2].innerText);
        
            // localStorage.setItem('name',JSON.stringify(e.target.parentElement.children[2].innerText));
            // newdiv.classList.add("mystyle");
            //   e.target.parentElement.classList.add("true")
            // console.log(newpro[i])
            // localStorage.setItem(`card${counter++}`, JSON.stringify(newpro[i]));
            // localStorage.setItem("counter", counter);
            for (var i = 0; i <sorted.length; i++) {
        
                if(sorted[i].name==e.target.parentElement.children[2].innerText)
                {
                  localStorage.setItem(`card${counter++}`,JSON.stringify(sorted[i]));
                  localStorage.setItem("counter", counter);
                  localStorage.setItem("programming", "Python");

                }      
            }           
        }      
      }
    }

}




pro.send()



// localStorage.clear()
// localStorage.setItem("programming", "Python");
// localStorage.setItem("programming1", "1");


function loading() {

    var s = localStorage.getItem("counter");
    console.log(s)

    for (let index = 0; index < s ; index++) {
        var c = JSON.parse(localStorage.getItem(`card${index}`));
        console.log(c)
        // display(c)

    }
}

  
//   function display(student)
//   {
//     ///create
//     var elemnt = document.createElement("div");
//     elemnt.classList.add("card", "bgbr");
//     elemnt.innerHTML = `<p> student name is ${student.Name} </p>
//                           <p> student age is ${student.Age}</p>`;
//     //add to document
//     var container = document.querySelector("body");
//     container.append(elemnt);
//   }