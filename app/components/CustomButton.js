import React from 'react';

const CustomButton = ({ data, metadata }) => (
    <button
        className="btn btn-secondary" 
        onClick={metadata.customComponentMetadata.onClick.bind(null, data)}
    >
        {metadata.displayName}
    </button>
);

export default CustomButton;