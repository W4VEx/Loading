
function Loadapi(){

    document.getElementById('btn').innerHTML = " ";
    document.getElementById('btn').classList.remove("btn-load");
    document.getElementById('btn').classList.add("load");

    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){

          document.getElementById('btn').classList.remove("load");

        }
        
        }
        

        }

    


  
    
      
    
    



        // const attex = document.getElementById('context')

        //  fetch('https://jsonplaceholder.typicode.com/comments')
        //  .then(response => response.json())
        //   .then(data => {
          
        //     data.forEach(post => {
    
        //         let postElem = document.createElement("p");
                
        //         postElem.textContent = ` ${postElem.email}
                
        //         `;
    
        //         attex.appendChild(postElem);
        //     });
        //   });

        // document.getElementById('btn').classList.remove("load");



    


    


