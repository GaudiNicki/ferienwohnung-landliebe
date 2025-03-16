interface BlockedPeriod {
  id: string;
  startDate: string;
  endDate: string;
  reason: string;
}

interface Prices {
  onePerson: number;
  twoPersons: number;
  cleaningFee: number;
  minStay: number;
}