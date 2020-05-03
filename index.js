import mergeCSV from "./src/merge-csv";

console.time("Total Processing time");

/*keep these files inside input folder*/
const fileNames = [
    "BillingDetail_NEW.csv",
    "BillingDetail_NEW_2.csv",
    "BillingDetail_NEW_3.csv" ];

/** 
 * if you want to split the merged csv files
 * sliceLength=0 wont split **/
const sliceLength = 15000;

mergeCSV(fileNames, sliceLength);
