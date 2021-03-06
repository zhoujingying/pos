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
                count:1
            })
        } 
    })
    return result; 
}

function getCounted(items){
    var result = items.filter(v=>v.count>1);
    items.forEach(function(val,index){
        result.forEach(function(rVal,index){
            if(rVal.barcode !== val.barcode){
                result.push(val);
            }else if(rVal.barcode === val.barcode&&val.count==1){
                rVal.count++;
            }
        })
    })
    return result;
}

function getCartInfo(items){
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

function getCartPromotions(items){
    var allPro = load.loadPromotions();
    items.forEach(function(iVal,index){
        allPro.forEach(function(val,index){
            if(val.barcodes.includes(iVal.barcode)){
                iVal.type = val.type;
            }else{
                iVal.type = null;
            }
        })
    })
    return items;
}

function getSinglePrice(items){
    items.forEach(function(val,index){
        if(val.type === 'BUY_TWO_GET_ONE_FREE'&&val.count>2){
            val.totalPrice = val.price*(val.count-1);
            val.totalSave = val.price;
        }else{
            val.totalPrice = val.price*val.count;
        }
    })
    return items;
}

function getTotalPrice(items){
    var result = [];
    var price = 0;
    var save = 0;
    items.forEach(function(val,index){
        price += val.totalPrice;
        save += val.totalSave;
    })
    result[0] = {
        price:price,
        save:save
    }
    result[1] = items;
    return result;
}

module.exports = {
    getBarcode:getBarcode,
    getCounted:getCounted,
    getCartInfo:getCartInfo,
    getCartPromotions:getCartPromotions,
    getSinglePrice:getSinglePrice,
    getTotalPrice:getTotalPrice

}
