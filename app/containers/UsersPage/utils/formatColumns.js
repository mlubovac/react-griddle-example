import CustomButton from './../../../components/CustomButton';

/**
 * Modify headers by adding two additional objects
 */
export function formatColumns (headers) {
    if (!Array.isArray(headers)) {
        return;
    }

    return headers.concat([
        {
            "columnName": "edit",
            "displayName": "Edit",
            "customComponent": CustomButton,
            "customComponentMetadata": {
                "onClick": (data, rowData, metadata) => { 
                    console.log(`data`, data);
                    console.log(`rowData`, rowData);
                    console.log(`metadata`, metadata);                    
                 }
            }            
        },
        {
            "columnName": "delete",
            "displayName": "Delete",
            "customComponent": CustomButton,
            "customComponentMetadata": {
                // "onClick": (data) => { alert(`delete handler \n\r GUID ${data}`) }
                "onClick": (guid) => this.removeUser(guid)                
            }                                    
        }     
    ]);
};