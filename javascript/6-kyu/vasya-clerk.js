// Kata Link: https://www.codewars.com/kata/vasya-clerk

const tickets = (peopleInLine) => {
  const bills = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[25]++;
        break;

      case 50:
        if (bills[25] >= 1) {
          bills[25]--;
          bills[50]++;
        } else {
          return 'NO';
        }
        break;

      case 100:
        if (bills[25] >= 1 && bills[50] >= 1) {
          bills[25]--;
          bills[50]--;
          bills[100]++;
        } else if (bills[25] >= 3) {
          bills[25] -= 3;
          bills[100]++;
        } else {
          return 'NO';
        }
        break;

      default:
        break;
    }
  }

  return 'YES';
}

console.log(tickets([25, 25, 50, 50]));