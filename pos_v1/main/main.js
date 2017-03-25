'use strict';

function printReceipt(tags) {

    var cartComment = getComment(tags);
    var cartItems = getItemsList(cartComment, loadAllItems());
    var cartCounts = getCartCounts(cartItems);
    var cartPromotions = getPromotions(cartCounts, loadPromotions());
    var finalItems = getCalculateInfo(cartPromotions);
    printInfo(finalItems);
}

function getComment(tags) {
    var commentItems = [];
    tags.forEach(function (barcode, index) {
        if (barcode.split('-').length >= 2) {
            commentItems.push({
                barcode: barcode.split('-')[0],
                count: barcode.split('-')[1]
            });
        }
        else {
            commentItems.push({
                barcode: barcode,
                count: 1
            });
        }
    })
    return commentItems;
}

function getItemsList(commentCode, allItemsAr) {
    var cartItems = [];
    for (var item of allItemsAr)
        for (var barcode of commentCode) {
            if (barcode.barcode === item.barcode) {
                item.count = barcode.count;
                item.eachTotal = 0;
                item.eachSave = 0;
                cartItems.push(item);
            }
        }
    return cartItems;
}

function getCartCounts(items) {
    var cartCounts = [];
    console.log(items)
    items.forEach(function (item, index) {
        
        if (cartCounts.indexOf(item) !== -1) {
            item.count++;
        } else {
            cartCounts.push(item);
        }
    })
    console.log(cartCounts)
    cartCounts[0].count++
    return cartCounts;
}

function getPromotions(items, promotions) {
    var itemsPro = [];
    promotions.forEach(function (proItem, index) {
        items.forEach(function (item, index) {
            if (proItem.barcodes.indexOf(item.barcode) !== -1) {
                item.type = proItem.type;
            }
            else {
                item.type = null;
            }
            itemsPro.push(item);
        })
    })
    return itemsPro;
}

function getCalculateInfo(items) {
    var finalCartItems = [{
        total: 0,
        save: 0
    }];
    var cartInfo = [];
    items.forEach(function (item, index) {
        if (item.type == 'BUY_TWO_GET_ONE_FREE') {
            if (item.count > 2) {
                item.eachTotal = (item.count - 1) * item.price;
                item.eachSave = item.price;
            }
        } else {
            item.eachTotal = item.count * item.price;
            item.eachSave = 0;
        }
        finalCartItems[0].total += item.eachTotal;
        finalCartItems[0].save += item.eachSave;
        cartInfo.push(item);
        finalCartItems.push(cartInfo);

    })
    return finalCartItems;
}

function printInfo(items) {
    var itemStr = '', totalStr = '', finalStr = '';
    items[1].forEach(function (item, index) {
        itemStr += '名称：' + item.name + '，数量：' + item.count + item.unit + '，单价：' + item.price.toFixed(2) + '(元)，小计：' + item.eachTotal.toFixed(2) + '(元)' + '\n';
    })
    totalStr = '总计：' + items[0].total.toFixed(2) + '(元)' + '\n' + '节省：' + items[0].save.toFixed(2) + '(元)' + '\n';
    finalStr = '***<没钱赚商店>收据***' + '\n' + itemStr + '----------------------' + '\n' + totalStr + '**********************'
    console.log(finalStr);
}



