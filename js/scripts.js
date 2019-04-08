function JobPosts(){
  this.jPosts = [];
}


JobPosts.prototype.addJobPosting = function(jobPost){
  this.jPosts.push(jobPost);
}

JobPosts.prototype.removeJob = function(jobPost){
  this.jPosts.pop(jobPosts);
}

var appSkillListElement="";
var jbSkillListElement="";

function JobPosting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,jbSkills,moreJbSkills) {
  this.companyName = comName;
  this.title = jobTitle;
  this.difficulty = difficulty;
  this.location = jobLocation;
  this.condition = jobCondition;
  this.description = jobDescription;
  this.jbSkills = jbSkills;;
  this.moreJbSkills = moreJbSkills;
}

function Developers(){
  this.devs=[];
}

 Developers.prototype.addDeveloper = function(dev){
  this.devs.push(dev);
  console.log(dev);
   console.log(this.devs[0])
}

 Developers.prototype.removeDeveloper = function(dev){
  this.devs.pop(dev);
}

function Developer(fName,lName,title,hourlyRate,experience){
  this.fName = fName;
  this.lName = lName;
  this.title = title;
  this.hourlyRate = hourlyRate;
  this.experience = experience;
  this.devSkills = [];
}

var textInfo = function(dev){ //to print the developer's
 $(".dev-info").append('<div class="alert alert-info">'+
  '<h5 class="alert-heading"><strong><span id="int-title"></span></strong></h5>'+
  '<p>Developer name: <span id="app-name">'+dev.fName+" "+dev.lName+'</span></p>'+
  '<p>skills: <ul><span id="app-skills"></span>'+appSkills+'</ul></p>'+
  '<p>Hourly Rate: <span id="app-h"></span>'+dev.hourlyRate+'</p>'+
  '<p>Experience: <span id="print-exp">'+dev.experience+'</span></p>'+
  '<p>Position: <span id="app-position">'+dev.title+'</span></p>'+
  '<p>Contact Me</p>'+
  '</div>');
   var appSkills="";
   dev.devSkills.forEach(function(skill){
       $("#app-skills").append("<li>"+skill+"</li>");
       appSkills+=("<li>"+skill+"</li>");

     });

}

var jobTextInfo = function(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,moreJbSkills){ //to print the developer's information

  // $("bg-title").text(post.title);
}
var reset = function(){
  $("#job-app")[0].reset();
  $("#form-post")[0].reset();

}

var posting =function(post){
  if (post.difficulty === "entry"){
    // console.log(newPost);

    $(".entry-level").append('<div class="entry-level">'+
                            '<div class="alert alert-info">'+
                            '<h5 class="alert-heading">Job Title:<strong><span id="bg-title">'+post.title+'</span></strong></h5>'+
                            '<p>Company name: <span class="bg-comp-name">'+post.companyName+'</span></p>'+
                            '<p>Location: <span class="bg-location">'+post.location+'</span></p>'+
                            '<p>Skills Required'+
                            '<ul>'+
                            '<span class="bg-skills">'+jbSkillListElement+'</span>'+
                            '</ul>'+
                            '</p>'+
                            '<p>Additional skills: <span class="bg-add-skills">'+post.moreJbSkills+'</span></p>'+
                            '<p>Description: <span class="bg-post-desc">'+post.description+'</span></p>'+
                            '<p>Work condition: <span class="bg-condition">'+post.condition+'</span></p>'+


                            '<div class="flx-btn">'+
                            '<button type="button" class="apply">Apply For A Job</button>'+
                            '</div>'+
                              '</div>'+
                            '</div>');

          // $(".bg-skills").append()
  }

  else if (post.difficulty === "intermediate"){
    $(".int-level").append('<div class="int-level">'+
                          '<div class="alert alert-info">'+
                          '<h5 class="alert-heading">Job Title:<strong><span id="int-title">'+post.title+'</span></strong></h5>'+
                          '<p>Company name: <span id="int-comp-name">'+post.companyName+'</span></p>'+
                          '<p>Location: <span id="int-location">'+post.location+'</span></p>'+
                          '<p> Skills Required'+
                          '<ul>'+
                          '<span id="int-skills">'+jbSkillListElement+'</span>'+
                          '</ul>'+
                          '</p>'+
                          '<p>Additional skills: <span id="int-add-skills">'+post.moreJbSkills+'</span></p>'+
                          '<p>Description: <span id="int-post-desc">'+post.description+'</span></p>'+
                          '<p>Work condition: <span id="int-condition">'+post.condition+'</span></p>'+

                          '<div class="flx-btn">'+
                          '<button type="button" class="apply">Apply For A Job</button>'+
                          '</div>'+
                          '</div>'+
                        '</div>');
  }


  else if (post.difficulty === "advanced"){
    $(".adv-level").append('<div class="adv-level">'+
                          '<div class="alert alert-info">'+
                          '<h5 class="alert-heading">Job Title: <strong><span id="adv-title">'+post.title+'</span></strong></h5>'+
                          '<p>Company name: <span id="adv-comp-name">'+post.companyName+'</span></p>'+
                          '<p>Location: <span id="adv-location">'+post.location+'</span></p>'+
                          '<p> Skills Required'+
                          '<ul>'+
                          '<span id="adv-skills">'+jbSkillListElement+'</span>'+
                          '</ul>'+
                          '</p>'+
                          '<p>Additional skills: <span id="adv-add-skills">'+post.moreJbSkills+'</span></p>'+
                          '<p>Description: <span id="adv-post-desc">'+post.description+'</span></p>'+
                          '<p>Work condition: <span id="adv-condition">'+post.condition+'</span></p>'+


                          '<div class="flx-btn">'+
                          '<button type="button" class="apply">Apply For A Job</button>'+
                          '</div>'+
                          '</div>'+
                        '</div>');
  }
}
var devsArray = new Developers();
var developer1 ;
var posts = new JobPosts();

$(document).ready(function()  {
var newpost;

 ///developer click function to take form inputs
 $("#app-btn").click(function(event){
   event.preventDefault();

   var fname,lname,email,title,hourlyRate,experience;
   var appSkills =[];
   fName = $("input#app-first-name").val();
   lName = $("input#app-last-name").val();
   title = $("input#app-title").val();
   hourlyRate = parseInt($("input#app-rate").val());
   experience = $("input#app-exp").val();
  developer1 = new Developer(fName,lName,title,hourlyRate,experience);

   $("input:checkbox[name=app-skills]:checked").each(function(){
       developer1.devSkills.push($(this).val());
    });

 console.log(developer1.devSkills);
 console.log(developer1);
  devsArray.addDeveloper(developer1);
  console.log(devsArray.devs);
  textInfo(developer1);

  $(".app-form").hide();
  $(".interface").show();
  $(".jumbotron").show();
  $(".developer-info").show();


});    // to close the  app-btn click.


 ///Company -click function to post the jop posting form
  $("#post-btn").click(function(event){
    event.preventDefault();



    // var newJobPost = new JobPosting();

    var comName = $("#com-name").val();
    // alert(comName);
    var jobTitle = $("#job-title").val();
    var difficulty = $("#difficulty").val();
    var jobLocation = $("#location").val();
    var jobCondition = $("#condition").val();
    var jobDescription = $("#description").val();
    var moreJbSkills =  $("#more-jb-skills").val();
    var jbSkills=[];
     newPost = new JobPosting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,jbSkills,moreJbSkills);
   // cName = newPost.comName;
    console.log(newPost);
    newPost.jbSkills = [];
     jbSkillListElement = "";
    $("input:checkbox[name=job-skills]:checked").each(function(){
        jbSkillListElement += "<li>" + $(this).val() + "</li>";
        newPost.jbSkills.push($(this).val());
   });


   posting(newPost);
   posts.addJobPosting(newPost);
   console.log(posts);
   $(".apply").click(function(){
     $(".app-form").show();
     $(".jumbotron").hide();
     $(".interface").hide();
     $(".post-form").hide();
     $(".developer-info").hide();
     reset();
   });

   $(".interface").show();
   $(".jumbotron").show();
   $(".post-form").hide();
   $(".developer-info").hide();
   reset();


  }); //for the post click

  $("#apply").click(function(){
    $(".app-form").show();
    $(".jumbotron").hide();
    $(".interface").hide();
    $(".post-form").hide();
    $(".developer-info").hide();
    reset();
  });

  $("#posting-btn").click(function(){
    $(".post-form").show();
    $(".jumbotron").hide();
    $(".interface").hide();
    $(".app-form").hide();
    $(".developer-info").hide();

  });

});
