const Card = require('./Card');

describe('Card model', () => {
  it('has a required card phrase', () => {
    const card = new Card();
    const { errors } = card.validateSync();
    expect(errors.cardPhrase.message).toEqual('Path `cardPhrase` is required.');
  });

  it('has a required category', () => {
    const card = new Card();
    const { errors } = card.validateSync();
    expect(errors.level.message).toEqual('Path `level` is required.');
  });
});
