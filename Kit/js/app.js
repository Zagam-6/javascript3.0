document:addEventListener('keydown' , (event)=>{
    const keyName = event.key;

    if (keyName === "a" || keyName === "A"){
        document.getElementById("a").play();
        document.querySelector("div[data-key='65']").classList.add("playing")
        setTimeout(function(){
            document.querySelector("div[data-key='65']").classList.remove("playing")
        },100)
    }

    if (keyName === "s" || keyName === "S"){
        document.getElementById("s").play();
        document.querySelector("div[data-key='83']").classList.add("playing")
        setTimeout(function(){
            document.querySelector("div[data-key='83']").classList.remove("playing")
        },100)
    }

    if (keyName === "d" || keyName === "D"){
        document.getElementById("d").play();
        document.querySelector("div[data-key='68']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='68']").classList.remove("playing")
    },100)

    }

    if (keyName === "f" || keyName === "F"){
        document.getElementById("f").play();
        document.querySelector("div[data-key='70']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='70']").classList.remove("playing")
    },100)
    }

    if (keyName === "g" || keyName === "G"){
        document.getElementById("g").play();
        document.querySelector("div[data-key='71']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='71']").classList.remove("playing")
    },100)
    }

    if (keyName === "h" || keyName === "H"){
        document.getElementById("h").play();
        document.querySelector("div[data-key='72']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='72']").classList.remove("playing")
    },100)
    }

    if (keyName === "j" || keyName === "J"){
        document.getElementById("j").play();
        document.querySelector("div[data-key='74']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='74']").classList.remove("playing")
    },100)
    }

    if (keyName === "k" || keyName === "K"){
        document.getElementById("k").play();
        document.querySelector("div[data-key='75']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='75']").classList.remove("playing")
    },100)
    }

    if (keyName === "l" || keyName === "L"){
        document.getElementById("l").play();
        document.querySelector("div[data-key='76']").classList.add("playing")

        setTimeout(function(){
        document.querySelector("div[data-key='76']").classList.remove("playing")
    },100)
    }
});