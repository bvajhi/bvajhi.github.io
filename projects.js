 var projects = [{"name": "Chicago Food Inspection", "display": false, "description" : "An interactive website that allows user to search the city of Chicago food inspection database, with repect to date, type, result, and zip.", "technologies": "AJAX, Responsive Design, Google maps API", "sourceCode" : "https://github.com/bvajhi/IT202/blob/master/project3/index.html", "pageLink":"https://bvajhi.github.io/IT202/project3"},
	{"name": "Battle Ship", "display" : true ,"description" : "A JAVA GUI project that allow users to play battle ship game online with another player. Allows user to create and connect to server.", "technologies": "Java, Intelli-J, Java Swing and AWT library, Java net library"},
    {"name": "Sudoku Solver", "display" : true ,"description" : "A JAVA GUI project that allow to solve the sudoku puzzle. The is able to load a puzzle that is saved in the from of text file. Similarly, the user in the form of a text fill. The program also gives the users to apply algorithm to help them solve the puzzle.", "technologies": "Java, Intelli-J, Java Swing and AWT library"},
   
]
  var count =1;
  $.each(projects, function(i,v){
     
      console.log(v.name);
      var cloneOfTemplate= $("#template").clone();
      $(cloneOfTemplate).children(".card-body").children(".card-title").append(v.name);
      $(cloneOfTemplate).children(".card-body").children(".card-text").append(v.description+"<br><br>Technologies: "+ v.technologies);
     // $(cloneOfTemplate).children(".card-body").children("#tech").append(v.technologies);
      if (v.sourceCode!=null){
          
           $(cloneOfTemplate).children(".card-body").children("#source").attr("href", v.sourceCode);
           $(cloneOfTemplate).children(".card-body").children("#source").removeClass("hidden");
      }
      if (v.pageLink!=null){
            $(cloneOfTemplate).children(".card-body").children("#page").attr("href", v.pageLink);
           $(cloneOfTemplate).children(".card-body").children("#page").removeClass("hidden");
          
      }
      $(cloneOfTemplate).attr("id", "clone"+count);
      $("#projects").children(".my-auto").children(".row").append(cloneOfTemplate);
      console.log("the clone ID is :"+cloneOfTemplate.attr("id"));
      count++;
  });
  