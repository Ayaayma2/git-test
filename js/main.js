var Quotes = [
    {
        qoutes: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        qoutes: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        qoutes: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        qoutes: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        qoutes: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost"
    },
    {
        qoutes: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        qoutes: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author: "― Maya Angelou"
    }

]

function fun_qoute() {
    var random_number = Math.floor(Math.random() * Quotes.length)
    document.getElementById("text-qoute").innerHTML = Quotes[random_number].qoutes;
    document.getElementById("text-author").innerHTML = Quotes[random_number].author;

}