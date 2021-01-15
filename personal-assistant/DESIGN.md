ToDoTable - Contains entire table and its parts
    SearchBar - Used for searching for substrings in todo list. (STYLE DONE)
    AddBar - Receives new to-do item (STYLE DONE)
    List - Displays list of todos (OR special text if none added) (Style Done)
        ListTitle - Displays title of list "To-Do" (?) (Style done - rendered as part of List)
        ListCell - Displays to-do item and button for deletion.
    





    array of objects to store to-dos (store more than one, desc and ID)
    some type of check to see if the to-do array is empty, and render some other text if it is

    ListTitle can probably be rendered as text as a part of List
    ListItem pulls objects from List, has a button to delete from array somehow?

    SearchBar does a substring search of the object desc
    AddBar pushes to the array of objects, somehow..?
