function dateDepart(depart){
  let res = new Date();
  res.setDate(res.getDate() + parseInt(depart));
  const myDateDepart = `${res.getFullYear()}-${res.getMonth()+1}-${res.getDate()<10 ? `0${res.getDate()}` : res.getDate ()}`
  return myDateDepart;
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth();
  // const day = today.getDate();
  // const myDateDepart = `${year}-${month+1}-${day+parseInt(depart)}`
  // return myDateDepart;
}

export default dateDepart;