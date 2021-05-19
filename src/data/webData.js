import grass from './media/grass.jpg';
import stockBox from './media/stock-box.jpg';
import stockGardening from './media/stock-gardening.jpg';
import { FaSpider as Spider } from 'react-icons/fa';
import { GiWaspSting as Wasp } from 'react-icons/gi';
import { GiAnt as Ant} from 'react-icons/gi';
import {newColors} from '../data/variables';


export const pageSections = [
    {
        objType: <h2 style={{color: newColors[9]}}>Plug & <span style={{color: newColors[4]}}>Spray.</span></h2>,
        text: <p style={{color: newColors[5], fontWeight: "700"}}>No guesswork.  No measuring. <br></br> <span style={{color: newColors[9], fontWeight: "800"}}>Custom</span> pest prescriptions. <br></br><br></br>With Jitterbox you are ready to <br></br> <span style={{color: newColors[9], fontWeight: "800"}}>treat your home like a pro.</span></p>,
        image: grass,
        imageAlt: "Created for you",
        button: ["How it works", "/how-to"],
    },
    {
        objType: <h2 style={{color: newColors[9], fontSize: "6vh"}}>Professional doses.<br></br><span style={{color: newColors[7], fontSize: "1.1em"}}>DIY prices.</span></h2>,
        text: <p style={{color: newColors[6], fontWeight: "700"}}><span style={{color: newColors[9], fontWeight: "800"}}>Stop paying $500 for pest control.</span><br></br><br></br>Built with the <span style={{color: newColors[9], fontWeight: "800"}}>best products used by pros,</span> your plan is delivered to your doorstep, starting at <span style={{color: newColors[9], fontWeight: "800"}}>just $12/</span>mo.</p>,
        image: stockBox,
        imageAlt: "Expert instruction with every box",
        button: ["What we use", "/how-to"],
    }, 
    {
        objType: <h2 style={{fontSize: "6.5vh", color: "white"}}><span style={{fontSize: "1.1em", color: newColors[9]}}>Expert</span> <br></br>know-how.</h2>,
        text: <p style={{color: "white", fontWeight: "700"}}>Get expert instructions, How-To's, <br></br>and pro tips for the worst pests that<br></br> crawl your way with <span style={{color: newColors[9], fontWeight: "800"}}>Jitterbox Tips.</span></p>,
        image: stockGardening,
        imageAlt: "Customized to your needs",
        button: ["Jitterbox Tips", "/tips"],
    }, 
];


export const howToSections = [
    {
        objType: <h2 style={{color: "white"}}>Unbox</h2>,
        text: <p style={{color: "white"}}>Pest control companies make it sound harder than it is - pest control is easy.  It shouldn't be $500/year.  With Jitterbox, your getting home protection for $35 per box.</p>,
        image: stockBox,
        imageAlt: "Expert instruction with every box",
        button: [null,  null],
    }, 
    {
        objType: <h2 style={{color: newColors[5]}}>Pour & Mix</h2>,
        text: <p style={{color: newColors[5]}}>SPOILER ALERT - we don't recommend spraying every 3 months like Pest Control companies offer. You should concentrate treatment around the bugs schedule, not the technician. Your Plan is based on how we treat our own homes. We’ve found the best bang for the buck is more like this: 1- Late Feb-March: Control early emergence and hit pests when they are at their weakest after winter. 2- May: Control later emerging pests/ants/spiderlings/forming nests. 3- July:  peak summer- to when spiders, flies, wasps, and mosquitos are at their highest levels. 4- September to eliminate them before they find their winter hiding places in your home.</p>,
        image: grass,
        imageAlt: "created for you",
        button: [null,  null],
    },
    {
        objType: <h2 style={{color: newColors[6]}}>Apply</h2>,
        text: <p style={{color: newColors[6]}}>You can update at any time to address new pests as they appear or to cut back when those pests are taken care of. And no contracts. If your bugs disappear forever (fingers crossed), you can cancel at anytime.</p>,
        image: stockGardening,
        imageAlt: "customized to your needs",
        button: [null,  null],
    }, 
]

export const states2 = [
    {state: 'ut', bugs: ["ants", "spiders", "wasps"]},
    {state: 'wa', bugs: ["ants", "spiders"]},
    {state: 'az', bugs: ["ants", "spiders", "cockroaches", "scorpions"]}
]

export const states = {
    ut: ["ants", "spiders", "wasps"],
    wa: ["ants", "spiders"],
    az: ["ants", "spiders", "cockroaches", "scorpions"],
}


export const sampleBugs = [
    {bug: "ants", image: <Ant />}, 
    {bug: "spiders", image: <Spider />}, 
    {bug: "wasps", image: <Wasp />}, 
    {bug: "centipedes", image: <Ant />}, 
    {bug: "cockroaches", image: <Ant />}, 
    {bug: "scorpions", image: <Ant />}, 
    {bug: "moths", image: <Ant />}, 
    {bug: "millipedes", image: <Ant />}, 
    {bug: "ticks", image: <Ant />},
    {bug: "fire ants", image: <Ant />},
    {bug: "carpenter ants", image: <Ant />},
    {bug: "termites", image: <Ant />},
    {bug: "mosquitoes", image: <Ant />},
    {bug: "bed bugs", image: <Ant />},
    {bug: "silverfish", image: <Ant />},
];

export const dummyProducts = {
    insideDefense: {
        name: 'Inside Defense',
        image: null,
    },
    outsideOffense: {
        name: 'Outside Offense',
        image: null,
    },
    proYard: {
        name: 'full yard flush',
        image: null,
    },
    proHouse: {
        name: 'inside treatment',
        image: null,
    },
    proTermite: {
        name: 'termite inspection',
        image: null,
    },
    proWeb: {
        name: 'web sweeping',
        image: null,
    },
}

export const dummyAddOns = {
    advion: {
        name: 'ant bait',
        description: 'ant bait description',
        image: null,
        price: 9,
    },
    lemexa: {
        name: 'bed bug dust',
        description: 'bed bug dust description',
        image: null,
        price: 5,
    },
    roachGel: {
        name: 'roach gel',
        description: 'roach gel description',
        image: null,
        price: 19,
    },
    mouseTrap: {
        name: 'mouse trap',
        description: 'mouse trap description',
        image: null,
        price: 3,
    },
}
