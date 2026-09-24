# Roman Numerals Converter and Unit tests

This project was practice for java script and unit tests. I created two unit tests, and used test driven development to code a Roman Numeral converter.

## Converter

This Roman numeral converter takes standard Arabic numbers (e.g. 3, 8, 64, 207, 2024, etc.) as input and converts those numbers to Roman numerals. This conversion are based on the following table of Arabic number and Roman numeral equivalents.

| Arabic | Roman numeral |
| ------ | ------------- |
| 1      | I             |
| 5      | V             |
| 10     | X             |
| 50     | L             |
| 100    | C             |
| 1000   | M             |

### *This converter uses "old" Roman numerals.* 
"Old" Roman numerals are based solely on addition. Every number is "built" only through the addition of smaller component "digits". For example, in the "old" Roman numeral system the Arabic number 1 is represented as "I", 2 is represented as "II" (i.e. 1 + 1), 4 is represented as "IIII" (i.e. 1 + 1 + 1 + 1), 9 is represented as "VIIII" (5 + 1 + 1 + 1 + 1), and so forth. This is unlike modern Roman numerals, which incorporate subtraction (e.g. "IV" is 5 - 1 = 4 in modern Roman numerals).

## Unit Tests

The two unit tests use the [Jest testing framework](https://jestjs.io/) to verify functions used to verify user input during a user signup process. 

verifyEmail.js determines if an email input is a valid email address (based on a beautifully horrible regular expression).

Similarly, veryifyPassword.js determines if a password input meets the following criteria: contains at least, 8 characters, one lowercase letter, one uppercase letter, one numerical digit, one symbol (!@#$%^&*) and does not contain invalid characters (spaces and other symbols not listed).
