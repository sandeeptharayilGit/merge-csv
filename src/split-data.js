function splitData(data, sliceLength) {
    // console.log("--------------------------");
    // console.log("--------splitData---------");
    if(!sliceLength){
        return [data];
    }
    const numberOfSlices = Math.ceil(data.length / sliceLength);
    let slicedArray = [];
    for (let counter = 0; counter < numberOfSlices; counter++) {
        const sliceStart = (counter * sliceLength)
        const sliceEnd = (((counter + 1) * sliceLength));
        slicedArray.push(data.slice(sliceStart, sliceEnd));
    }

    return slicedArray
}
export default splitData;