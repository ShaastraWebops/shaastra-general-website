import spark from "../../../images/JuniorShaastra/spark_2.jpg";
import shaastra_art_challenge from "../../../images/JuniorShaastra/shaastra_art_challenge_2.jpg";
import junior_makeathon from "../../../images/JuniorShaastra/junior_make-a-thon.jpg";
import online_scavenger_hunt from "../../../images/JuniorShaastra/spark_1.png";
import brain_squeeze from "../../../images/JuniorShaastra/brain_squeeze.jpg";
import chess_tournament from "../../../images/JuniorShaastra/chess_tournament_2.jpg";
import an_hour_of_code from "../../../images/JuniorShaastra/chess_tournament_1.png";
import reverse_codeing from "../../../images/JuniorShaastra/shaastra_art_challenge_1.jpeg";
import juniors_nights from "../../../images/JuniorShaastra/shaastra_art_challenge_1.jpeg"

interface shaastraJunior{
    id: number,
    title: string,
    description: string,
    image: string
}

export const shaastraJunoirsData: shaastraJunior[] = [
    {
        id: 0,
       title: "Shaastra Juniors",
       description: `Shaastra Juniors 2021, form Shaastra IIT Madras, is the first-ever completely online 
                     two-day Tech fest specially aimed at apreading awareness about technology among school students.
                     A fun-filled weekend filled with events, shows, lectures and workshops is sure to have each and 
                     every student yearning for more. Shaastra Juniors is conducted online so each and every student can participate from the comfort 
                     of their home. Shaastra Juniors has special trophies for the beat school and excellent students, 
                     with schools competing against one another to win the Shaastra Juniors Championship`,
       image: spark
    },
    {
        id: 1,
       title: "Spark",
       description: `Spark is a national platform where students compete with each other across technical quizzes, 
                     case studies and presentations, and in the process improve themselves - all at no charge. Last 
                     year’s edition of the Spark Junior Quiz was conducted in 20 cities and saw a participation of 
                     more than 3000+ students across the nation. From introducing quizzing to students to organising 
                     a coveted nationwide inter school competition, Spark has been growing in multifolds since inception.`,
       image: spark
    },
    {
        id: 2,
       title: "Shaastra Art Challenge",
       description: `Shaastra represents the Spirit of Engineering and stands with bated breath to hear about 
                     different technological advancements in different fields. But not all of these advancements 
                     are brought to our notice. To change this culture and to become more aware of the progress 
                     that we've made till now, Shaastra organises the "Art of Technology" to encourage children 
                     to draw about technology and it's inner workings.`,
       image: shaastra_art_challenge
    },
    {
        id: 3,
       title: "Junior Make-a-thon",
       description: `Junior Make-a-thon (JMT) is a one-of-a-kind event which centres around the ideas, 
                     imagination, and innovation skills of high school students.One of the primary aims 
                     of JMT is to promote maker culture among school students, with quality mentorship 
                     and workshops. With the help of our partners, including the IITM Research Park and 
                     IITM Incubation Cell, we encourage students to come up with solutions to problems 
                     persisting in different fields like agriculture, sustainability, healthcare, robotics, 
                     and home comfort.`,
       image: junior_makeathon
    },
    {
        id: 4,
       title: "Online Scavenger Hunt",
       description: `An Online Scavenger Hunt where participants must scrape the depths of the internet 
                     to find the answers. The question will be either to find certain tweets or to get a 
                     quote from a book, etc. In an online Scavenger Hunt, the participant must scrape the 
                     internet (such as find certain phrases in a book or title of a webpage or such) to 
                     find certain clues and go on to reach the final point`,
       image: online_scavenger_hunt
    },
    {
        id: 5,
       title: "BrainSqueeze",
       description: `BrainSqueeze is all about putting your brain into overdrive mode while cracking arduous 
                     puzzles. Students get to experience the bliss of solving mind-bending questions in Brain 
                     Squeeze. An entirely logical event which puts your reasoning and analytical skills to 
                     the test with exceptionally tricky questions.`,
       image: brain_squeeze
    },
    {
        id: 6,
       title: "Chess Tournament",
       description: `Shaastra presents the first ever Shaastra Junior Chess Tournament after organising FIDE rated 
                     Shaastra RAPID Chess for 4 consecutive years. SJCT aims to create an environment for 
                     enthusiastic and bright young minds to compete amongst the best for the championship, and 
                     promote the wonderful game during these difficult times.`,
       image: chess_tournament
    },
    {
        id: 7,
       title: "An Hour of Code",
       description: `The Hour of Code Event is a one-hour introduction to computer science, designed to demystify 
                     "code", to show that any student can learn the basics, and to broaden participation in the 
                     field of computer science. These coding activities typically lasting about an hour are 
                     developed so as to cater to the level of understanding of middle school students, generally 
                     in block based languages such as scratch.`,
       image: an_hour_of_code
    },
    {
        id: 8,
       title: "Reverse Coding",
       description: `Think you're good at problem solving? Well there are many ways to brag, let’s see which 
                     one you pick. This event looks for the real star that stands up to the ability of 
                     creativity and logic to reverse engineer. So, get ready for the ultimate challenge 
                     of hardcore logic, preceded by a prelims to test your mettle.`,
       image: reverse_codeing
    },
    {
        id: 9,
       title: "Juniors Nights",
       description: `With everyone stuck at home and all the work being moved on the web, 'Junior Nights' 
                     brings live entertainment at your doorstep. It's a flagship event of Shaastra Juniors 
                     where you can witness brilliant artists perform live from across the globe. Their 
                     mesmerizing and mind-blowing acts will undoubtedly raise your spirits and thoroughly engage you.`,
       image: juniors_nights
    }
]