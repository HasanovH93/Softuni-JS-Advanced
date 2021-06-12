function create(input) {
   let parentElement = document.getElementById('content');
   let elements = input;
   
   for(let i = 0; i < elements.length; i++){
        let div = document.createElement('div');
        let p = document.createElement('p');

        let currText = document.createTextNode(elements[i]);

        p.appendChild(currText)
        p.style.display = 'none';
        div.appendChild(p)
        
        div.addEventListener('click', showContent)
        parentElement.appendChild(div)
   }


   function showContent(event){
      event.target.children[0].style.display = 'inline';
   }

}