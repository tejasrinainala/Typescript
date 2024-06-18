// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// : boolean

const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
function showReviewTotal (value : number, reviewer: string,last : boolean) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer
    if(last === true)
    {
        reviewTotalDisplay.innerHTML = reviewTotalDisplay.innerHTML + '⭐️'
    }
}

showReviewTotal(reviews.length, reviews[0].name,reviews[0].loyaltyUser)




//output
review total 3 |last reviewed by Sheia⭐️
