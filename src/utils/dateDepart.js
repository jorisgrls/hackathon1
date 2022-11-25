function dateDepart(depart){
  let res = new Date();
  res.setDate(res.getDate() + depart);
  const myDateDepart = `${res.getFullYear()}-${res.getMonth()+1}-${res.getDate()}`
  return myDateDepart;
}

export default dateDepart;