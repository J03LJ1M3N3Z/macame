/*loader*/
$(window).on("load",function(){
    $(".loader").fadeOut(3500);
});

//Carousel
$(document).ready(function(){

	$('#indexPrincipal').owlCarousel({
            loop:true,
            autoplay: false,
            margin:10,
            nav:true,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },

                900:{
                    items:1                },

                1200:{
                    items:1
                },

                1500:{
                    items:1
                }
            }
        })

        $('#indexPrincipalMovil').owlCarousel({
            loop:true,
            autoplay: false,
            margin:10,
            nav:true,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },

                900:{
                    items:1                
                },

                1200:{
                    items:1
                },

                1500:{
                    items:1
                }
            }
        })

        $('#productosPopulares').owlCarousel({
            loop:true,
            autoplay: true,
            margin:150,
            nav:true,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:2,
                    margin:50
                },
                600:{
                    items:2,
                    margin:50
                },

                700:{
                    items:3,
                    margin:50
                },

                900:{
                    items:3
                },

                1200:{
                    items:4
                },

                1500:{
                    items:4
                }
            }
        })
});


//FIXES SIDEBAR

jQuery(window).scroll(function() {    
    var scrollSidebar = jQuery(window).scrollTop();
    if (scrollSidebar >= 20) {
        jQuery(".navbar").addClass("fixSidebar");
    } else {
        jQuery(".navbar").removeClass("fixSidebar");
    }
});

//MEGAMENU
document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
}); 
// DOMContentLoaded  end

