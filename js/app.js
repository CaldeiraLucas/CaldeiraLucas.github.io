var app = new Vue({
    el: '#app',
    data: {
        content: 'profile',
        show: false,
        slideIndex: 0,
        subjSelected: '',
        subj: {
            art: {
                title: 'Ilustrações',
                files: [
                    'img/trabalhos/ilust/Girassol.jpg',
                    'img/trabalhos/ilust/kurisutina.png',
                    'img/trabalhos/ilust/red_arc.jpg',
                    'img/trabalhos/ilust/saber_lily.jpg',
                    'img/trabalhos/ilust/white_len.jpg',
                    'img/trabalhos/ilust/Stella.png',
                    'img/trabalhos/ilust/PaolaNY.jpg',
                    'img/trabalhos/ilust/New Canvas.png',
                    'img/trabalhos/ilust/dancarina.jpeg',      
                    'img/trabalhos/ilust/treino 001.jpg',                        
                    'img/trabalhos/ilust/Ayame.png',                                           
                    'img/trabalhos/ilust/Muslim.jpg',                   
                    'img/trabalhos/ilust/Vanessa.jpg',
                    'img/trabalhos/ilust/WTLD.jpg',
                    'img/trabalhos/ilust/Ciel.png', 
                    'img/trabalhos/ilust/JackPark.jpg',
                ],
            },
            pint: {
                title: 'Pinturas digitais',
                files: [
                    'img/trabalhos/pint/Arcueid.png',
                    'img/trabalhos/pint/poaru.jpg',
                ],
            }
        }
    },
    methods: {
        changeContent(content) {
            var item1 = document.getElementById('item1');
            var item2 = document.getElementById('item2');

            if (content === 'profile') {
                this.content = 'profile';
                item1.classList.add('active');
                item2.classList.remove('active');
            }
            if (content === 'gallery') {
                this.content = 'gallery';
                item1.classList.remove('active');
                item2.classList.add('active');
            }
        },
        handleWheel(page) {
            console.log(page);
            var pg1 = document.getElementById('pg1');
            var pg2 = document.getElementById('pg2');
            var pg3 = document.getElementById('pg3');

            var height = document.getElementById('intro').offsetHeight;

            window.addEventListener('wheel', function(event) {
                console.log(event.deltaY);
                if (event.deltaY < 0) {
                    console.log("scrolling up")
                    if (page == 'intro') {
                        pg1.classList.remove("active");
                        pg2.classList.remove("active");
                        pg3.classList.add("active");
                        var scrollDiv = document.getElementById('hab').offsetTop;
                    }
                    if (page == 'exp') {
                        pg1.classList.add("active");
                        pg2.classList.remove("active");
                        pg3.classList.remove("active");
                        var scrollDiv = 0;
                    }
                    else if (page == 'hab') {
                        pg1.classList.remove("active");
                        pg2.classList.add("active");
                        pg3.classList.remove("active");
                        var scrollDiv = height;
                    }
                } else if (event.deltaY > 0) {
                    console.log("scrolling down")
                    if (page == 'intro') {
                        pg1.classList.remove("active");
                        pg2.classList.add("active");
                        pg3.classList.remove("active");
                        var scrollDiv = height;
                    }
                    else if (page == 'exp') {
                        pg1.classList.remove("active");
                        pg2.classList.remove("active");
                        pg3.classList.add("active");
                        var scrollDiv = document.getElementById('hab').offsetTop;
                    }
                    else if (page == 'hab'){
                        pg1.classList.add("active");
                        pg2.classList.remove("active");
                        pg3.classList.remove("active");
                        var scrollDiv = 0;
                    }
                }

                document.getElementById('profile').scrollTo({ top: scrollDiv, behavior: 'smooth' });
             })
        },
        scrollWin(page) {
            var pg1 = document.getElementById('pg1');
            var pg2 = document.getElementById('pg2');
            var pg3 = document.getElementById('pg3');

            var height = document.getElementById('intro').offsetHeight;


            if (page == 'intro') {
                pg1.classList.add("active");
                pg2.classList.remove("active");
                pg3.classList.remove("active");
                var scrollDiv = 0;
            }
            if (page == 'exp') {
                pg1.classList.remove("active");
                pg2.classList.add("active");
                pg3.classList.remove("active");
                var scrollDiv = height;
            }
            if (page == 'hab') {
                pg1.classList.remove("active");
                pg2.classList.remove("active");
                pg3.classList.add("active");
                var scrollDiv = document.getElementById(page).offsetTop;
            }
            
            document.getElementById('profile').scrollTo({ top: scrollDiv, behavior: 'smooth' });
        },
        scrollSubj(direction, id) {
            var scrollPos = document.getElementById(id).scrollLeft;
            var id = document.getElementById(id);
       
            if (direction == 'right') {
                id.scrollBy({ left: 400, behavior: 'smooth' });
                scrollPos+=400;
            }
            if (direction == 'left') {
                id.scrollBy({ left: -400, behavior: 'smooth' });
                scrollPos-=400;
            }
            
            console.log(id.scrollWidth);
            if (scrollPos > 0)          
                id.getElementsByClassName('left')[0].style.visibility = "visible";
            else
                id.getElementsByClassName('left')[0].style.visibility = "hidden";

            if(scrollPos >= id.scrollWidth-800)
                id.getElementsByClassName('right')[0].style.visibility = "hidden";
            else
                id.getElementsByClassName('right')[0].style.visibility = "visible";
        },
        switchSlides() {				
            if (this.slideIndex > this.subjSelected.files.length - 1) { this.slideIndex = 0 }
            if (this.slideIndex < 0) { this.slideIndex = this.subjSelected.files.length - 1 }
        },
        showSlides(n, i) {				
            this.subjSelected = i;
            this.slideIndex = n;
            this.show = true;
        }
    }
})