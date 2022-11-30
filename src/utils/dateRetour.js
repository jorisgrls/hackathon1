function dateRetour(depart, retour) {
  const res = new Date();
  res.setDate(res.getDate() + parseInt(depart, 10) + parseInt(retour, 10));
  const myDateRetour = `${res.getFullYear()}-${res.getMonth() + 1}-${res.getDate() < 10 ? `0${res.getDate()}` : res.getDate()} `;
  return myDateRetour;
}

export default dateRetour;
