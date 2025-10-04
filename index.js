function generatePoem(event){
event.preventDefault();


   new Typewriter("#poem", {
        strings:"To see the clouds his spirit yearned toward so",
        autoStart: true,
        cursor:"",
        delay: 1,
      });
    }



let poemFormElement = document.querySelector(".poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);