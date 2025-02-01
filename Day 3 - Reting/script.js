const emojies = [
    {
        title: "Terrible",
        emoji: "😫"
    },
    {
        title: "Bad",
        emoji: "😔"
    },
    {
        title: "Okey",
        emoji: "😊"
    },
    {
        title: "Good",
        emoji: "😄"
    },
    {
        title: "Great",
        emoji: "😃"
    }
];

let entities = '';
const emojiesContainer = document.querySelector('.emojies-container')

emojies.forEach((emoji) =>{
    entities += `
         <div class="emojies">
            <h1>${emoji.emoji}</h1>
            <p>${emoji.title}</p>
        </div>
    `
});

emojiesContainer.innerHTML += entities;
