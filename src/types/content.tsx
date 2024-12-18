interface GuestRating {
    name: string,
    text: string,
    score: number,
    visible: boolean
}

interface Rating {
    overallScore: number,
    ratingSummary: string,
    guestRatings: GuestRating[]
}