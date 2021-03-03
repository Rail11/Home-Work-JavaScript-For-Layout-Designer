describe('Допольнительное ДЗ', function() {

    it('Возращает ли sum true?', function() {
        assert.equal(sum(), true);
    });

    it('Равен ли num 5?', function() {
        assert.equal(num, 5);
    });

    it('Тип данных each undefined?', function() {
        assert.equal(each(), undefined);
    });

    it('Длинна ech равна 0?', function() {
        assert.lengthOf(each, 0);
    })
});

