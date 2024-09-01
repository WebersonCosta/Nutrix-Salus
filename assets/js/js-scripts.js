class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.1}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    handleLinkClick() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navLinks.forEach((link) => {
            link.addEventListener("click", this.handleLinkClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

// Código ScrollReveal para animação suave ao rolar a página
const sr = ScrollReveal({
    origin: 'bottom',   // direção da animação
    distance: '50px',   // distância do movimento do elemento
    duration: 100,     // duração da animação
    delay: 100,         // atraso antes da animação começar
    reset: false        // se a animação deve repetir ao rolar de volta
});

// Aplicar a animação aos elementos com a classe .section
sr.reveal(
    `#about .text-about,
    #products .container,
    #products .content-section,
    #articles .content-section,
    #articles .card
    footer
    `,{interval: 100})

// ================== BACK TO TOP BUTTON ===================== //

const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
    
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function(){
    backToTop()
})