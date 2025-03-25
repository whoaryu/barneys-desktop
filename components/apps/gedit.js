import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';

export class Gedit extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                { id: 1, text: "Print INTERVENTION Banner", done: true },
                { id: 2, text: "Call 'Some' Guy (For something totally shady but totally necessary)", done: false },
                { id: 3, text: "Teach Ted how to live life correctly", done: false },
                { id: 4, text: "Organize Laser Tag Tournament", done: false },
                { id: 5, text: "Write Blog Post: 'Top 10 Ways to Score at a Wedding'", done: false },
                { id: 6, text: "Forge a Wikipedia Page for My Next Alias", done: false },
                { id: 7, text: "Convince Robin to Admit She’s in Love With Me", done: true },
                { id: 8, text: "Find New Ways to Make Fun of Ted’s Red Cowboy Boots", done: false },
                { id: 9, text: "Investigate If Lily Has Any Hot Friends Left", done: false },
                { id: 10, text: "Rewatch 'The Karate Kid' (The Real One, Starring Billy Zabka)", done: true }
            ],
            newTask: ""
        };
    }

    toggleTask = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        }));
    };

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
                    <span className="font-bold ml-2">Barney's Legendary To-Do List</span>
                </div>
                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen p-4">
                    <ul>
                        {this.state.tasks.map(task => (
                            <li key={task.id} className="flex items-center py-1">
                                <input type="checkbox" checked={task.done} onChange={() => this.toggleTask(task.id)} className="mr-2 cursor-pointer" />
                                <span className={`cursor-pointer ${task.done ? 'line-through text-gray-400' : ''}`}>
                                    {task.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit />;
};
