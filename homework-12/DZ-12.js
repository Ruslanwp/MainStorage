

let container = $('#first');

let counter = 10;

$.get("https://jsonplaceholder.typicode.com/posts", function (data) {

  
   
   

    for (let i = 0; i<=data.length; i++){
      

        if (data[i].id <= counter){
          $('#first').append('<p>' + data[i].id + ' ' + data[i].title + '</p>');
        } else {
          break;  
        }
        

        $('#more').on('click', function(k){
          k = counter++;
            $('#first').append('<p>' + data[k].id + ' ' + data[k].title + '</p>') 
            data[k].id +=1;
            if (data.length == data[k].id){
              $('#more').css('display', 'none')
            }
        })
            
        

        // console.log(data[i]);
         console.log(data[i].id);
        // console.log(data[i].userId);
        // console.log(data[i].body);
        // console.log(data[i].title);
    }
    
})

/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  let searchForm = document.search;
  console.log(searchForm);



  for (let i = 0; i < document.forms.length; i++){
      if(document.forms[i].name==="search")
      searchForm = document.forms[i];
  }
  document.write(searchForm.name);// search
  
  */

/*   const requestURL = 'https://jsonplaceholder.typicode.com/posts';

  const xhr = new XMLHttpRequest()

  xhr.open('GET', requestURL)

  xhr.onload = () => {
      console.log(JSON.parse(xhr.response))
    }

  xhr.onerror = () => {
    console.log(JSON.parse(xhr.response))
    }
  
  xhr.send() */



class Validation {
  constructor(str, max, min){
    this.str = str// prompt('5 between 25', '');
    this.max = max;
    this.min = min;
  }

  checkMaxMin() {
    if (this.max > this.str.length && this.str.length > this.min){
      return true;
    }
    return false;
  }

  cleanString() {
    this.str = this.str.replace(/[^+\w]/g, '');  //оставляет только цифры и английский буквы
  }

  isEmpty() {
    console.log(this.str)
    if (this.str === ''){
      return true
    }
    return false
  }

  checkNumbers() {
    this.str = this.str.replace(/[0-9]/g, '');
  }

  get() {
    return this.str;
  }
}






let send = document.getElementById('send')
send.addEventListener('click', function(event){
  
  let registration = new Validation(document.getElementById('check').value, 25, 5);
  const messageError = document.getElementById('message') ;
  registration.cleanString();
  registration.checkNumbers();
  console.log(registration.get())
  

  if (!registration.checkMaxMin()) {
    //alert('мало символов');
    messageError.classList.add('alert-danger');
    messageError.innerHTML = 'Error: invalid number of characters';
    event.preventDefault();
  }

  if (registration.isEmpty()) {
    messageError.innerHTML = 'Error: this field is empty';
    event.preventDefault();
  }
  
})








