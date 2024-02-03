

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases1 = ["Full Stack Programmer", "Frontend Developer", "Backend Developer"];
const phrases2 = ["SQL", 'DJANGO', 'Python', 'Next.js', 'React.js', 'CSS', 'HTML'];
const el1 = document.getElementById("typewriter1");
const el2 = document.getElementById("typewriter2");

let sleepTime = 100;
let curPhraseIndex1 = 0;
let curPhraseIndex2 = 0;

const writeLoop = async (el, phrases, curPhraseIndex) => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop(el1, phrases1, curPhraseIndex1);
writeLoop(el2, phrases2, curPhraseIndex2);

