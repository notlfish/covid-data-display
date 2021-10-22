import { flagSrc, mapSrc, getYesterdayDate } from '../utils/stats-api';

describe('flags and country shapes helpers', () => {
  it('Returns the correct flag src for a given iso code', () => {
    const boFlagURL = 'https://www.countryflags.io/bo/flat/64.png';

    expect(flagSrc('bo')).toEqual(boFlagURL);
  });

  it('Returns the correct country shape src for a given iso code', () => {
    const arShapeURL = 'https://raw.githubusercontent.com/djaiss/mapsicon/master/samerica/ar/64.png';

    expect(mapSrc('ar')).toEqual(arShapeURL);
  });
});

describe('date helpers', () => {
  it('Returns yesterday\'s date in format yyyy-mm-dd', () => {
    // Mock today's date to get a deterministic result
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date('1970-12-12').getTime());

    const yesterdayFormatted = '1970-12-11';

    expect(getYesterdayDate()).toEqual(yesterdayFormatted);
  });
});
