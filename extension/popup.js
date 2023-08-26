const btn = document.getElementById("summarise");
btn.addEventListener("click", function() {
    btn.disabled = true;
    btn.innerHTML = "Summarising...";
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var url = tabs[0].url;
        console.log(url)
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://5a3a-34-125-96-49.ngrok-free.app/summarize?url=" + url, true);
        xhr.onload = function() {
            var text = xhr.responseText;
            const p = document.getElementById("output");
            p.innerHTML = text;
            btn.disabled = false;
            btn.innerHTML = "Summarise";
        }
        xhr.send();
    });
});