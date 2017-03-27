describe('',function(){
    var barcode = require('../../main/main.js');
    it('should return an array with objs that uncounted',function(){
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
})