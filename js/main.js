function display()
{
  let result="" ;
  for (let i = 0; i < 12;i++) {
  result+=`<div class="col-md-4 mb-4 ">
  <div class="course">
    <div class="card" ">
      <img src="images/academy.jpg" class="img-fluid card-img-top" alt="...">
      <div class="card-body">
        <h5 class=" card-title">Marketing and advertising on Youtube</h5>
        <small ><span><i class="my-2 far fa-user mx-1"></i> </span> Ahmed Za'ter</small>
        <p class=" text-muted card-text">The Course covers how to deal with youtube.and how can you make money from it.From the very first creation your</p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <span class="for_opacity text-muted ">(1200) </span>
        <div class="inner px-2  d-flex w-100 justify-content-between">
          <h6 class="py-2 px-3 rounded-2">Marketing</h6>
          <div class="" >
            <i class="far mt-4 text-danger fa-heart"></i>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</div>`

  }
  document.getElementById("demo").innerHTML=result;
}
display();
$(".control").click(function(){
  $(".control").css({color:"grey", backgroundColor:"white", opacity:".5"})
  $(this).css({color:"rgb(23,170,28)", backgroundColor:"white", opacity:"1"})
  
})







$('.nav-btn').click(function(){
  $(".nav-btn").css({color:"black", backgroundColor:"white"})
  $(this).css({color:"white", backgroundColor:"rgb(23,170,28)"})
})

