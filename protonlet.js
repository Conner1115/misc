var closeButton = document.createElement("div");
        closeButton.style=`position:fixed !important;top:10px !important;right:10px !important;`;     closeButton.innerHTML = "✕";
        closeButton.addEventListener("click", function(){
           document.querySelector("#protonlet-alertbox").style.display = "none"; 
        });
        var bookmarklet = document.createElement("a");
        bookmarklet.href = "javascript:var loc=window.location.pathname.split('/').pop(); fetch('https://www.khanacademy.org/api/internal/scratchpads/'+loc).then((response) => { response.json().then((data) => { var frame = document.createElement('iframe'); frame.srcdoc = data.revision.code; frame.sandbox='allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-top-navigation allow-top-navigation-by-user-activation'; frame.style='width:100%;height:100%;position:fixed;top:0;left:0;'; document.body.innerHTML = ''; document.body.appendChild(frame); }); })";
        bookmarklet.style=`
        color: white !important;
        background:linear-gradient(-75deg, rgb(255,125,0),rgb(225,75,0)) !important;
        text-decoration:none !important;
        font-family:Avenir, Arial, sans-serif !important;
        border-radius: 10px !important;
        padding:10px !important;
        font-size:20px !important;
        margin-left:15%;
        margin-top:0;`;
        bookmarklet.innerText = "Protonlet"
        var alertBox = document.createElement("div");
        alertBox.innerHTML = `
        <h2 style="text-align:center !important;color:rgb(50,50,50) !important;font-family:Avenir, sans-serif !important;">Whoops, the screen's a bit small.</h2>
        <h3 style="font-family:Avenir, sans-serif !important;text-align:center !important;color:rgb(50,50,50) !important;">Let's fix that.</h3>
        <p style="padding: 20px 10% !important;font-family:Avenir, sans-serif !important;">Drag the bookmarklet below into your bookmarks bar and click it to activate Protonlet.  You might need this for viewing future programs as well so make sure you keep it!</p><br>`;
        alertBox.appendChild(bookmarklet);
        alertBox.id = "protonlet-alertbox";
        alertBox.style = `
        display:block !important;
        background:rgb(255,255,255) !important;
        border-radius: 15px !important;
        width:100% !important;
        height:100% !important;
        position:fixed !important;
        top:0 !important;
        left:0 !important;
        padding:20px !important;
        z-index: 1000000000000000000000000000000;
        `;
        alertBox.appendChild(closeButton)
        document.body.appendChild(alertBox);
        if(window.innerWidth >= 800){
            document.querySelector("#protonlet-alertbox").style.display = "none";
        }
