let body =document.querySelector("body");
let sapns_to_open =document.querySelector(".up_bar .left .spans");
let close_nav =document.querySelector(".up_bar .left .close");
let nav_bar =document.querySelector(".up_bar .left ul");
let car_icon =document.querySelector(".up_bar .right .car img");
let cart_div=document.querySelector(".up_bar .right .car .cart ");
 let open_close_for_car=0;
let broduct =["ecommerce-product-page-main/images/image-product-1.jpg","ecommerce-product-page-main/images/image-product-2.jpg","ecommerce-product-page-main/images/image-product-3.jpg","ecommerce-product-page-main/images/image-product-4.jpg"];
let father = document.querySelector(" .body_of_site .left .father_iamges");
let sons =[document.querySelector(".body_of_site .left .sons .sone_1"),
document.querySelector(".body_of_site .left .sons .sone_2"),
document.querySelector(".body_of_site .left .sons .sone_3"),
document.querySelector(".body_of_site .left .sons .sone_4")
];
let less = document.querySelector(".body_of_site .right .greater_than button:first-child");
let greater = document.querySelector(".body_of_site .right .greater_than button:last-child");
let count = document.querySelector(".body_of_site .right .greater_than span");
let count_for_span=0;
let addo = document.querySelector(".body_of_site .right .button_car");
let image_in_upBar =document.querySelector(".up_bar .right .car .cart .child .image ");
let count_for_product=document.querySelector(".up_bar .right .car .cart .child .text .count");
let the_finally_price=document.querySelector(".up_bar .right .car .cart .child .text .equail");
let productsss=document.querySelector(".up_bar .right .new");
let delet_icon=document.querySelector(" .up_bar .right .car .cart .child .content .logo")
let content_in_car=document.querySelector(" .up_bar .right .car .cart .child ");
let when_empty=document.querySelector(".up_bar .right .car .cart .nocontent");
let decreas=document.querySelector(".body_of_site .left .father_iamges img:last-child");
let increas=document.querySelector(".body_of_site .left .father_iamges img:first-child");
count.textContent=count_for_span
greater.onclick=function(){
    count_for_span++;
    count.textContent=count_for_span;

}
less.onclick=function(){
   
    if( count.textContent>0){
         count_for_span--;
         count.textContent=count_for_span;
    }else if( count.textContent<=0){

    }
   
}
function goo(){
    let x=0;
    
        decreas.onclick=function(){
            if(x<broduct.length-1){
        x++;
    }
        father.style.backgroundImage=`url(${broduct[x]})`; 
      
    
    }
    // ###
    increas.onclick=function(){
        if(x>0){
    x--;
}
    father.style.backgroundImage=`url(${broduct[x]})`; 
   

}
}
goo();

for(let i =0 ; i<sons.length; i++){
    sons[i].onclick=function(){
        for(let m =0 ; m<sons.length; m++){
       sons[m].classList.remove("on")
        }  
        this.classList.add("on");
        father.style.backgroundImage=`url(${broduct[i]})`;
    }
}

addo.onclick=function(){
    for(let i =0 ; i<sons.length;i++){
    if(  sons[i].classList.contains('on')){
 image_in_upBar.style.backgroundImage=`url(${broduct[i]})`;
    }
    }
    count_for_product.textContent=count_for_span; 
    the_finally_price.textContent="$"+count_for_span*125;
    if(count_for_span>0){
        content_in_car.style.display="block";
        productsss.textContent=count_for_span;
        productsss.style.display="block";
        when_empty.style.display="none";
    }else{
        content_in_car.style.display="none";
        productsss.style.display="none";
        when_empty.style.display="block";
    }
   
}
delet_icon.onclick=function(){
    productsss.style.display="none";
    content_in_car.style.display="none";
    when_empty.style.display="block";
}






car_icon.onclick=function(){
   
    if (open_close_for_car===0){
        cart_div.style.display="block";
        open_close_for_car++;
    }else if(open_close_for_car===1){
        cart_div.style.display="none";
        open_close_for_car--;
    }
}

    sapns_to_open.onclick=function(){
        nav_bar.style.display="block";
        close_nav.style.display="block";
        body.style.backgroundColor=" rgba(0, 0, 0, 0.362)";
        if(cart_div.style.display==="block"){
            cart_div.style.display="none";
            open_close_for_car--;
        }
        
    };
    close_nav.onclick=function(){
        nav_bar.style.display="none";
        close_nav.style.display="none";
        body.style.backgroundColor=" hsl(223, 64%, 98%)"
      
   
    };  


    

    


