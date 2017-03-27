describe('',function(){
    var barcode = require('../../main/main.js');
    it('should return an array with objs that counted',function(){
        expect(barcode.getBarcode(['ITEM000001','ITEM000002-3'])).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    count:1
                },
                {
                    barcode:'ITEM000002',
                    count:3
                }
            ]
        );
    })
    it('should return an array that counted',function(){
        expect(barcode.getCounted(
            [
                {
                    barcode:'ITEM000001',
                    count:1
                },
                {
                    barcode:'ITEM000001',
                    count:3
                }
            ]          
            )).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    count:4
                }
            ]
        );
    })
    it('should return an array with cart information',function(){
        expect(barcode.getCartInfo(
            [
                {
                    barcode:'ITEM000001',
                    count:2
                }
            ]
            )).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:2,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:0,
                    totalSave:0
                }
            ]
            )
    })
    it('should return an array with cart loadPromotions',function(){
        expect(barcode.getCartPromotions(
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
            )).toEqual(
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
    
    it('should return an array with single cart price',function(){
        expect(barcode.getSinglePrice(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:5,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:0,
                    totalSave:0,
                    type:'BUY_TWO_GET_ONE_FREE'
                },
                {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    count:2.5,
                    unit: '斤',
                    price: 15.00,
                    totalPrice:0,
                    totalSave:0,
                    type:null
                }
            ]   
            )).toEqual(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:5,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:12.00,
                    totalSave:3.00,
                    type:'BUY_TWO_GET_ONE_FREE'
                },
                {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    count:2.5,
                    unit: '斤',
                    price: 15.00,
                    totalPrice:37.50,
                    totalSave:0,
                    type:null
                }
            ]
        )
    })

    it('should return an array with single cart price',function(){
        expect(barcode.getTotalPrice(
            [
                {
                    barcode:'ITEM000001',
                    name: '雪碧',
                    count:5,
                    unit: '瓶',
                    price: 3.00,
                    totalPrice:12.00,
                    totalSave:3.00,
                    type:'BUY_TWO_GET_ONE_FREE'
                },
                {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    count:2.5,
                    unit: '斤',
                    price: 15.00,
                    totalPrice:37.50,
                    totalSave:0,
                    type:null
                }
            ]   
            )).toEqual(
                [
                    {price:49.50},
                    {save:3.00},
                    [   
                        
                        {
                            barcode:'ITEM000001',
                            name: '雪碧',
                            count:5,
                            unit: '瓶',
                            price: 3.00,
                            totalPrice:12.00,
                            totalSave:3.00,
                            type:'BUY_TWO_GET_ONE_FREE'
                        },
                        {
                            barcode: 'ITEM000003',
                            name: '荔枝',
                            count:2.5,
                            unit: '斤',
                            price: 15.00,
                            totalPrice:37.50,
                            totalSave:0,
                            type:null
                        }
                    ]
                ]
                )
            })

            
        })