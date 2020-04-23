function cleanup(data) {
    return data.Confirm_Number !== ""
        && data.Confirm_Number !== undefined
        && data.Chain_Name !== "Report_Criteria_ViewBy"
        && data.Chain_Name !== "Chain(s)";
}

function cleanupData(data) {
    console.log("--------------------------");
    console.log("----------cleanupData--------");
    const beforeLength = data.length;
    const cleanData = data
        .filter(cleanup)
        .sort((row1, row2) => row1.Confirm_Number < row2.Confirm_Number);
    console.log("Removed ", beforeLength - cleanData.length, "invalid data");
    console.log("Total data length after cleanup", cleanData.length);

    return cleanData;
}


export default cleanupData;