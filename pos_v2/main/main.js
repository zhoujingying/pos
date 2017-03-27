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
                count:0
            })
        } 
    })

    result.forEach(function(val,index){
        tags.forEach(function(tVal,index){
            if(val.barcode === tVal){
                    val.count++;
            }
        })
    })
    
    return result; 
}


module.exports = {
    getBarcode:getBarcode
}
