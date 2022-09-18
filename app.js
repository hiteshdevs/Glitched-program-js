const text = document.querySelector('.text');

const writer = GlitchedWriter.create(text);

let phrases = [
    "Hi Baby",
    "trying to learn js",
    "web developer",
    "i love one girl",
    "her name is Tanvi",
    "so without a cann't imagine may future",
    "will you marry me ❤ sweetheart"
];

writer.queueWrite(phrases, 2000, false);