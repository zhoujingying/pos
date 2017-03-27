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

    
})