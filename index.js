function displayPoem(response){
  console.log("poem generated");

  new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
      });
    }

function generatePoem(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey ="f6fc8d6e97o4b220033t044a1041dfbf";
let prompt = `User's instructions: Generate a short poem about ${instructionsInput.value}`;
let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a Swiss 4 line poem in basic HTML and separate each line with a <br />. Please follow the user's instructions and sign with 'Shecodes AI' at the end of the poem";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console-log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);