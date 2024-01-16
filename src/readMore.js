//Função que gera texto automaticamente após clicar em ler mais
function readMoreText(nameIdTag, text){

    let about_me_text = document.getElementById(nameIdTag)
  
    if(about_me_text){
  
      about_me_text.innerHTML=''
  
      const secondTextAboutme = [text]
      
      showTextEfect(nameIdTag, secondTextAboutme, 40);
    }
  
  }
  
  //'Read more' of main content
  document.getElementById('btn-read-more-main-content').addEventListener('click', ()=>{ 
  
    readMoreText('myExperienceText-2', "My journey doesn't end here; with a new job opportunity, I would have the conditions I need to pursue a Master's in Software Engineering. I hope the recruiter sees me as someone who will wholeheartedly embrace this job opportunity, which is much more than a source of income—it's an opportunity to expand my knowledge in the field of technology.")
  
    document.getElementById('btn-read-more-main-content').style.display = 'none';
  
  })
  
  //'Read more' of about me
  document.getElementById('btn-read-more-about-me').addEventListener('click', ()=>{ 
  
    readMoreText('about-me-text-2', "Driven by a passion for coding, I transform challenges into opportunities for growth, pushing the boundaries of my skills. My commitment to coding excellence is evident in my willingness to invest extensive hours to ensure seamless problem-solving and the implementation of complex features. This dedication, coupled with a resilient mindset, positions me as an ideal candidate for the programming role, ready to contribute my expertise to elevate projects and exceed expectations.")
  
    document.getElementById('btn-read-more-about-me').style.display = 'none';
  
  })