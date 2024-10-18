To-Do/INFO:

We need to implement the logic in such a way that when the multiplication symbol () is pressed, the number before it is stored. 
Then, if another multiplication symbol () appears, the current number (which could be positive or negative) is multiplied by the previously stored number. 
Additionally, when the "enter" key is pressed, the current number should also be multiplied by the stored number.

For example:
In the expression 3 * 4, the number 3 is stored when the multiplication symbol is pressed. When "enter" is pressed, the result should be 3 * 4.

Another example:
For 3 * 4 * 5, the number 3 is stored after pressing the first multiplication symbol. When 4 is entered, it is multiplied by the stored number (3), 
and the result is stored. Then, the number 5 is multiplied by the result of the previous calculation (3 * 4), as we're not storing intermediate values, 
but always working with the latest result. In this way, the most recent number is always used in the multiplication chain.
