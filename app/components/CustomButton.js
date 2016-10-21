import React from 'react';

const CustomButton = ({ data, rowData, metadata }) => (
    <button
        className="btn btn-secondary" 
        onClick={metadata.customComponentMetadata.onClick.bind(null, data, rowData, metadata)}
    >
        {metadata.displayName}
    </button>
);

export default CustomButton;