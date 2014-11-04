describe('Numerical', function () {

    it('should be defined', function () {
        expect(numerals).toBeDefined();
    });

    describe('getRomanVal:', function () {

        it('should be function', function () {
            expect(numerals.getRomanVal).toEqual(jasmine.any(Function));
        });

        it('when input 1 should return I', function(){
            expect(numerals.getRomanVal(1)).toEqual("I");
        });

        it('when input 7 should return VII', function(){
            expect(numerals.getRomanVal(7)).toEqual("VII");
        });

        it('when input 10 should return X', function(){
            expect(numerals.getRomanVal(10)).toEqual("X");
        });

        it('when input 10 should return X', function(){
            expect(numerals.getRomanVal(10)).toEqual("X");
        });

        it('when input 27 should return XXVII', function(){
            expect(numerals.getRomanVal(27)).toEqual("XXVII");
        });

        it('when input 369 should return CCCLXIX', function(){
            expect(numerals.getRomanVal(369)).toEqual("CCCLXIX");
        });

        it('when input 369 should return CCCLXIX', function(){
            expect(numerals.getRomanVal(369)).toEqual("CCCLXIX");
        });

        it('when input 503 should return DIII', function(){
            expect(numerals.getRomanVal(503)).toEqual("DIII");
        });

        it('when input 1986 should return MCMLXXXVI', function(){
            expect(numerals.getRomanVal(1986)).toEqual("MCMLXXXVI");
        });

        it('when input 1986 should return MCMLXXXVI', function(){
            expect(numerals.getRomanVal(2054)).toEqual("MMLIV");
        });

        it('when input 1986 should return MCMLXXXVI', function(){
            expect(numerals.getRomanVal(2892)).toEqual("MMDCCCXCII");
        });

        it('when input 1986 should return MCMLXXXVI', function(){
            expect(numerals.getRomanVal(3000)).toEqual("MMM");
        });



    });



})