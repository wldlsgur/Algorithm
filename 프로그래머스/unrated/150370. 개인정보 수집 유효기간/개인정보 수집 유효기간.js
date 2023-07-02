function solution(today, terms, privacies) {
  let [tYear, tMonth, tDay] = today.split(".").map(Number);
  let todaySum = tYear * 12 * 28 + tMonth * 28 + tDay;
  let result = [];

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" ");
    const termString = Number(terms.find((v) => term === v[0]).split(" ")[1]);
    let [year, month, day] = date.split(".").map(Number);

    let dateSum = year * 12 * 28 + month * 28 + day + termString * 28;

    if(todaySum >= dateSum){
        result.push(i + 1);
    }
  }
  return result;
}