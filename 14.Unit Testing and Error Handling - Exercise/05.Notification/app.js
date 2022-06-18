function notify(message) {
 
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = "block";
  
  notification.addEventListener('click',hide)

  function hide(event){
    event.target.style.display = "none";
  }

}

