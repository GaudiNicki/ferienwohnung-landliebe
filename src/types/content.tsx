interface GuestRating {
    name: string,
    text: string,
    score: number,
    visible: boolean
}

interface Rating {
    overallScore: number,
    ratingCount: number,
    ratingSummary: string,
    guestRatings: GuestRating[]
}