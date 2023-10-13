(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */







    // const createPerson = (firstName, lastName) => {
    //     const result = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         sayHello: function () {
    //             let message = `${this.firstName} says hello!`;
    //             console.log(message);
    //         }
    //     }
    //     return result;
    // }
    //
    // const person1 = createPerson("Mark", "Hamill");
    // person1.sayHello();
    // const person2 = createPerson("Jason", "Merrell");
    // person2.sayHello();


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    const person= {
        firstName: "Mark",
        lastName:  "Smith",
        sayHello: function (){
            console.log(`hello from ${this.firstName} ${this.lastName}`)
        }
    };
    person.sayHello()
// const
// person.sayHello();
//     function returnTwoTimesInput(input){
//         console.log("users number is " + input);
//         console.log("total is: " + (2*input));
//         return 2 * input;
//     }


    // function consoleLogTwo(){
    //     console.log(2)
    // }
    //
    // // consoleLogTwo();
    //
    // function addToThree(input){
    //     console.log(input + 3);
    // }
    //
    // addToThree(returnTwo())
    // // console.log(consoleLogTwo(2) + 3);
    // // addToThree(consoleLogTwo());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // Define the shoppers' names and their purchase amounts
    // const shoppers = [
    //         { name: "Cameron", amount: 180 },
    //         { name: "Ryan", amount: 250 },
    //         { name: "George", amount: 320 },
    //     ];

// Define the discount percentage
//     const discountPercentage = .12;

// Calculate and display the amount each shopper needs to pay
//     shoppers.forEach(function(shopper) {
//         let discount = 0;
//         if (shopper.amount > 200) {
//             discount = (shopper.amount * discountPercentage);
//         }
//         const amountAfterDiscount = shopper.amount - discount;
//
//         console.log(
//             `${shopper.name} spent $${shopper.amount}, received a ${discountPercentage}% discount of $${discount}, and needs to pay $${amountAfterDiscount}.`
//         );
//     });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: "To Kill a Mockingbird",
            author: { firstName: "Harper", lastName: "Lee" }
        },
        {
            title: "1984",
            author: { firstName: "George", lastName: "Orwell" }
        },
        {
            title: "The Great Gatsby",
            author: { firstName: "F. Scott", lastName: "Fitzgerald" }
        },
        {
            title: "The Catcher in the Rye",
            author: { firstName: "J.D.", lastName: "Salinger" }
        },
        {
            title: "Pride and Prejudice",
            author: { firstName: "Jane", lastName: "Austen" }
        }
    ];

    console.log(books)




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach((book,i)=>{
        console.log(`book #`, i+1 );
        console.log(`Title:`, book.title);
        console.log(`Author:`, book.author);

    });






    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
