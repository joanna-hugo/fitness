var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
    cityfield: '',
    word: '',
    definitions: [],
    test_def : ''
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "getcity?q="+this.prefix; 
      console.log("URL: " + url + "\n");
      $.getJSON(url,function(data) {
          console.log(data);
          return (data.json);
        })
        .then((citylist) => {
          console.log("CityList");
          // console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push( { name: citylist[i].city }  );
          };
          console.log("Got Citylist");
        });
    },
    fetchDICT() {
      let url = "dict?q="+this.word;
      console.log("URL: " + url);
      $.getJSON(url, function(data){
        return (data.json);
      })
      
      console.log("in fetchREST function");
      let URL = "https://owlbot.info/api/v3/dictionary/" + this.word;
      
      const request = new Request(URL, {
        headers: new Headers({
          'Content-Type':'application/json',
          'Authorization':'Token 49070b13348ce05557b302d26785ffd5a8570bef'
        })
      })
      fetch(request).then(function(response){ //make
        return response.json();
      }).then((def_list) => {
        this.definitions = [];
        console.log("json data " + def_list.toString());
        if(def_list.definitions.length >0){
          for (let i = 0; i < def_list.definitions.length; i++) {
              /*
              definition: "the eighth letter of the alphabet."
              example: null
              image_url: null
              type: "noun"
              */
              console.log("Thid def"  + def_list);
              this.definitions.push(
                { 
                    definition: def_list.definitions[i].definition,
                    example: def_list.definitions[i].example,
                    image_url: def_list.definitions[i].image_url,
                    type: def_list.definitions[i].type
                  
                });
            }
        }
          
      });
    },
  },
});
