document.addEventListener('DOMContentLoaded', function() {

   // sidebar links
   const dashboardLink = document.querySelector('.dashboard');
   const curriculumLink = document.querySelector('.curriculum');
   const assignLink = document.querySelector('.assign');
   
   // containers
   const dashboardContainer = document.getElementById('container');
   const curriculumContainer = document.getElementById('curriculum-container');
   const assignContainer = document.getElementById('assign-container');

   //  show only the dashboard and hide others
   curriculumContainer.style.display = 'none';
   assignContainer.style.display='none';

   // Dashboard
   dashboardLink.addEventListener('click', function(e) {
       e.preventDefault(); 
       dashboardContainer.style.display = 'block';
       curriculumContainer.style.display = 'none';
       assignContainer.style.display='none';
   });

   //Curriculum Management
   curriculumLink.addEventListener('click', function(e) {
       e.preventDefault();
       dashboardContainer.style.display = 'none';
       curriculumContainer.style.display = 'block';
       assignContainer.style.display='none';
   });

   // Assign Schedules
   assignLink.addEventListener('click', function(e) {
       e.preventDefault();
       dashboardContainer.style.display = 'none';
       curriculumContainer.style.display = 'none';
       assignContainer.style.display='block';
   });

    // live date and time   
    function updateClock() {
        var now = new Date();
        var datetime = now.toLocaleString();
    
        document.getElementById("datetime").innerHTML = datetime;
        document.getElementById("datetime2").innerHTML = datetime;
        document.getElementById("datetime0").innerHTML = datetime;
    }
    setInterval(updateClock, 1000);
    updateClock();
    
});



