

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
      description : `Shaastra 2016 unveiled the spectacular technological advancements in automobile history 
      with its very own Vintage Car Exhibition in collaboration with the Madras Heritage Motoring Club.
      Presented automobiles such as, Austin 8, 1952 Topolino, Morris 1000, Morris 8,
      which have been the marvels of technology bringing about a revolution in the automobile.`,
      image : EXHB1
    },
    {
      id : "2",
      year:"2017",
      title : " NAO: Autonomous humanoid Robot",
      description:`Manav: India’s first 3D printed humanoid robot which was developed by 
      Diwakar Vaish of A-SET training institutes`,
      image : EXHB13
    },
    {
      id : "3",
      year:"2018",
      title : "Defence and aerospace models from ISRO",
      description:"ISRO - GSLV and PSLV models were exhibited at Shaastra Exhibitions.",
      image : EXHB5
    },
    {
      id : "4",
      year:"2018",
      title : "Bike Expo",
      image : EXHB8
    },
    {
      id:"4",
      year : "2019",
      title:"International exhibits from the US",
      image : EXHB7
    },
    {
      id:"5",
      year : "2020",
      title:"Defence Expo",
      description:`The Defence Expo was an exhibition of the products of nascent defence technology start-ups, 
      established manufacturers, Defence PSUs and the Indian Armed Forces. It was conducted over 
      the course of the 4 days of Shaastra 2020.  The Expo provided exposure to Defence Technology 
      for the audience. BrahMos - a model missile, Rodella - Unmanned Aerial Vehicle and models 
      from Boeing and Ashok Leyland were also exhibited.`,
      image : EXHB6
    }
  ];

  