describe('',function(){
    var barcode = require('../../main/main.js');
    it('should return an array with objs that counted',function(){
        expect(barcode.getBarcode(['ITEM000001','ITEM000002-3','ITEM000001','ITEM000002'])).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    count:2
                },
                {
                    barcode:'ITEM000002',
                    count:4
                }
            ]
        );
    })

    it('should return an array with cart information',function(){
        expect(barcode.getCartInfo([
                {
                    barcode:'ITEM000001',
                    count:2
                },
                {
                    barcode:'ITEM000002',
                    count:4
                }
            ])).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:2,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:0,
                    totalSave:0
                },
                {
                    barcode:'ITEM000002',
                    count:4,
                    name: '苹果',
                    unit: '斤',
                    price: 5.50,
                    totalPrice:0,
                    totalSave:0           
                }
            ]
            )
    })
    it('should return an array with cart loadPromotions',function(){
        expect(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:2,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:0,
                    totalSave:0
                },
                {
                    barcode:'ITEM000002',
                    count:4,
                    name: '苹果',
                    unit: '斤',
                    price: 5.50,
                    totalPrice:0,
                    totalSave:0           
                }
            ]
        ).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:2,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:0,
                    totalSave:0,
                    type:'BUY_TWO_GET_ONE_FREE'
                },
                {
                    barcode:'ITEM000002',
                    count:4,
                    name: '苹果',
                    unit: '斤',
                    price: 5.50,
                    totalPrice:0,
                    totalSave:0,
                    type:null        
                }
            ]
        )
    })

    
})