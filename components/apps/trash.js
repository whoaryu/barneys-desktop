import React, { Component } from 'react';
import $ from 'jquery';

export class LegendaryTrash extends Component {
    constructor() {
        super();
        this.trashItems = [
            {
                name: "Ted's Cringe Texts",
                icon: "./themes/Yaru/apps/gedit.png"
            },
            {
                name: "Robin's Ex-Boyfriends List",
                icon: "./themes/Yaru/apps/gedit.png"
            },
            {
                name: "Slap Bet Aftermath.mp4",
                icon: "./themes/filetypes/video.png"
            },
            {
                name: "Blitz's Bad Luck Folder",
                icon: "./themes/Yaru/system/folder.png"
            },
            {
                name: "Barney's Playbook (Deleted Scenes)",
                icon: "./themes/Yaru/apps/todoist.png"
            },
            {
                name: "Marshall’s Embarrassing Karaoke Video",
                icon: "./themes/filetypes/video.png"
            },
            {
                name: "Ted's Butterfly TrampStamp",
                icon: "./themes/filetypes/image.png"
            },
        ];
        this.state = {
            empty: false,
        }
    }

    componentDidMount() {
        let wasEmpty = localStorage.getItem("trash-empty");
        if (wasEmpty === "true") this.setState({ empty: true });
    }

    focusFile = (e) => {
        $(e.target).children().get(0).classList.toggle("opacity-60");
        $(e.target).children().get(1).classList.toggle("bg-ub-orange");
    }

    emptyTrash = () => {
        alert("Are you sure? This is history, bro!");
        this.setState({ empty: true });
        localStorage.setItem("trash-empty", true);
    };

    emptyScreen = () => {
        return (
            <div className="flex-grow flex flex-col justify-center items-center">
                <img className="w-24" src="./themes/Yaru/status/user-trash-symbolic.svg" alt="Barney's Legendary Trash" />
                <span className="font-bold mt-4 text-xl px-1 text-gray-400">This trash is now legen... wait for it... dary! And empty.</span>
            </div>
        );
    }

    showTrashItems = () => {
        return (
            <div className="flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen">
                {
                    this.trashItems.map((item, index) => {
                        return (
                            <div key={index} tabIndex="1" onFocus={this.focusFile} onBlur={this.focusFile} className="flex flex-col items-center text-sm outline-none w-16 my-2 mx-4">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <img src={item.icon} alt="Barney's Trash Icons" />
                                </div>
                                <span className="text-center rounded px-0.5">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-warm-grey bg-opacity-40 text-sm">
                    <span className="font-bold ml-2">Barney's Legendary Trash</span>
                    <div className="flex">
                        <div className="border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded text-gray-300">Restore Awesomeness</div>
                        <div onClick={this.emptyTrash} className="border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded hover:bg-opacity-80">Empty & Suit Up!</div>
                    </div>
                </div>
                {
                    (this.state.empty
                        ? this.emptyScreen()
                        : this.showTrashItems()
                    )
                }
            </div>
        )
    }
}

export default LegendaryTrash;

export const displayLegendaryTrash = () => {
    return <LegendaryTrash />;
}
