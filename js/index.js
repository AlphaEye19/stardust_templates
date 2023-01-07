// var popWindow= document.getElementById("click1");

// popWindow.addEventListener('click',(e)=>{
//     popWindow.classList.toggle("popup_window");   
// })

const my_modal = document.getElementById("myModal");

document.addEventListener("DOMContentLoaded", () => {
    const clickedBtn1 = document.getElementById("myBtn");
    const clickedBtn2 = document.getElementById("myBtn2");
    const clickedBtn3 = document.getElementById("myBtn3");

    const closeBtn1 = document.getElementById("myBtn_close");
    const closeBtn2 = document.getElementById("myBtn_close2");
    const closeBtn3 = document.getElementById("myBtn_close3");

    // opens modal ->
    clickedBtn1.addEventListener('click',()=>{
        $("#myModal").modal();
    });
    clickedBtn2.addEventListener('click',()=>{
        $("#myModal2").modal();
    });
    clickedBtn3.addEventListener('click',()=>{
        $("#myModal3").modal();
    });

    // closes modal ->
    closeBtn1.addEventListener('click',()=>{
        $("#myModal").modal('hide');
      });
    closeBtn2.addEventListener('click',()=>{
        $("#myModal2").modal('hide');
      });  
    closeBtn3.addEventListener('click',()=>{
        $("#myModal3").modal('hide');
      });  
  });