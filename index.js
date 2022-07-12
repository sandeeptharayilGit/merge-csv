import mergeCSV from "./src/merge-csv";

console.time("Total Processing time");

/*keep these files inside input folder*/
const fileNames = [
    "BillingDetail_NEW_Fixed_1.csv",
    "BillingDetail_NEW (1).csv",
    "BillingDetail_NEW (2).csv" ];

/** 
 * if you want to split the merged csv files
 * sliceLength=0 wont split **/
const sliceLength = 15000;

mergeCSV(fileNames, sliceLength);
