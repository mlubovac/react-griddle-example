import CustomButton from './../../../components/CustomButton';

/**
 * Modify headers by adding two additional objects
 */
export const formatColumns = (headers) => {
    if (!Array.isArray(headers)) {
        return;
    }
    return headers.concat([
        {
            "columnName": "edit",
            "displayName": "Edit",
            "customComponent": CustomButton,
            "customComponentMetadata": {
                "onClick": (data) => { alert(`edit handler \n\r GUID ${data}`) }
            }            
        },
        {
            "columnName": "delete",
            "displayName": "Delete",
            "customComponent": CustomButton,
            "customComponentMetadata": {
                "onClick": (data) => { alert(`delete handler \n\r GUID ${data}`) }
            }                                    
        }     
    ]);
};