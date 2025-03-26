import displaySpotify from './components/apps/spotify';
//import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutBarney } from './components/apps/barney';
import { displayTerminalCalc } from './components/apps/calc';
import { displayResumeVideo, displaySuitVideo } from "./components/apps/videoplayer";
import { displayBlogApp } from "./components/apps/blogapp";
import { displayRobinPage, displayHotCrazyChart } from "./components/apps/imageviewer";
import { displaySlapBet } from './components/apps/slapbet';
import { displayQuoteGame } from './components/apps/quotegame';
import { displayTedsHome } from './components/apps/tedshome';
import PDFBookViewer from './components/apps/pdfbook';
// import Flipbook from './components/apps/trial';
// import PDFViewer from './components/apps/trial';
import BookReader from './components/apps/trial';
//import { PDFFlipBook } from './components/apps/pdfbook';


const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-barney",
        title: "About Barney",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutBarney,
    },

    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, 
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "To Do List",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    
    {
        id: "resume-video",
        title: "Barney's Resume",
        icon: "./themes/filetypes/video.png",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayResumeVideo,
    },
    {
        id: "blog",
        title: "Barney's Blog",
        icon: "./themes/Yaru/apps/chrome.png", // Reusing Chrome icon
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayBlogApp,
    },
    {
        id: "robin-page",
        title: "The Robin Page",
        icon: "./themes/filetypes/image.png",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayRobinPage,
    },
    {
        id: "hot-crazy-chart",
        title: "Hot Crazy Chart",
        icon: "./themes/filetypes/image.png",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayHotCrazyChart,
    },
    {
        id: "slapbet",
        title: "Slap Bet Counter",
        icon: "./themes/Yaru/apps/slapbet.png", // Reusing Chrome icon
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displaySlapBet,
    },
    {
        id: "suit-video",
        title: "Nothing Suits Me Like A Suit",
        icon: "./themes/filetypes/video.png",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displaySuitVideo,
    },
    {
        id: "himym-quote-game",
        title: "Who Said It?",
        icon: "./themes/Yaru/apps/game.png",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayQuoteGame,
    },
    // {
    //     id: "playbook",
    //     title: "The Playbook",
    //     icon: "./themes/filetypes/image.png",
    //     disabled: false,
    //     favourite: false,
    //     desktop_shortcut: true,
    //     screen: () => <PDFFlipBook pdfPath="./pdfs/playbook.pdf" />,
    // },

    // {
    //     id: "playbook",
    //     title: "The Playbook",
    //     icon: "./images/playbook.jpg",
    //     disabled: false,
    //     favourite: false,
    //     desktop_shortcut: true,
    //     screen: () => <PDFBookViewer  pdfPath="./pdfs/playbook.pdf" title="The Playbook" />,
    // },
    // {
    //     id: "brocode",
    //     title: "The Bro Code",
    //     icon: "./images/thebrocode.jpg",
    //     disabled: false,
    //     favourite: false,
    //     desktop_shortcut: true,
    //     screen: () => <PDFBookViewer  pdfPath="./pdfs/thebrocode.pdf" title="The Bro Code" />,
    // },
    {
        id: "teds-home",
        title: "Ted's Apartment 3d",
        icon: "./images/ted-funny.jpg", // Reusing Chrome icon
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTedsHome,
    },
    
    {
        id: "play-book",
        title: "The Playbook",
        icon: "./images/playbook.jpg",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: () => <BookReader fileUrl={"./pdfs/playbook.pdf"} />,
    },
    {
        id: "bro-code",
        title: "The Bro Code",
        icon: "./images/thebrocode.jpg",
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: () => <BookReader fileUrl={"./pdfs/thebrocode.pdf"}  />,
    },
    
]

export default apps;