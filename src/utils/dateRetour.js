function dateRetour(depart, retour){
  let res = new Date();
  res.setDate(res.getDate() + depart + retour);
  const myDateRetour = `${res.getFullYear()}-${res.getMonth()+1}-${res.getDate()}`
  return myDateRetour;
}
console.log(dateRetour(2, 4))
export default dateRetour;