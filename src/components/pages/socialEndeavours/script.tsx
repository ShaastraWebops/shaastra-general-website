
const Events = () => {

    var body: HTMLElement = document.querySelector("body")!;
    window.onload = (e) => {
        var mode: HTMLElement | null = document.querySelector(".chakra-button")!
        const mainBody: HTMLElement = document.querySelector(".body")!;
        const sheCanHeading: HTMLElement = document.querySelector(".she-can-heading")!;
        const blink: HTMLElement = document.querySelector(".blink .sec-heading")!;
        const blinkBg: HTMLElement = document.querySelector(".blink")!;
        const blinkInfo: HTMLElement = document.querySelector(".blink-info")!;
        const blinkInfoBack: NodeListOf<HTMLElement> = document.querySelectorAll(".blink-info-back")!;
        const bold: NodeListOf<HTMLElement> = document.querySelectorAll("b")!;
        const pastHead: HTMLElement = document.querySelector(".past")!;
        
        if('chakra-ui-light' === body.classList[0])
        {
            mainBody.style.color = "var(--dblue)";
            sheCanHeading.addEventListener("mouseenter", () => {
               sheCanHeading.style.color = "var(--dblue)"
            })
            sheCanHeading.addEventListener("mouseleave", () => {
                sheCanHeading.style.color ="var(--green)"
            })
            blink.style.color = "var(--dblue)";
            blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
            blinkInfo.style.backgroundColor ="var(--pink)"
            blinkInfoBack.forEach(el => {
                el.style.backgroundColor = "var(--pink)"
            })
            bold.forEach(el => {el.style.color = "var(--green)"})
                pastHead.style.color = "var(--pink)"
                pastHead.style.backgroundColor = "var(--brown)"
                
        }
        mode.addEventListener("click", () => {
             if(body.classList[0] === 'chakra-ui-dark')
             {
                mainBody.style.color = "var(--dblue)";
                sheCanHeading.addEventListener("mouseenter", () => {
                    sheCanHeading.style.color = "var(--dblue)"
                })
                sheCanHeading.addEventListener("mouseleave", () => {
                    sheCanHeading.style.color ="var(--green)"
                })
                blink.style.color = "var(--dblue)";
                blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
                blinkInfo.style.backgroundColor ="var(--pink)"
                blinkInfoBack.forEach(el => {
                    el.style.backgroundColor = "var(--pink)"
                })
                bold.forEach(el => {el.style.color = "var(--green)"})
                pastHead.style.color = "var(--pink)"
                pastHead.style.backgroundColor = "var(--brown)"
             }
             else
             {
                mainBody.style.color = "var(--pink)";
                sheCanHeading.addEventListener("mouseenter", () => {
                    sheCanHeading.style.color = "var(--pink)"
                })
                sheCanHeading.addEventListener("mouseleave", () => {
                    sheCanHeading.style.color ="var(--green)"
                })
                    blink.style.color = "var(--pink)";
                    blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg2) 50%)"
                    blinkInfo.style.backgroundColor ="var(--pink-bg)"
                    blinkInfoBack.forEach(el => {
                        el.style.backgroundColor = "var(--pink-bg)"
                    })
                    bold.forEach(el => {el.style.color = "var(--pink)"})
                        pastHead.style.color = "var(--pink)"
                        pastHead.style.backgroundColor = "transparent"
             }
        })
    }
    document.addEventListener("scroll", () => {
        var sheCan: HTMLElement = document.querySelector(".she-can-backdiv")!;
        var dist = window.innerHeight - sheCan.getBoundingClientRect().top;
        if(dist > 150)
        {
            sheCan.style.transform = "translate(-5%,5%)";
            sheCan.style.transition = "all 0.5s ease";
        }

        var slidehead: HTMLElement = document.querySelector(".recog-heading")!;
        dist = window.innerHeight - slidehead.getBoundingClientRect().top;
        if(dist > 50)
        {
            slidehead.style.animation = "headslide 3s ease";    
        }

        var slideIn: NodeListOf<HTMLElement> = document.querySelectorAll(".recog-info-child");
        slideIn.forEach(el => {
            switch(el.classList[2])
            {
                case 'one': 
                case 'two':
                case 'four':
                case 'three':  dist = window.innerHeight - el.getBoundingClientRect().top;
                if(dist > 50) el.style.animation = "headslide 2s ease"; break;
            }

        })

        var past: HTMLElement = document.querySelector(".past")!;
        dist = window.innerHeight - past.getBoundingClientRect().top;
        if(dist > 40) past.style.animation = "headslide 3s ease"

    })

}

export default Events