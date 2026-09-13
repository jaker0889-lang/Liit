window.onload = function () {

    setTimeout(function () {

        document.getElementById("loading").style.display = "none";
        document.getElementById("envelope").style.display = "flex";

    }, 3000);

    document.querySelector(".mail").onclick = function () {

        document.getElementById("envelope").style.display = "none";

        document.getElementById("photo").style.display = "flex";

    };

};

const message = `Hi Anne! 🤍

I made this for you because I wanted to show how important you are to me.
You know, hindi pa naman tayo ganun katagal magkakilala but you caught my attention already noong usap natin kahit salbahe ka pa sa'kin.
Grabe ka kasi mag reply, parang inaaway mo ako HAHAHAHAH.
Tapos habang nag uusap tayo parang gusto na kitang kausap palagi. Tuwing may nagno-notify sa'kin, tinitignan ko agad kung ikaw ba 'yon.
Kaya rin ako nag-overreact nung nalasing ka kasi concern talaga ako sa'yo nun HAHAHAHAHA.

Tapos ayun, nung binati mo ako, medyo na speechless ako kasi nakakagulat talaga na bigla kang nag chat. 
Akala ko kasi sobrang galit ka sa'kin dahil sa reply ko sa'yo dati. 
Tapos habang tumatagal at nakakausap ulit kita, parang may iba ako nararamdaman para sa'yo.

Hanggang sa nag meet tayo. You caught my eyes agad. Sobrang hiya talaga ako nun, kaya nga nag jacket ako para hindi mo mahalata.
Nung papalapit ka na sa'kin, grabe yung kaba ko, hindi ko lang pinapahalata kaya naka serious face ako nun HAHAHAHAH.

Tapos ayun, kaya kita inaasar sa 7/11 at kinukurot kasi ang cute mo. I swear, lalo na yung height mo HAHAHAAHAH.
Tapos nung nakauwi na ako, gustong guston talaga kita sabayan sa pag uwi mo para night walk kasi gusto kong magkaroon tayo ng time together.
Yung nakasakay sa likod ko or bubuhatin kita, gusto ko talagang ma-feel yung moment na 'yon kapag kasama kita.

And I started feeling something different for you, hindi ko ma explain kung ano yun.

Thank you cutie 🤍`;

let index = 0;

function typeMessage(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage,40);

    }else{

        setTimeout(()=>{

     document.getElementById("messagePage").style.display="none";

     document.getElementById("soPage").style.display="flex";

            typeSo();

        },3000);

    }

}

     document.getElementById("continueBtn").onclick=function(){
        const music = document.getElementById("bgMusic");

music.volume = 1.0;

music.play();

    document.getElementById("photo").style.display="none";

    document.getElementById("messagePage").style.display="flex";

    typeMessage();

}

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}
const soText = "So......................";
let soIndex = 0;

function typeSo(){

    if(soIndex < soText.length){

        document.getElementById("soTyping").innerHTML += soText.charAt(soIndex);

        soIndex++;

        setTimeout(typeSo,180);

    }else{

        setTimeout(()=>{

            document.getElementById("soPage").style.display="none";

            document.getElementById("proposalPage").style.display="flex";

            typeProposal();

        },2000);

    }

}

function heartExplosion(){

    for(let i=0;i<60;i++){

        setTimeout(createHeart,i*40);

    }

}

const proposalMessage = "I think I like you na";
let proposalIndex = 0;

function typeProposal(){

    if(proposalIndex < proposalMessage.length){

        document.getElementById("proposalText").innerHTML += proposalMessage.charAt(proposalIndex);

        proposalIndex++;

        setTimeout(typeProposal,120);

    }else{

    setTimeout(()=>{

        document.getElementById("finalMessage").style.opacity = 1;

    },3000);
   }

}

function createLily(){

    const lily = document.createElement("div");

    lily.innerHTML = "🌸";

    lily.className = "lily";

    lily.style.left = Math.random()*100 + "vw";

    lily.style.fontSize = (30 + Math.random()*30) + "px";

    document.body.appendChild(lily);

    setTimeout(()=>{
        lily.remove();
    },8000);

}
function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,500);