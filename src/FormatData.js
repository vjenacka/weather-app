//goes through the JSONData and extracts the day of the forcast, hour, temp of that hour and the temp icon
const formatData = data => {
    return data.list.map(item => {
      return {
        day: dayConverter(item.dt),
        dayInText: dayInTextConverter(item.dt),
        hour: hourConverter(item.dt),
        temp: Math.floor(item.main.temp),
        icon: item.weather[0].icon
      }
    });
  }
  //returns an array soo we can change the state
  const storeHours = hourcast => {
    let arr = groupBy(hourcast, 'day');
    let newArr = [];
    
    for (let key in arr) {
      if (arr.hasOwnProperty(key)) {
        newArr.push(arr[key]);
      }
    }

    return returnsNewState(newArr);
  }
  //makes it like the state we need
  const returnsNewState = arr =>{
      return arr.map((ele,index) =>{
          return {
            id: index+1,
            actvie: false,
            day: ele[0].day,
            dayInText: ele[0].dayInText,
            hours: ele.map(Objele=>Objele.hour),
            temps: ele.map(Objele=>Objele.temp),
            icons: ele.map(Objele=>Objele.icon),
          }
      })
  }

  //sorts the hourcast by days
  const groupBy = (arr, property) => {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  ///convert the unix time
  const hourConverter = UNIX_timestamp => new Date(UNIX_timestamp * 1000).getHours();
  const dayConverter = UNIX_timestamp => new Date(UNIX_timestamp * 1000).getDate();
  const dayInTextConverter = UNIX_timestamp => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(UNIX_timestamp * 1000).getDay()]
  }
  //minified function
  const returnedData = data =>{
      const usefullData= formatData(data);
      return storeHours(usefullData);
  }

  export default(returnedData);