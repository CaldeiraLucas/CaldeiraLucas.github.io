/*navigator.language.split("-")[0]*/

var app = new Vue({
    el: '#app',
    data: {
        lang: navigator.language.split("-")[0],
        content: 'profile',
        text: {
            en: {
                menu: [
                    'Profile',
                    'Works'
                ],
                titles: [
                    'Who I am',
                    'Courses',
                    'Professional experiences',
                    'Knowledges'
                ],
                intro: `
                    <p>
                    Bachelor in Industrial Design with Qualification in Digital Media Design at PUC-Rio (2014-2019). 
                    </p>
                    <p>
                    Observant and rational, but also empathetic and creative. I try to be as helpful as possible to the team.
                    Constantly improving in the areas of digital art, front-end development, user interface and digital publishing.
                    </p>
                    <p>
                    In my spare time, I listen music, play sports, watch Youtube or Netflix, and casually play video-games.
                    </p>
                `,
                courses: `
                    <li>Graphic Design and Web Design (Seven/2014)</li>
                    <li>Portuguese and English (Kumon/2013, 2019)</li>
                    <li>"Introduction to the Python language” (Udemy/2019)</li>
                    <li>"Introduction to the Javascript language” (Udemy/2019)</li>
                `,
                exp: `
                    <li>Tutorships PUC-Rio
                    <ul>
                        <li>Virtual modeling (2016.2 - 2017.1)</li>
                        <li>Editing and image processing (2018.1)</li>
                    </ul>
                    </li>
                    <li>Editor at Noveland (2018 - 2020)</li>
                    <li>UI Designer/Front End Dev Jr at Voodfy (2020 - )</li>
                `,
                know: {
                    items: [
                        'Web Development',
                        'Creation and Editing',
                        'Languages'
                    ],
                    subitems: `
                        <li>English</li>
                        <li>Spanish</li>
                    `
                }
            },
            pt: {
                menu: [
                    'Perfil',
                    'Trabalhos'
                ],
                titles: [
                    'Quem sou',
                    'Cursos',
                    'Experiências profissionais',
                    'Conhecimentos'
                ],
                intro: `
                    <p>
                    Bacharel em Desenho Industrial com Habilitação em Design de Mídias Digitais pela PUC-Rio (2014-2019). 
                    </p>
                    <p>
                    Observador e racional, mas também empático e criativo. Busco ser útil o	máximo possível para a equipe.
                    Em eterno aperfeiçamento nas áreas de arte digital, desenvolvimento front-end, user interface e editoração eletrônica.
                    </p>
                    <p>
                    Nas horas vagas, ouço música, pratico esportes, assisto Youtube ou Netflix, e jogo casualmente.
                    </p>
                `,
                courses: `
                    <li>Design Gráfico e Web Design (Seven/2014)</li>
                    <li>Português e Inglês (Kumon/2013, 2019)</li>
                    <li>“Introdução à linguagem Python” (Udemy/2019)</li>
                    <li>“Introdução à linguagem Javascript” (Udemy/2019)</li>
                `,
                exp: `
                    <li>Monitorias PUC-Rio
                    <ul>
                        <li>Modelagem virtual (2016.2 - 2017.1)</li>
                        <li>Edição e tratamento de imagem (2018.1)</li>
                    </ul>
                    </li>
                    <li>Editor na Noveland (2018 - 2020)</li>
                    <li>UI Designer/Front End Dev Jr na Voodfy (2020 - )</li>
                `,
                know: {
                    items: [
                        'Desenvolvimento Web',
                        'Criação e Edição',
                        'Idiomas'
                    ],
                    subitems: `
                        <li>Inglês</li>
                        <li>Espanhol</li>
                    `
                },
            }
        },
        show: false,
        slideIndex: 0,
        subjSelected: '',
        subj: {
            art: {
                title: {
                    en: 'Arts',
                    pt: 'Artes'
                },
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
            }
        }
    },
    computed: {
        translate() {
            if (this.lang === 'en')
                return this.text.en
            if (this.lang === 'pt')
                return this.text.pt
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

            window.addEventListener('wheel', function (event) {
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
                    else if (page == 'hab') {
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
                scrollPos += 400;
            }
            if (direction == 'left') {
                id.scrollBy({ left: -400, behavior: 'smooth' });
                scrollPos -= 400;
            }

            console.log(id.scrollWidth);
            if (scrollPos > 0)
                id.getElementsByClassName('left')[0].style.visibility = "visible";
            else
                id.getElementsByClassName('left')[0].style.visibility = "hidden";

            if (scrollPos >= id.scrollWidth - 800)
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