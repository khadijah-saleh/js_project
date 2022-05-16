
var div1 = document.getElementById('div1')

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


            var p3 = document.createElement("p")
            p3.innerText = sorted[i].price;
            p3.setAttribute("class", "span1")

            var p4 = document.createElement("p")
            var p5 = document.createElement("p")


            var bt = document.createElement("button")
            bt.innerText = "Add To Cart"
            // bt.setAttribute("class", "bt1")
            bt.addEventListener('click', add)

            var bt2 = document.createElement("button")
            bt2.innerText = "Add To Fav"
            // bt.setAttribute("class", "bt1")
            bt2.addEventListener('click', add2)
            var p4 = document.createElement("p")
            
            var p5 = document.createElement("p")

            p4.appendChild(bt)
            p5.appendChild(bt2)


            newdiv.appendChild(img);
            newdiv.appendChild(p1);
            newdiv.appendChild(p2);
            newdiv.appendChild(p3);
            // newdiv.appendChild(bt);
            newdiv.appendChild(p4);
            newdiv.appendChild(p5);

            div1.append(newdiv);
        
        function add(e) {
           
            for (var i = 0; i <sorted.length; i++) {

                if(sorted[i].name==e.target.parentElement.parentElement.children[2].innerText)
                {
                    var data = localStorage.getItem('name')
                    if(data != null )
                    {
                        data= JSON.parse(localStorage.getItem('name'))
                        // localStorage.setItem('name',JSON.stringify(sorted[i]));
                }

                else{

                    data = []
                    
                }

                     data.push(sorted[i])
                     localStorage.setItem('name', JSON.stringify(data));
                }      
            }           
        }  

        function add2(e) {
           
            for (var i = 0; i <sorted.length; i++) {

                if(sorted[i].name==e.target.parentElement.parentElement.children[2].innerText)
                {
                    var data2 = localStorage.getItem('name2')
                    if(data2 != null )
                    {
                        data2 = JSON.parse(localStorage.getItem('name2'))
                        // localStorage.setItem('name',JSON.stringify(sorted[i]));
                }

                else{

                    data2 = []
                    
                }

                     data2.push(sorted[i])
                     localStorage.setItem('name2', JSON.stringify(data2));
                }      
            }           
        }  
            
      }
     
    }

}




pro.send()



localStorage.clear()

