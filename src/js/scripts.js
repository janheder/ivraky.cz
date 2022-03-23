// -----------------------------------------------------------------------------
// LAZYLAOD INIT
// -----------------------------------------------------------------------------

/*
lazyload();
*/
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadHidden = false;



// -----------------------------------------------------------------------------
// MODAL INIT
// -----------------------------------------------------------------------------


MicroModal.init({ 
    openClass: 'is-open', 
    disableScroll: true, 
    disableFocus: true, 
    awaitOpenAnimation: true,
    awaitCloseAnimation: true, 
    debugMode: false 
});


// -----------------------------------------------------------------------------
// RESPONSIVE TOGGLES
// -----------------------------------------------------------------------------

var navToggle = document.getElementById('navToggle');
if (navToggle){
    document.getElementById('navToggle').addEventListener('click', function() {
        document.body.classList.toggle('--nav-active');
    });
}

var searchToggle = document.getElementById('searchToggle');
if (searchToggle){
    document.getElementById('searchToggle').addEventListener('click', function() {
        document.body.classList.toggle('--search-active');
        document.getElementById('searchbox').focus();
    });
}

var filter = document.getElementById('filterContent');
if (filter){
    document.getElementById('filterToggle').addEventListener('click', function() {
        document.body.classList.toggle('--filter-active');
    });
}

document.getElementById('darkBackdrop').addEventListener('click', function() {
    document.body.classList.remove('--nav-active','--search-active','--filter-active');
});

var userToggle = document.getElementById('userToggle');
if (userToggle){
    userToggle.addEventListener('click', function() {
        document.body.classList.toggle('--user-active');
    });
}

document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('search__input')) {
        if (document.getElementById('searchAutocomplete').classList.contains('--active')){
            document.getElementById('searchAutocomplete').classList.remove('--active');
        };
    }
});


// -----------------------------------------------------------------------------
// NUMBER STEPPER
// -----------------------------------------------------------------------------


var inc = document.getElementsByClassName("stepper");

if (inc.length > 0){
    
    for (abc = 0; abc < inc.length; abc++) {
    var incI = inc[abc].querySelector("input"),
        id = incI.getAttribute("id"),
        min = incI.getAttribute("min"),
        max = incI.getAttribute("max"),
        step = incI.getAttribute("step");
    document
        .getElementById(id)
        .previousElementSibling.setAttribute(
        "onclick",
        "stepperInput('" + id + "', -" + step + ", " + min + ")"
        ); 
    document
        .getElementById(id)
        .nextElementSibling.setAttribute(
        "onclick",
        "stepperInput('" + id + "', " + step + ", " + max + ")"
        ); 
    }

    function stepperInput(id, s, m) {
        var event = new Event('change');
        var el = document.getElementById(id);
        if (s > 0) {
            if (parseInt(el.value) < m) {
            el.value = parseInt(el.value) + s;
            el.dispatchEvent(event);
            }
        } else {
            if (parseInt(el.value) > m) {
            el.value = parseInt(el.value) + s;
            el.dispatchEvent(event);
            }
        }
    }
}


// -----------------------------------------------------------------------------
// HOMEPAGE CARUSEL
// -----------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    var homecarousel = document.getElementById('homecarousel');

    if (homecarousel){
        const indexCarousel = new Siema({
            selector: '#homecarousel',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            duration: 250,
            loop: true,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
        setInterval(() => indexCarousel.next(), 7000);
        
        document.querySelector('.prev').addEventListener('click', () => indexCarousel.prev());
        document.querySelector('.next').addEventListener('click', () => indexCarousel.next());
    }
});


// -----------------------------------------------------------------------------
// PRODUCT DETAIL CARUSEL
// -----------------------------------------------------------------------------



    document.addEventListener("DOMContentLoaded", () => {

        var carousel = document.getElementsByClassName('product-detail__carousel');

        if (carousel.length > 0){


            let $imagesContainer = document.getElementById('product-carousel');
            let $lightbox = document.getElementById('lightbox');
        
            let delta = 6;
            let startX;
            let startY;

            $imagesContainer.addEventListener('mousedown', (event) => {
                startX = event.pageX;
                startY = event.pageY;
            });
            $imagesContainer.addEventListener('mouseup', e => {
                let diffX = Math.abs(event.pageX - startX);
                let diffY = Math.abs(event.pageY - startY);
                if (diffX < delta && diffY < delta) {
                    let imageWrapper = e.target.closest('.product-detail__carouselLi');
                    if (imageWrapper) {
                        let image = imageWrapper.querySelector('img');
        
                        if (image) {
                            $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML ;
                            $lightbox.classList.add('show');
                        }
                    }
                } else {
                    // pause
                }
        
            });
        
            $lightbox.addEventListener('click', (e) => {
                if (!e.target.hasAttribute('src')) {
                    $lightbox.classList.remove('show');
                }
            });

        }
    });


// -----------------------------------------------------------------------------
// NAV SUBMENU
// -----------------------------------------------------------------------------


var navitem = document.querySelectorAll('.expandable .nav-link');

for (let loop = 0; loop < navitem.length; loop++) {

    document.getElementById('subToggle-'+ loop).addEventListener('click', function(e) {
        document.getElementById('sub-'+ loop).classList.toggle('--active');
    });

}


// -----------------------------------------------------------------------------
// PRODUCT DETAIL VARIANTS
// -----------------------------------------------------------------------------


var variants = document.getElementById('variants');

if (variants){

    document.querySelector('.variants__list').addEventListener('click', function (e) {

        this.classList.toggle('--active');
        
        var target = e.target;

        if (e.currentTarget.querySelector('.--active')) {
            e.currentTarget.querySelector('.--active').classList.remove('--active');
        }
        

        var input = target.querySelector('input').checked = true;


        target.classList.add('--active');

        var code = target.dataset.code;
        var stock = target.dataset.stock;
        var stockstatus = target.dataset.stockstatus;
        var priceold = target.dataset.priceold;
        var price = target.dataset.price;
        var pricevat = target.dataset.pricevat;

        document.getElementById('product-code').innerHTML = code;
        document.getElementById('stock').dataset.status = stockstatus;
        document.getElementById('stock').innerHTML = stock;
        if(priceold == null) {
            
            document.getElementById('price-old').innerHTML = "";           
        }else{
            document.getElementById('price-old').innerHTML = priceold;  
        }
        document.getElementById('price-main').innerHTML = price;
        document.getElementById('price-vat').innerHTML = pricevat;
    });
}



// -----------------------------------------------------------------------------
// REGISTER TOGGLE 
// -----------------------------------------------------------------------------


if(document.getElementById('register-form')){
    document.getElementById('faToggle').onclick = function() {
        document.getElementById("register-fa-name").toggleAttribute("required");
        document.getElementById("register-fa-street").toggleAttribute("required");
        document.getElementById("register-fa-street-n").toggleAttribute("required");
        document.getElementById("register-fa-city").toggleAttribute("required");
        document.getElementById("register-fa-psc").toggleAttribute("required");
        document.getElementById("register-fa-state").toggleAttribute("required");
    }

    document.getElementById('faComToggle').onclick = function() {
        document.getElementById("register-fa-ico").toggleAttribute("required");
    }
}


// -----------------------------------------------------------------------------
// PASSWORD SHOW
// -----------------------------------------------------------------------------


if(document.getElementById('showLoginPassword')
){
    document.getElementById('showLoginPassword').onclick = function() {
        var x = document.getElementById('login-password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}


if(document.getElementById('showRegisterPassword')
){
    document.getElementById('showRegisterPassword').onclick = function() {
        var x = document.getElementById('heslo');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

if(document.getElementById('showCartRegisterPassword')
){
    document.getElementById('showCartRegisterPassword').onclick = function() {
        var x = document.getElementById('cart-register-password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}