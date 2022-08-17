endpoint.getComic = function(number) {
  return endpoint._getComic({
    number: number
  });
};

endpoint.getCurrent = function() {
  return endpoint.getComic(0);
};
