interface Rating {
  name: string;
  text: string;
  score: number;
  visible: boolean;
}

interface OverallRating {
  score: number;
  summary: string;
}

interface BlockedPeriod {
  id: string;
  startDate: string;
  endDate: string;
  reason: string;
}

interface Prices {
  winterPrice: number;
  summerPrice: number;
  cleaningFee: number;
  minStay: number;
}