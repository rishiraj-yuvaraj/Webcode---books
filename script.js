var div = document.createElement('div');                                                        //linked div id in the html page
div.innerHTML=`<h5 class="topic">Note: *Have to Enter Numbers from 1 to 10 in below Search box*</h5>`     //The note point in my project which i wanted to display as innerhtml
div.style.textAlign="center";                                                         //this will align text at center                                          
document.body.append(div);                                                            //the line will append div with body in html  



async function getbook(){                                                            //used async named function                                  
    var number = document.getElementById('txt').value;                               //entered number variable and used txt as id to connect with html             
    console.log(number);                                                             //this will display in console 
    
  
    let res = await fetch(`https://anapioficeandfire.com/api/books/${number}`);      //fetched api link in res variable
    let result = await res.json();                                                   //will make res in JSON format and will store in result variable 
    console.log(result);                                                             //result will display in console
    
    let res1 = await fetch(`https://anapioficeandfire.com/api/characters/2`);        //fetched api link for characters in res1 variable
    let result1 = await res1.json();                                                 //will make res1 in JSON format and will store in result1 variable       
    console.log(result1);                                                            //result will display in console

    let res2 = await fetch(`https://anapioficeandfire.com/api/characters/12`);       //fetched api link for characters in res2 variable
    let result2 = await res2.json();                                                 //will make res2 in JSON format and will store in result2 variable      
    console.log(result2);                                                            //result will display in console

    let res3 = await fetch(`https://anapioficeandfire.com/api/characters/13`);       //fetched api link for characters in res3 variable 
    let result3 = await res3.json();                                                 //will make res3 in JSON format and will store in result3 variable        
    console.log(result3);                                                            //result will display in console
    
    let res4 = await fetch(`https://anapioficeandfire.com/api/characters/16`);       //fetched api link for characters in res4 variable 
    let result4 = await res4.json();                                                 //will make res4 in JSON format and will store in result4 variable       
    console.log(result4);                                                            //result will display in console

    let res5 = await fetch(`https://anapioficeandfire.com/api/characters/20`);       //fetched api link for characters in res5 variable  
    let result5 = await res5.json();                                                 //will make res5 in JSON format and will store in result5 variable       
    console.log(result5);                                                            //result will display in console




  var books = document.getElementById("Books");                                      //this will display in webpage window and id BOOKS linked with html    
  books.innerHTML=` 
  <h2 class="card-title">Search Result</h2>
    <div class="card mb-3"> 
    <img src="https://th.bing.com/th/id/R.5caa9dbd1b50ced29603385a024f538f?rik=6afhWjn7INHKhw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1516979187457-637abb4f9353%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3d619592a11f76882ded4086131a714b92&ehk=yBirxjfKrMikR1YiA4wAkBQL%2fIMcT%2b3dQB82cxeRXVE%3d&risl=&pid=ImgRaw&r=0" class="img-fluid" alt="">                                                   
      <div class="card-img-overlay"
        <div class="card-body">   
          <p class="card-text">Name: <b>${result.name}</b> & ISBN: <b>${result.isbn}</b></p>
          <p class="card-text">Number of pages in the book: <b>${result.numberOfPages}</b></p>
          <p class="card-text">Author of the book: <b>${result.authors}</b></p>
          <p class="card-text">Publisher Name: <b>${result.publisher}</b> & Release Date: <b>${result.released}</b></p>
          <p class="card-text"><u style="background-color:yellow;">Characters Name:</u><br> <b> 1. ${result1.name}</b></p>
          <p class="card-text"><b>2. ${result2.name}</b></p>
          <p class="card-text"><b>3. ${result3.name}</b></p>
          <p class="card-text"><b>4. ${result4.name}</b></p>
          <p class="card-text"><b>5. ${result5.name}</b></p>
        </div>
      </div>
    </div>` 
}


