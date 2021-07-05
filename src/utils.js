const formatDate = (inputDate, hours = false) => {
  const date = new Date(inputDate);
  if (hours) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  return `${date.getHours()}:${date.getMinutes()} 
  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const checkUserName = (users, idnpSelected) => {
  const user = users.find((user) => user.idnp === idnpSelected);
  if (idnpSelected.length === 13 && user) {
    return `${user.numele} ${user.prenumele}`;
  }
  return 'Nespecificat';
};

const filterer = (users, idnpSelected, phoneSelected, reqDate, dateSelected) => {
  const filteredUsers = users.filter((user) => {
    if (idnpSelected === '') {
      return true;
    }
    return user.idnp.includes(idnpSelected);
  })
    .filter((user) => {
      if (phoneSelected === '') {
        return true;
      }
      return user.phone.includes(phoneSelected);
    })
    .filter((user) => {
      if (dateSelected === '') {
        return true;
      }
      const lastTrans = formatDate(user.lastTransaction).split(' ')[3].trim();
      return lastTrans.includes(reqDate);
    });

  return filteredUsers;
};

const timeDifference = (endDate, startDate) => {
  let timeDifference;
  if (endDate && startDate) {
    timeDifference = startDate.getTime() - endDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  }
  return null;
};

const PreviousDaysNums = () => {

};

export {
  formatDate, checkUserName, filterer, timeDifference, PreviousDaysNums,
};
