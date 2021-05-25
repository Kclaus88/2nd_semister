import React from 'react';

export const StoryAvatar = ({avatar , name}) => {
    return (
        <div className="Avatar-div" >
            <div>
            <img src={avatar} id="storyAvatar"/>
            </div>
            <span id="story-text">{name}</span>
        </div>
    )
}