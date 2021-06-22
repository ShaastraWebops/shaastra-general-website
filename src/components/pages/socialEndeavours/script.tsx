
const Events = () => {

    var body: HTMLElement = document.querySelector("body")!;
    window.onload = (e) => {
        var mode: HTMLElement | null = document.querySelector(".chakra-button")!;
        console.log(mode);
        if('chakra-ui-light' === body.classList[0])
        {
            const mainBody: HTMLElement = document.querySelector(".body")!;
                mainBody.style.color = "var(--dblue)";
            // const sheCanBack: HTMLElement = document.querySelector(".she-can-backdiv-image")!;
            //     sheCanBack.style.backgroundColor = "var(--green)"
            const blink: HTMLElement = document.querySelector(".blink .sec-heading")!;
                blink.style.color = "var(--dblue)";
            const blinkBg: HTMLElement = document.querySelector(".blink")!;
                blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
            const blinkInfo: HTMLElement = document.querySelector(".blink-info")!;
                blinkInfo.style.backgroundColor ="var(--pink)"
            const blinkInfoBack: NodeListOf<HTMLElement> = document.querySelectorAll(".blink-info-back")!;
                blinkInfoBack.forEach(el => {
                    el.style.backgroundColor = "var(--pink)"
                })
            const bold: NodeListOf<HTMLElement> = document.querySelectorAll("b")!;
                bold.forEach(el => {el.style.color = "var(--green)"})
            const pastHead: HTMLElement = document.querySelector(".past")!;
                {
                    pastHead.style.color = "var(--pink)"
                    pastHead.style.backgroundColor = "var(--brown)"
                }
        }
        mode.addEventListener("click", () => {
            console.log(body.classList[0]);
            console.log(body.classList[0])
             if(body.classList[0] === 'chakra-ui-dark')
             {
                const mainBody: HTMLElement = document.querySelector(".body")!;
                    mainBody.style.color = "var(--dblue)";
                // const sheCanBack: HTMLElement = document.querySelector(".she-can-backdiv-image")!;
                //     sheCanBack.style.backgroundColor = "var(--green)"
                const blink: HTMLElement = document.querySelector(".blink .sec-heading")!;
                    blink.style.color = "var(--dblue)";
                const blinkBg: HTMLElement = document.querySelector(".blink")!;
                    blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg) 50%)"
                const blinkInfo: HTMLElement = document.querySelector(".blink-info")!;
                    blinkInfo.style.backgroundColor ="var(--pink)"
                const blinkInfoBack: NodeListOf<HTMLElement> = document.querySelectorAll(".blink-info-back")!;
                    blinkInfoBack.forEach(el => {
                        el.style.backgroundColor = "var(--pink)"
                    })
                const bold: NodeListOf<HTMLElement> = document.querySelectorAll("b")!;
                    bold.forEach(el => {el.style.color = "var(--green)"})
                const pastHead: HTMLElement = document.querySelector(".past")!;
                    {
                        pastHead.style.color = "var(--pink)"
                        pastHead.style.backgroundColor = "var(--brown)"
                    }
             }
             else
             {
                const mainBody: HTMLElement = document.querySelector(".body")!;
                    mainBody.style.color = "var(--pink)";
                // const sheCanBack: HTMLElement = document.querySelector(".she-can-backdiv-image")!;
                //     sheCanBack.style.backgroundColor = "var(--pink)"
                const blink: HTMLElement = document.querySelector(".blink .sec-heading")!;
                    blink.style.color = "var(--pink)";
                const blinkBg: HTMLElement = document.querySelector(".blink")!;
                    blinkBg.style.backgroundImage = "linear-gradient(90deg, transparent 50%, var(--blue-bg2) 50%)"
                const blinkInfo: HTMLElement = document.querySelector(".blink-info")!;
                    blinkInfo.style.backgroundColor ="var(--pink-bg)"
                const blinkInfoBack: NodeListOf<HTMLElement> = document.querySelectorAll(".blink-info-back")!;
                    blinkInfoBack.forEach(el => {
                        el.style.backgroundColor = "var(--pink-bg)"
                    })
                const bold: NodeListOf<HTMLElement> = document.querySelectorAll("b")!;
                    bold.forEach(el => {el.style.color = "var(--pink)"})
                const pastHead: HTMLElement = document.querySelector(".past")!;
                    {
                        pastHead.style.color = "var(--pink)"
                        pastHead.style.backgroundColor = "transparent"
                    }
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
        var dist = window.innerHeight - slidehead.getBoundingClientRect().top;
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

        // var sheCanImage: HTMLElement = document.querySelector(".she-can-backdiv-image")!;
        // dist = window.innerHeight - sheCanImage.getBoundingClientRect().top;
        // if(dist > 50)
        // {
        //     sheCanImage.style.transform ="translate(-2%, 5%)";
        //     sheCanImage.style.transition ="all 0.5s ease";
        // }

        var past: HTMLElement = document.querySelector(".past")!;
        dist = window.innerHeight - past.getBoundingClientRect().top;
        if(dist > 40) past.style.animation = "headslide 3s ease"

    })

}

export default Events