var app = new Vue({
  el: '#app',
  data: {
    type:  '',
    defenition: '',
    example: ''
  },
  methods: {
    fetchREST() {
      console.log("in fetchREST function");
      /*
      const request = new Request('./file.json', {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      fetch(request)
      
      */
      let URL = "https://owlbot.info/api/v3/dictionary/";
      
      const request = new Request(URL, {
        headers: new Headers({
          'Content-Type':'application/json',
          'Authorization':'Token 49070b13348ce05557b302d26785ffd5a8570bef'
        })
      })
      
      
      fetch(request).then(function(response){
        return response.json();
      }).then(function(json){
        console.log(json);
      });
    },
    /*
    fetch(url)
      .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            if(json.url.lastIndexOf("4") == json.url.length-1){
              document.getElementById("dog_pic").innerHTML = 
              "<video width='320' height='240' controls> <source src= '" + json.url + 
              "' type='video/mp4'> Your browser does not support the video tag</video>";
            }else{
              document.getElementById("dog_pic").innerHTML = "<img src = '"+json.url+"'>";
            }
            document.getElementById("dog_phrase").innerHTML = "You have been visited by a good boy";
        });
    */
  },
});