import React from 'react';

export const StoryAvatar = ({avatar , name}) => {
    return (
        <div >
            <img src={avatar} id="storyAvatar"/>
            <p>{name}</p>
        </div>
    )
}