export default function (ctx) {
    const language = navigator.language.split("-")[0];

    const pt = {
        menu: ["Perfil", "Artes"],
        profile: {
            intro: {
                title: "Quem sou",
                text: `<p>Bacharel em Desenho Industrial com Habilitação em Design de Mídias
                        Digitais pela PUC-Rio (2014-2019).
                      </p>
                      <p>
                        Embora seja de falar pouco, gosta de ouvir as pessoas. Racional,
                        empático e esforçado, tenta ser útil o quanto possível para os
                        outros. Em busca de mais conhecimentos em desenvolvimento web
                        (front-end) e ilustração.
                      </p>
                      <p>
                        Nas horas vagas, ouve música, pratica esportes, assiste Youtube ou
                        Netflix, e joga casualmente.
                      </p>`,
            },
            courses: {
                title: "Cursos",
                text: `        <li>Design Gráfico e Web Design (Seven/2014)</li>
                    <li>Inglês (Kumon/2019)</li>
                    <li>Introdução à linguagem Python (Udemy/2019)</li>
                    <li>Introdução à linguagem Javascript (Udemy/2019)</li>
                    <li>Vuejs - Primeiros Passos (Udemy)</li>
                    <li>Git e Github para iniciantes (Udemy)</li>`,
            },
            exp: {
                title: "Experiências profissionais",
                text: `        <li>
                      Monitorias PUC-Rio
                      <ul>
                        <li>Modelagem virtual (2016.2 - 2017.1)</li>
                        <li>Edição e tratamento de imagem (2018.1)</li>
                      </ul>
                    </li>
                    <li>Tradutor e editor na VNX+</li>
                    <li>Editor na Noveland (2018 - 2020)</li>
                    <li>UI Designer/Front End Dev Jr na Voodfy (2020 - 2021)</li>
                    <li>Diagramador de capas na Kiniga (2021 - )</li>`,
            },
            knowhow: {
                title: "Conhecimentos",
                subtitle: [
                    "Desenvolvimento Web",
                    "Design, Artes e Edição",
                    "Idiomas",
                    "Outros",
                ],
                text: ["Inglês", "Espanhol"],
            }
        },
        arts: {
            titles: ["Cópias", "Papel + lápis, etc", "(Meio) Digitais"],
            captions: [
                "Cena do Bruce Lee, feita com papel vegetal e lápis B, 3B e 6B", 
                "Gaio-azul, feita papel vegetal e caneta nanquim",
                "Cópia de fotografia, feita com papel vegetal e caneta nanquim",
                "Caça Mig29, feita com papel vegetal, caneta nanquim e régua",
                "Ao invés de apenas desenhar um girassol, pensei que seria interessante imitar um quadro também",
                "Personagem imaginada para uma história minha que ainda não foi para o papel",
                "Solitário trabalho feito a lápis, caneta nanquim e lápis de cor",
                "Primeira e por enquanto única tentativa de ilustrar algo com giz de cera",
                "Desenhado a lápis mas colorido digitalmente, por isso está aqui",
                "Redesign da Ayame, personagem original criada por Bigorados",
                "Inspirado por uma fotografia da National Geographic. Não ficou tão bonita quanto, mas um bom treino",
                "De dia uma pessoa comum, de noite uma jogadora de rpg. Ilustrado para uma apresentação sobre jogos e tecnologia VR",
                "Desenho não usado para um projeto de jogo de tabuleiro com temática medieval",
                "Ilustração para o conto de natal 'When the lights are down' (Noveland)",
                "Ilustração para Jack Park e o Mistério das Realidades Alternativas, uma web novel de Lupe Sano",
                "Mensurando minha evolução, parte 1",
                "Mensurando minha evolução, parte 2",
                "9 de 10 especialistas afirmaram que se expor ao sol regularmente faz bem à saude. O décimo não foi encontrado, deve estar na praia"
            ]
        }
    };
    const en = {
        menu: ["Profile", "Arts"],
        profile: {
            intro: {
                title: "Who I am",
                text: `                    <p>
                                Bachelor in Industrial Design with Qualification in Digital Media Design at PUC-Rio (2014-2019)
                                </p>
                                <p>
                                Although he doesn't talk much, he likes to listen to people.
                                Rational, empathetic and hardworking, try to be as helpful as possible for the team.
                                Looking for more knowledge in web development (front-end) and illustration.
                                </p>
                                <p>
                                In spare time, listen music, play sports, watch Youtube or Netflix, and casually play video-games.
                                </p>`,
              },
              courses: {
                title: "Courses",
                text: `
                                <li>Graphic Design and Web Design (Seven/2014)</li>
                                <li>English (Kumon/2019)</li>
                                <li>"Introduction to the Python language" (Udemy/2019)</li>
                                <li>"Introduction to the Javascript language" (Udemy/2019)</li>
                                <li>"Vuejs - First Steps" (Udemy)</li>
                                <li>"Git and Github for beginners" (Udemy)</li>
                            `,
              },
              exp: {
                title: "Professional experiences",
                text: `
                                <li>Tutorships PUC-Rio
                                <ul>
                                    <li>Virtual modeling (2016.2 - 2017.1)</li>
                                    <li>Editing and image processing (2018.1)</li>
                                </ul>
                                </li>
                                <li>Translator and editor at VNX+</li>
                                <li>Editor at Noveland (2018 - 2020)</li>
                                <li>UI Designer/Front End Dev Jr at Voodfy (2020 - 2021)</li>
                                <li>Cover editor at Kiniga (2021)</li>
                            `,
              },
              knowhow: {
                title: "Knowledges",
                subtitle: [
                  "Web Development",
                  "Design, Arts and Editing",
                  "Languages",
                  "Others",
                ],
                text: ["English", "Spanish"],
              }
        },
        arts: {
            titles: ["Copies", "Paper + pencil, etc", "(Half) Digitals"],
            captions: [
                "Bruce Lee's scene: made with vegetal paper, and pencils B, 3B, 6B", 
                "Blue jay: made with vegetal paper, and ink pen",
                "Copie of a photograph: made with vegetal paper, and ink pen",
                "Fighter plane Mig29: made with vegetal paper, ink pen, and ruler",
                "Instead of just drawing a sunflower, I thought it would be interesting to imitate a painting too",
                "Character imagineted for a story of mine that I don't put on the paper yet",
                "Lonely work done in pencil, ink pen and colored pencils",
                "First and so far only attempt to illustrate something with crayons",
                "This was draw with pencil, but was digitally colored, that's why is here",
                "Redesign of Ayame: an original character created by Bigorados",
                "Inspired by a photo from National Geographic. Not so pretty, but a good training",
                "By day an ordinary person, by night an rpg player. Illustrated for a presentation about games and VR technology",
                "Unused drawing for a medieval themed board game project",
                "Illustration for the Christmas tale 'When the lights are down' (Noveland)",
                "Illustration to 'Jack Park e o Mistério das Realidades Alternativas', a Lupe Sano's web novel",
                "Measuring my evolution, part 1",
                "Measuring my evolution, part 2",
                "9 out of 10 experts said getting regular sun is good for your health. The tenth was not found, it must be on the beach"
            ]
        }
    };

    switch (language) {
        case "pt":
            {
                if (ctx === "menu") return pt.menu;
                if (ctx === "profile") return pt.profile;
                if(ctx === "arts") return pt.arts;
            }
            break;

        case "en":
            {
                if (ctx === "menu") return en.menu;
                if (ctx === "profile") return en.profile;
                if(ctx === "arts") return en.arts;
            }
            break;
    }
}