import EXHB1 from "../../../images/Exhibitions/exhb_1.png";
import EXHB3 from "../../../images/Exhibitions/exhb_3.png";
import EXHB4 from "../../../images/Exhibitions/exhb_4.png";
import EXHB5 from "../../../images/Exhibitions/exhb_5.png";
import EXHB6 from "../../../images/Exhibitions/exhb_6.png";
import EXHB7 from "../../../images/Exhibitions/exhb_7.png";
import EXHB8 from "../../../images/Exhibitions/exhb_8.png";
import EXHB9 from "../../../images/Exhibitions/exhb_9.png";
import EXHB10 from "../../../images/Exhibitions/exhb_10.png";
import EXHB11 from "../../../images/Exhibitions/exhb_11.png";
import EXHB12 from "../../../images/Exhibitions/exhb_12.png";
import EXHB13 from "../../../images/Exhibitions/exhb_13.png";

export const CauroselImages = [EXHB3,EXHB4,EXHB9,EXHB10,EXHB11,EXHB12];

export const Titlevariants = {
  lhidden:{
    x: "-100vw" 
  },
  final : {
    x: 0,
    transition:{
      duration : "1",
    }
  },
  
}

export const AboutusVariants = {
  hidden : {
    opacity : 0
  },
  visible : {
    opacity : 1,
    transition:{
      duration : "2",
      delay : 1
    }
  }

}

export const AboutusData = `Shaastra Exhibitions is a platform to showcase cutting Edge technology.
Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with
each other.
They are responsible for conveying the ideas of the participants from a 
 technologically practical perspective and as well as give the audience a 
 glimpse into the  latest developments in technology
 They offer an unparalleled and ideal opportunity to showcase innovative products to a broad
spectrum of people.`;

interface exhibitions{
    id: string,
    year : string,
    title : string,
    description ?: string,
    image : string
}

export const exhibitions : exhibitions[] =[
    {
      id : "1",
      year:"2016",
      title : "Vintage Car Exhibition",
      description : `In collaboration with the Madras Heritage Motoring Club,
       We Presented  a vintage car exhibition. Some automobiles such as, Austin 8, 1952 Topolino, which
       brought about revolution in the industry was presented. `,
      image : EXHB1
    },
    {
      id : "2",
      year:"2017",
      title : " NAO: Autonomous humanoid Robot",
      description:`Manav: India’s first 3D printed humanoid robot which was developed by 
      Diwakar Vaish of A-SET training institutes`,
      image : EXHB10
    },
    {
      id : "3",
      year:"2018",
      title : "Defence and Aerospace models from ISRO",
      description:"ISRO - GSLV and PSLV models were exhibited at Shaastra Exhibitions.",
      image : EXHB5
    },
    {
      id : "4",
      year:"2018",
      title : "Bike Expo",
      description : "Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo.",
      image : EXHB8
    },
    {
      id:"4",
      year : "2019",
      title:"International Expo",
      description : `Shaastra for the first time ever, presents International Exhibitions, in association with the US Consulate General of Chennai. 
      The International Exhibits was on three broad perspectives – Academics, Research and Business. `,
      image : EXHB7
    },
    {
      id:"5",
      year : "2020",
      title:"Defence Expo",
      description:`The Defence Expo was an exhibition of the products of nascent defence technology start-ups,established
      manufacturers,Defence PSUs and the Indian Armed Forces.It was conducted over the course of the 4 days of Shaastra 2020.
      The Expo provided exposure to Defence Technology for the audience.`,
      image : EXHB6
    }
  ];

  