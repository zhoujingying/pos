'use strict';

function getBarcode(tags){
    var result = [];
    var barcode = [];
    tags.forEach(function(val,index){
        if(barcode.indexOf(val) === -1){
            barcode.push(val);
        }
    })
    barcode.forEach(function(bVal,index){  
        let barcodes = bVal.split('-')
        if(barcodes.length >= 2){
            result.push({
                barcode:bVal.split('-')[0],
                count:Number(bVal.split('-')[1])
            })
        }
        else {
                result.push({
                barcode:bVal,
                count:1
            })
        } 
    })
    return result;  
}
function countBarcode(tags,barcodes){
    barcodes = getBarcode(tags);
    tags.forEach(function(val,index){

    })
}

module.exports = {
    getBarcode:getBarcode,
    countBarcode:countBarcode
}
