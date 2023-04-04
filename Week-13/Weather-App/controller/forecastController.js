const getForeCastData = (req, res) => {
  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.cityName}&appid=35c4f81ce6b8148f7f652c1563b19d3b&cnt=${req.params.days}`;

    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    // console.log(data);
    res.json(data);
  };

  fetchData();
};

module.exports = getForeCastData;
