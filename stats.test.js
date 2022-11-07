const stats = require('./stats');

describe('stats', () => {
	it('gets maximum value', () => {
		expect(stats.max([1, 2, 3, 4])).toBe(4);
	});
	it('gets minimum value', () => {
		expect(stats.min([1, 2, 3, 4])).toBe(1);
	});
	it('gets average value', () => {
		expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
	});
	describe('median', () => {
		// describe안에 describe사용가능, it안에 describe, it 사용 불가
		it('sorts the array', () => {
			expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
			// toEaqual : 객체 또는 배열을 비교해야하는 상황에서 사용
		});
		it('gets the median for odd length', () => {
			expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
		});
		it('gets the median for even length', () => {
			expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
		});
	});
	describe('mode', () => {
		it('has one mode', () => {
			expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
		});
		it('has no mode', () => {
			expect(stats.mode([1, 2, 3])).toBe(null);
		});
		it('has multiple mode', () => {
			expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
		});
	});
});
