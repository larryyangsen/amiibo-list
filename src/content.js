import React from 'react';
export default ({ amiibo }) => {
    if (!amiibo) return <div>loading</div>;
    const { amiiboSeries, image, character } = amiibo;

    return (
        <div className="aiibo-content">
            <h1>{amiiboSeries}</h1>
            <h2>{character}</h2>
            <img src={image} alt={character} height="240" />
        </div>
    );
};
