import grass from './media/grass.jpg';
import stockBox from './media/stock-box.jpg';
import stockGardening from './media/stock-gardening.jpg';
import { FaSpider as Spider } from 'react-icons/fa';
import { GiWaspSting as Wasp } from 'react-icons/gi';
import { GiAnt as Ant} from 'react-icons/gi';

export const pageSections = [
    {
        objType: "plug & spray",
        text: "No guesswork.  No measuring.  Pest control made easy. Ready out-of-the-box to treat your home like a pro.",
        image: grass,
        imageAlt: "Created for you",
    },
    {
        objType: "professional products DIY price",
        text: "You don't need to pay $500/yr to get professional protection from pests.  With plans from $12/mo, we build your plan with the best products available to the pros.",
        image: stockBox,
        imageAlt: "Expert instruction with every box",
    }, 
    {
        objType: "no contracts",
        text: "No salesmen.  No gimmicks.  No contracts. Update your plan as your needs evolve.  If professional products at DIY prices.",
        image: stockGardening,
        imageAlt: "Customized to your needs",
    }, 
];


export const howToSections = [
    {
        objType: "professional results - DIY price",
        text: "Pest control companies make it sound harder than it is - pest control is easy.  It shouldn't be $500/year.  With Jitterbox, your getting home protection for $35 per box.",
        image: stockBox,
        imageAlt: "Expert instruction with every box",
    }, 
    {
        objType: "your plan is made for you",
        text: "SPOILER ALERT - we don't recommend spraying every 3 months like Pest Control companies offer. You should concentrate treatment around the bugs schedule, not the technician. Your Plan is based on how we treat our own homes. We’ve found the best bang for the buck is more like this: 1- Late Feb-March: Control early emergence and hit pests when they are at their weakest after winter. 2- May: Control later emerging pests/ants/spiderlings/forming nests. 3- July:  peak summer- to when spiders, flies, wasps, and mosquitos are at their highest levels. 4- September to eliminate them before they find their winter hiding places in your home.",
        image: grass,
        imageAlt: "created for you",
    },
    {
        objType: "we know things happen - cancel any time",
        text: "You can update at any time to address new pests as they appear or to cut back when those pests are taken care of. And no contracts. If your bugs disappear forever (fingers crossed), you can cancel at anytime.",
        image: stockGardening,
        imageAlt: "customized to your needs",
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
