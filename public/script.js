var app = new Vue({
  el: '#app',
  data: {
    smallGoalPoints : 1,
    mediumGoalPoints : 5,
    largeGoalPoints : 10,
    todaysPoints : 0,
    clicked: [],
    grade: "F"
  },
  methods: {
    drinkWater(){
      if(document.getElementById("drinkWater").checked == true){
        this.todaysPoints = this.todaysPoints + this.smallGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.smallGoalPoints;
      }
      this.updateGrade();
    },
    checkInWithTeammate(){
      if( document.getElementById("checkInWithTeammate").checked == true ){
        this.todaysPoints = this.todaysPoints + this.smallGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.smallGoalPoints;
      }
      this.updateGrade();
    },
    bedtimeGoal(){
      if(document.getElementById("bedtimeGoal").checked == true){
        this.todaysPoints = this.todaysPoints + this.smallGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.smallGoalPoints;
      }
      this.updateGrade();
    },
    foodJournal(){
      if(document.getElementById("foodJournal").checked == true){
        this.todaysPoints = this.todaysPoints + this.smallGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.smallGoalPoints;
      }
      this.updateGrade();
    },
    foodGoals(){
      if(document.getElementById("foodGoals").checked == true){
        this.todaysPoints = this.todaysPoints + this.largeGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.largeGoalPoints;
      }
      this.updateGrade();
    },
    excercise(){ 
      if(document.getElementById("excercise").checked == true){
        this.todaysPoints = this.todaysPoints + this.mediumGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.mediumGoalPoints;
      }
      this.updateGrade();
    },
    scriptures(){
      if(document.getElementById("scriptures").checked == true){
        this.todaysPoints = this.todaysPoints + this.smallGoalPoints;
      }else{
        this.todaysPoints = this.todaysPoints - this.smallGoalPoints;
      }
      this.updateGrade();
    },
    alreadyClicked(func){
      for( i = 0; i < this.clicked.length; i++){
        if(this.clicked[i] == func){
          return true;
        }
      }
      return false;
    },
    updateGrade(){
      let url = "score_calc?q=" + this.todaysPoints;
      console.log("URL: " + url);
      fetch(url).then( data => {
        console.log("Got data from backend: " + data);
        let score = data;
        console.log("Old score: " + this.score);
        this.score = score;
        console.log("New Score: " + this.score + " Given Score: " + score);
      })
      
      const max_score = 20;
      let grade = this.todaysPoints/max_score;
      if(grade < .6){
        this.grade = "D";
      }else if (grade < .7){
        this.grade = "C";
      }else if (grade < .8){
        this.grade = "B";
      }else if (grade <.9 ){
        this.grade = "A";
      }else{
        this.grade == "A++";
      }
    }
  },
});
