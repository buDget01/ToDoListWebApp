"use strict"

/* GET ELEMENTS */
const start_content = document.getElementById("start_content")
const main_content = document.getElementById("main_content")
const navigation_create = document.getElementById("navigation_create")
const navigation_list = document.getElementById("navigation_list")

let navigation_dif = false


/* CREATE ELEMENTS */
let toDoP = document.createElement('p')
    toDoP.className = "content"
    toDoP.id = "toDoP"

let br1 = document.createElement('br')
let br2 = document.createElement('br')
let br3 = document.createElement('br')

let toDo_submit = document.createElement('button')
    toDo_submit.className = "button"

    /* labels + attributes*/
let toDoLabel_Date = document.createElement('label')
    toDoLabel_Date.for ="input_date"
let toDoLabel_ToDo = document.createElement('label')
    toDoLabel_ToDo.for = "input_ToDO"
let toDoLabel_Username = document.createElement('label')
    toDoLabel_Username.for = "input_Username"
    /* input fields + attributes*/
let toDoInput_Date = document.createElement('input')
    toDoInput_Date.id = "input_date"
    toDoInput_Date.type = "datetime-local"
let toDoInput_ToDo = document.createElement('textarea')
    toDoInput_ToDo.id = "input_ToDo"
    toDoInput_ToDo.style="width:1000px; height:60%;"
let toDoInput_Username = document.createElement('input')
    toDoInput_Username.id = "input_username"



/* ADD EVENT LISTENERS (for Create) */
navigation_create.addEventListener("click", navcreate)

function navcreate()
{
    if (navigation_dif == false)
    {
        /* removal of original start content*/
        start_content.remove()
    }
    else
    {   
        /* removal of other appended content*/
        const main_content_reset = document.getElementById("main_content_change")
        main_content_reset.remove()
    }

    /* creation of paragraph that enables the deletion */
    let main_content_change = document.createElement('p')
    main_content_change.class = "content"
    main_content_change.id = "main_content_change"

    main_content.append(main_content_change)

    toDoP.innerText = "Please enter todays date before writing your ToDo so that you can find it easier later. And don't forget to enter your Username to save your ToDo correctly."
    main_content_change.append(toDoP)
    
    main_content_change.append(toDoLabel_Date)
    toDoLabel_Date.innerHTML = "Date: <br>"
    main_content_change.append(toDoInput_Date)

    main_content_change.append(br1)

    main_content_change.append(toDoLabel_ToDo)
    toDoLabel_ToDo.innerHTML = "Enter your ToDo here: <br>"
    main_content_change.append(toDoInput_ToDo)

    main_content_change.append(br2)

    main_content_change.append(toDoLabel_Username)
    toDoLabel_Username.innerHTML = "Username: <br>"
    main_content_change.append(toDoInput_Username)

    main_content_change.append(toDo_submit)
    toDo_submit.innerText = "Save"

    navigation_dif = true
}


/* ADD EVENT LISTENERS (for List) */
navigation_list.addEventListener("click", navlist)

function navlist()
{
    if (navigation_dif == false)
    {
        /* removal of original start content*/
        start_content.remove()
    }

    else
    {
        /* removal of other appended content*/
        const main_content_reset = document.getElementById("main_content_change")
        main_content_reset.remove()
    }

    /* creation of paragraph that enables the deletion */
    let main_content_change = document.createElement('p')
    main_content_change.class = "content"
    main_content_change.id = "main_content_change"
    
    main_content.append(main_content_change)

    toDoP.innerHTML = " <h1>Your ToDo's<h1/>"
    main_content_change.append(toDoP)

    navigation_dif = true
    
}
