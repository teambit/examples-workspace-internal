import { capitalize } from './capitalize';

describe('capitalize()', () => {
  it('should capitalize a single word', () => {
    expect(capitalize('foo')).toEqual('Foo');
  });

  it('should only capitalize the first word', () => {
    expect(capitalize('foo bar')).toEqual('Foo bar');
  });
});
