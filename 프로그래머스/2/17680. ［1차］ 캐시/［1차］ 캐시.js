function solution(cacheSize, cities) {
  let result = 0;
  let cache = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city) => {
    const convertedCity = city.toUpperCase();

    if (cache.includes(convertedCity)) {
      result += 1;
      cache = cache.filter((item) => item !== convertedCity);
      cache.push(convertedCity);
      return;
    }

    if (cache.length === cacheSize) {
      cache.shift();
    }

    cache.push(convertedCity);
    result += 5;
  });

  return result;
}