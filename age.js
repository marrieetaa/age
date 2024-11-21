function personAge (birthYear){
  const now  =new Date();
  let year = now .getFullYear();
  return year - birthYear;
}
personAge(1997);