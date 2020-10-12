# tree-demo-2020

On the quiz page, we need these HTML elements to interact with:
- Clickable images (secretly radio button)
    - Two random, different trees (with two random ids).
    - One of the images is 'correct' and has not yet been correctly identified.
    - 
- Question div/span/whatever
- Result div/span/whatever
- Button
        - 

State
- Raw Trees (all the trees, never changes)
    - Should be able to reset the game
    - "Data to guess from" -- we need a place to get "wrong" trees from
- Remaining trees (the ones that have NOT been indetified yet)
    - When this array is empty, the game is over
    - This is where we get 'correct' trees from
- Which trees I got wrong: we will list them at the end
- Total guesses
