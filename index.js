// Code your solution in this file!
const expect = chai.expect;

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
    });

  describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 in example below is 528', function() {
      // total feet travelled is 528 -> 10.56
      expect(calculatesFarePrice(400, 2000)).to.equal(10.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(2000,2500)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(2500)).to.greaterthan('cannot travel that far');
    });
  });
});
