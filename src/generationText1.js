// Função que gera textos automaticamente.
function showTextEfect(idElemento, textoArray, velocidade, callback) {
    let index = 0;
    let textoAtual = '';
    let itIsBlock= false
  
  
    function exibirTexto() {
      textoAtual = textoArray[index];
  
      if (textoAtual.length > 0) {
        document.getElementById(idElemento).innerHTML += textoAtual.charAt(0);
        textoArray[index] = textoAtual.slice(1);
        setTimeout(exibirTexto, velocidade);
      } else {
        index++;
        if (index < textoArray.length) {
          document.getElementById(idElemento).innerHTML += '<br>';
          setTimeout(exibirTexto, 1000);
        } else {
          // Se um callback foi fornecido, chame-o
          if (typeof callback === 'function' && itIsBlock === false) {
            callback();
          }
        }
      }
    }
  
    exibirTexto();
}
  
// Utilização para o texto "mytExperienceText"
const firstTextMyExperience = [

    "My name is Thiago Rodrigues. I hold a degree in Systems Analysis and Development and have a postgraduate degree in   Software Engineering. As a full-stack JavaScript programmer, I have 4 years of experience."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('myExperienceText-1', firstTextMyExperience, 15, () => {

        // Este código será executado após a conclusão da função showTextEfect
        document.getElementById('btn-read-more-main-content').style.display = 'block';
    });

});

// Utilização para o texto "about-me"
const firstTextAboutMe = [
"I am a person who faces adversities with determination, embracing challenges, especially those that most tend to avoid. This perseverant mindset has been cultivated since my childhood, a phase of life characterized by difficulties. In my programming practice, I apply the lessons drawn from life. I have the habit of dedicating long hours, sometimes even staying up all night, to solve problems (bugs) or contemplate the implementation of more intricate functionalities."
];

document.addEventListener('DOMContentLoaded', () => {

showTextEfect('about-me-text-1', firstTextAboutMe, 15, () => {

    document.getElementById('btn-read-more-about-me').style.display = 'block';
});

});

//Generation Front End Technology List
const FrontEndTechnologyList = [

"HTML | CSS | Javascript | Java | Python | React | Angular | Typescript | Bootstrap | Tailwindcss | Bulma | Gimp | Gestão de Projetos de TI | Metodologia Ágil Scrum | Vercel | Netlify | Render | Git | GitHub."

];

document.addEventListener('DOMContentLoaded', () => {

showTextEfect('languages-front-end', FrontEndTechnologyList, 50, () => {

    return

});

});

//Generation Back End Technology List
const BackEndTechnologyList = [

"NodeJs | Express | Api | Mongoose | Sequelize | Prisma | MongoDB | MySQL | PostgreSQL | WebSocket | Token | bcrypt."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('languages-back-end', BackEndTechnologyList, 50, () => {

        return

    });

});

//Generation Undergraduate Degree
const textMyUndergraduateDegree = [

    "Undergraduate Degree in Systems Analysis and Development at the University of Goiás 2020 - 2023."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-undergraduate-degree', textMyUndergraduateDegree, 50, () => {

        return

    });

});

//Generation Postgraduate Degree
const texPostGraduate = [

    "Postgraduate Degree in Software Engineering at the University of Goiás 2023 - 2024."
];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-post-graduate', texPostGraduate, 50, () => {

        return

    });

});

//Generation Professional Courses
const texProfessionalCourses = [
    "Python Course by 'Curso em Video' - 2020.",
    "Java Course with Object-Oriented Programming by 'Curso em Video' - 2020.",
    "Html, Css, and Javascript Course by 'Curso em Video' - 2020.",
    "Advancing to Full Stack Javascript Developer Course by OneBitCode - 2021."
];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-professional-courses', texProfessionalCourses, 50, () => {

        return
        
    });

});
