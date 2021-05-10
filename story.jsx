import React from 'react';
import {StoryAvatar} from '../components/stories'
import '../styles/story.scss';

function Story() {
    const stories = [
        {
            avatar:'https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name:'Boldoo',
        },
        {
            avatar:'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            name:'Oyunaa',
        },
        {
            avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            name:'Bataa',
        },
    ]

    return (
        <>
            <div className="container" id="story-container">
                <div className="row story">
                    <div className="col s12 m8 flex z-depth-1" id="str">
                        {stories.map(item => (<StoryAvatar {...item}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story;