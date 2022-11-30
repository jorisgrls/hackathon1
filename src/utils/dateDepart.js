function dateDepart(depart) {
  const res = new Date();
  res.setDate(res.getDate() + parseInt(depart, 10));
  const myDateDepart = `${res.getFullYear()}-${res.getMonth() + 1}-${res.getDate() < 10 ? `0${res.getDate()}` : res.getDate()}`;
  return myDateDepart;
}

export default dateDepart;
