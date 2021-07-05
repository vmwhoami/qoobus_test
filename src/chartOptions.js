const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const chartData = (results, downloads) => {
  const data = {
    labels: results.map((users) => formatDate(users.date)),
    datasets: [
      {
        label: 'Unique Users',
        data: downloads.map((user) => user.nrUniqUsers),
        lineTension: 0.4,
        fill: true,
        backgroundColor: '#B4DFC4',
        borderColor: '#036647',
      },
    ],
  };
  return data;
};
const options = {
  normalized: true,
  showLine: false,
  animation: {
    duration: 0,
  },
};

export { chartData, options };
