const $ = t => document.querySelector(t);
function __styleOptions(options){
    if(options.importFA){
        let fa = document.createElement("script");
        fa.src = "https://kit.fontawesome.com/5434134134.js";
        fa.crossOrigin = "anonymous";
        document.head.appendChild(fa);
    }
    if(options.importFonts){
        options.importFonts.forEach((a) => {
            let fnt = document.createElement("link");
            fnt.href = "https://fonts.googleapis.com/css2?family="+a+"&display=swap";
            fnt.rel = "stylesheet";
            document.head.appendChild(fnt);
        });
    }
}
(function(doc,win){
let style = `*{outline:0}body,html{scroll-behavior:smooth;overflow-x:hidden;margin:0;padding:0}#full-body{position:fixed;top:0;left:0;width:100vw;height:100vh;overflow-y:auto;}h1,h2,h3,h4,h5,h6{text-align:center}p{padding:20px 10%;max-width:700px;margin:auto}.clickable:hover,[type="submit"]:hover,button:hover,[type="button"]:hover{cursor:pointer}.form-control>*,.form-input{background:white;color:black;padding:5px;border:0;box-shadow:inset 0 0 2px 0 rgba(0,0,0,.2);border-radius:5px;transition:.25s}.form-control>*:focus,.form-input:focus{box-shadow:inset 0 0 2px 0 rgba(0,0,0,.2),0 0 0 5px rgba(0,200,255,.5),0 0 0 1px rgb(0,100,255)}.centerx{left:50%;transform:translatex(-50%)}.centery{top:50%;transform:translatex(-50%)}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.center{top:50%;left:50%;transform:translate(-50%,-50%)}.form-submit>*,.form-submit-btn{background:rgb(0,150,50);color:white;border:solid rgb(0,100,50)1px;;padding:5px;border-radius:2px}`;
for(let i = 0; i <= 100; i+=5){
    style += `.mvw-${i}{margin: ${i}vw;}`;
    style += `.mvh-${i}{margin: ${i}vh;}`;
    style += `.mp-${i}{margin: ${i}%;}`;
    style += `.mpx-${i}{margin: ${i}px;}`;
    style += `.mlp-${i}{margin-left: ${i}%;}`;
    style += `.mrp-${i}{margin-right: ${i}%;}`;
    style += `.mtp-${i}{margin-top: ${i}%;}`;
    style += `.mbp-${i}{margin-bottom: ${i}%;}`;
    style += `.mlpx-${i}{margin-left: ${i}px;}`;
    style += `.mrpx-${i}{margin-right: ${i}px;}`;
    style += `.mtpx-${i}{margin-top: ${i}px;}`;
    style += `.mbpx-${i}{margin-bottom: ${i}px;}`;
    style += `.mlvw-${i}{margin-left: ${i}vw;}`;
    style += `.mrvw-${i}{margin-right: ${i}vw;}`;
    style += `.mtvw-${i}{margin-top: ${i}vw;}`;
    style += `.mbvw-${i}{margin-bottom: ${i}vw;}`;
    style += `.mlvh-${i}{margin-left: ${i}vh;}`;
    style += `.mrvh-${i}{margin-right: ${i}ch;}`;
    style += `.mtvh-${i}{margin-top: ${i}vh;}`;
    style += `.mbvh-${i}{margin-bottom: ${i}vh;}`;

    style += `.pvw-${i}{padding: ${i}vw;}`;
    style += `.pvh-${i}{padding: ${i}vh;}`;
    style += `.pp-${i}{padding: ${i}%;}`;
    style += `.ppx-${i}{padding: ${i}px;}`;
    style += `.plp-${i}{padding-left: ${i}%;}`;
    style += `.prp-${i}{padding-right: ${i}%;}`;
    style += `.ptp-${i}{padding-top: ${i}%;}`;
    style += `.pbp-${i}{padding-bottom: ${i}%;}`;
    style += `.plpx-${i}{padding-left: ${i}px;}`;
    style += `.prpx-${i}{padding-right: ${i}px;}`;
    style += `.ptpx-${i}{padding-top: ${i}px;}`;
    style += `.pbpx-${i}{padding-bottom: ${i}px;}`;
    style += `.plvw-${i}{padding-left: ${i}vw;}`;
    style += `.prvw-${i}{padding-right: ${i}vw;}`;
    style += `.ptvw-${i}{padding-top: ${i}vw;}`;
    style += `.pbvw-${i}{padding-bottom: ${i}vw;}`;
    style += `.plvh-${i}{padding-left: ${i}vh;}`;
    style += `.prvh-${i}{padding-right: ${i}ch;}`;
    style += `.ptvh-${i}{padding-top: ${i}vh;}`;
    style += `.pbvh-${i}{padding-bottom: ${i}vh;}`;

    style += `.round-${i}{border-radius:${i}px;}`;

    style += `.wp-${i}{width: ${i}%;}`;
    style += `.wvw-${i}{width: ${i}vw;}`;
    style += `.wvh-${i}{width: ${i}vh;}`;

    style += `.hp-${i}{height: ${i}%;}`;
    style += `.hvw-${i}{height: ${i}vw;}`;
    style += `.hvh-${i}{height: ${i}vh;}`;
}
style += `.m-auto{margin:auto;}`
style += `.round-full{border-radius:50%;}`;
style+=`::-webkit-scrollbar {width: 5px;}::-webkit-scrollbar-track {background: transparent;border-left: solid var(--col1) 1px;}::-webkit-scrollbar-thumb {background: var(--col3);border-left: solid var(--col1) 1px;}`;
style += `.ctform {
    width: 80%;
    max-width: 700px;
    min-width: 280px;
    padding: 20px;
    margin: 20px auto;
    border: solid rgb(200, 200, 200) 1px;
    border-radius: 15px;
}
.ctform > .form-control > input, .ctform > .form-submit > input {
    width: 80%;
    margin: 20px 10%;
}
.ctform > .form-label{
    margin-left:5%;
}`;
let displays = ["flex","grid","block","inline","none","inline-block","inline-flex","inline-grid","initial","inherit"];
displays.forEach((a) => {
    style+=`.dp-${a}{display: ${a};}`;
});

for(let j = 0; j <= 75; j += 5){
    style += `.glass-${j}{background: rgba( 255, 255, 255, 0.${j} );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );}`;
}
let sty = doc.createElement("style");
sty.innerText = style;
doc.head.appendChild(sty);
})(document,window);
