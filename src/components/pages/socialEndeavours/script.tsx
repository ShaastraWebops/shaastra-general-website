
const Events = () => {
    var body: HTMLElement = document.querySelector("body")!;
    window.onload = (e) => {
        var mode: HTMLElement = document.querySelector(".chakra-button")!
        const mainBody: HTMLElement = document.querySelector(".body")!;
        const sheCanHeading: HTMLElement = document.querySelector(".she-can-heading")!;
        const blink: HTMLElement = document.querySelector(".blink .sec-heading")!;
        const blinkBg: HTMLElement = document.querySelector(".blink")!;
        const blinkInfo: HTMLElement = document.querySelector(".blink-info")!;
        const blinkInfoBack: NodeListOf<HTMLElement> = document.querySelectorAll(".blink-info-back")!;
        const bold: NodeListOf<HTMLElement> = document.querySelectorAll("b")!;
        const pastHead: HTMLElement = document.querySelector(".past")!;
        const introHeading: HTMLElement = document.querySelector(".heading-intro")!;
        const sheCanBackDiv: HTMLElement = document.querySelector(".she-can-backdiv")!;
        const sheCanGrid: NodeListOf<HTMLElement> = document.querySelectorAll("#she-can-grid")!;
        const bubble: HTMLElement = document.querySelector("#bubble-bg")!;
        if('chakra-ui-light' === body.classList[0])
        {
            mainBody.style.color = "var(--dblue)";
            introHeading.style.color = "var(--dblue)";
            sheCanHeading.style.color = "var(--dblue)";
            sheCanHeading.addEventListener("mouseenter", () => {
               sheCanHeading.style.color = "var(--dblue-bg)"
            })
            sheCanHeading.addEventListener("mouseleave", () => {
                sheCanHeading.style.color ="var(--dblue)"
            });
            sheCanBackDiv.style.backgroundColor = "var(--dblue-bg)"
            sheCanGrid.forEach(el => {
                el.style.backgroundColor = "var(--dblue)"
                el.style.color = "var(--pink)"
            })
            blink.style.color = "var(--dblue)";
            blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
            blinkInfo.style.backgroundColor ="var(--pink)"
            blinkInfoBack.forEach(el => {
                el.style.backgroundColor = "var(--pink)"
            })
            // bold.forEach(el => {el.style.color = "var(--green)"})
                pastHead.style.color = "var(--pink)"
                pastHead.style.backgroundColor = "var(--brown)"
                pastHead.style.padding = "2vw";
            bubble.style.opacity = "0.65"
                
        }
        mode.addEventListener("click", () => {
            console.log("e")
             if(body.classList[0] === 'chakra-ui-dark')
             {
                mainBody.style.color = "var(--dblue)";
                introHeading.style.color = "var(--dblue)";
                sheCanHeading.style.color = "var(--dblue)";
                sheCanHeading.addEventListener("mouseenter", () => {
                    sheCanHeading.style.color = "var(--dblue-bg)"
                })
                sheCanHeading.addEventListener("mouseleave", () => {
                    sheCanHeading.style.color ="var(--dblue)"
                })
                sheCanBackDiv.style.backgroundColor = "var(--dblue-bg)"
                sheCanGrid.forEach(el => {
                    el.style.backgroundColor = "var(--dblue)"
                    el.style.color = "var(--pink)"
                })
                blink.style.color = "var(--dblue)";
                blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
                blinkInfo.style.backgroundColor ="var(--pink)"
                blinkInfoBack.forEach(el => {
                    el.style.backgroundColor = "var(--pink)"
                })
                pastHead.style.color = "var(--pink)"
                pastHead.style.backgroundColor = "var(--brown)"
                pastHead.style.padding = "2vw";
                bubble.style.opacity = "0.65"
             }
             else
             {
                mainBody.style.color = "var(--pink)";
                introHeading.style.color = "var(--blue)";
                sheCanHeading.style.color = "var(--green)"
                sheCanHeading.addEventListener("mouseenter", () => {
                    sheCanHeading.style.color = "var(--pink)"
                })
                sheCanHeading.addEventListener("mouseleave", () => {
                    sheCanHeading.style.color ="var(--green)"
                })
                sheCanBackDiv.style.backgroundColor = "var(--green)"
                sheCanGrid.forEach(el => {
                    el.style.backgroundColor = "var(--green)"
                    el.style.color = "var(--pink)";
                })
                    blink.style.color = "var(--pink)";
                    blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
                    blinkInfo.style.backgroundColor ="var(--pink-bg)"
                    blinkInfoBack.forEach(el => {
                        el.style.backgroundColor = "var(--pink-bg)"
                    })
                        pastHead.style.color = "var(--pink)"
                        pastHead.style.backgroundColor = "transparent"
                        pastHead.style.padding = "0%";
                        bubble.style.opacity = "0.3"
             }
        })
    }
    document.addEventListener("scroll", () => {
        var sheCan: HTMLElement = document.querySelector(".she-can-backdiv")!;
        var dist = window.innerHeight - sheCan.getBoundingClientRect().top;
        if(dist > 150)
        {
            console.log(sheCan.style.transform)
            sheCan.style.transform = "translate(-5%,5%)";
            sheCan.style.transition = "all 0.5s ease";
        }

        var slidehead: HTMLElement = document.querySelector(".recog-heading")!;
        dist = window.innerHeight - slidehead.getBoundingClientRect().top;
        if(dist > 30)
        {
            slidehead.style.animation = "headslide 2s ease";    
        }

        var slideIn: HTMLElement = document.querySelector(".one")!;
        dist = window.innerHeight - slideIn.getBoundingClientRect().top;
        if(dist > 30) slideIn.style.animation = "headslide 2s ease";

        slideIn = document.querySelector(".two")!;
        dist = window.innerHeight - slideIn.getBoundingClientRect().top;
        if(dist > 50) slideIn.style.animation = "headslideRev 2s ease ";

        slideIn = document.querySelector(".three")!;
        dist = window.innerHeight - slideIn.getBoundingClientRect().top;
        if(dist > 30) slideIn.style.animation = "headslide 2s ease";

        slideIn = document.querySelector(".four")!;
        dist = window.innerHeight - slideIn.getBoundingClientRect().top;
        if(dist > 30) slideIn.style.animation = "headslideRev 2s ease";


        var past: HTMLElement = document.querySelector(".past")!;
        dist = window.innerHeight - past.getBoundingClientRect().top;
        if(dist > 0) past.style.animation = "headslide 3s ease"

    })

}

export default Events