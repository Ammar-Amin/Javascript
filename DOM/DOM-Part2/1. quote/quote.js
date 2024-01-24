const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('button');

// an array whose Elements are obj 
const arr = [
    {
        quote: 'Put into perspective you are one out of nearly 8 billion, Why care what people say.',
        person: 'unknown'
    },
    {
        quote: "Life will be better if you don't take things personally.",
        person: 'Unkown'
    },
    {
        quote: 'The less people you chill with, The less bullshit you deal with.',
        person: 'Wise Man'
    },
    {
        quote: 'We must not fall to the carnal pleasures of the world.',
        person: "manhwa's Monk"
    },
    {
        quote: "Act like you can't afford the bread until they find out you own the bakery.",
        person: 'stay Humble'
    },
    {
        quote: "When you talk you're only repeating what you already know. But if you listen, you may learn something new.",
        person: 'dalai lama'
    },
    {
        quote: '2 days of PROCASTINATION can destroy 2 months of DISCIPLINE.',
        person: 'david goggins'
    },
    {
        quote: "Don't let getting lonely make you reconnect with toxic people. You shouldn't DRINK POISON just because you're thirsty.",
        person: 'stay hard'
    },
    {
        quote: 'Tough times never LAST but TOUGH PEOPLE do.',
        person: 'unknown'
    },
    {
        quote: 'Holding onto ANGER is like drinking poison and expecting the other person to DIE.',
        person: 'UNKOWN'
    },
    {
        quote: "Hero? No! We are pirates! I lover heroes but I don't wanna be one.",
        person: 'Monkey D. Luffy'
    },
    {
        quote: "I've set myself to become the King of Pirates... and if I die trying... then at least I tried.",
        person: 'Monkey D. Luffy'
    },
    {
        quote: 'Why do you want to compete with people when you can make them work for you.',
        person: 'Ashneer grover'
    },

];



btn.addEventListener('click', function () {

    // Here, math.random times the arr.length will generate a no. between zero and the total no. of obj in our arr.
    // And math.floor will rounds a no. downwards to the nearest integear cuz we know random'll not generate a whole no. 
    let randomNumber = Math.floor(Math.random() * arr.length);
    // console.log(randomNumber);


    // will change the text, accod. to random index no. of array with properties and value.
    quote.innerText = arr[randomNumber].quote;
    person.innerText = arr[randomNumber].person;
});