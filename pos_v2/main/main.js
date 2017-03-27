'use strict';
var load = require('../test/fixtures');
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
function getCartInfo(items){
    // items = getBarcode(tags);
    var allItems = load.loadAllItems();
    items.forEach(function(val,index){
        allItems.forEach(function(aVal,index){
            if(val.barcode === aVal.barcode){
                val.name = aVal.name;
                val.unit = aVal.unit;
                val.price = aVal.price;
                val.totalPrice = 0;
                val.totalSave = 0;  
            }
        })
    })
    return items;
}

module.exports = {
    getBarcode:getBarcode,
    getCartInfo:getCartInfo
}
