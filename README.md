The notes app is a simple and efficient application designed for creating, managing, and organizing notes. Built on a backend powered by Node.js, Express.js, and MongoDB, the app allows users to perform CRUD operations seamlessly.

Users can create a new note by specifying a title, content, and an optional image. The application supports the storage of diverse and dynamic information, catering to a variety of note-taking needs. Each note is automatically timestamped, providing a record of its creation and any subsequent updates.

The app offers functionality to retrieve all notes, as well as to access a specific note by providing its unique identifier. Users can update existing notes by modifying their title, content, or image. Additionally, notes can be deleted, giving users complete control over their digital notespace.

The use of MongoDB as the underlying database ensures flexibility in handling unstructured data, while Mongoose simplifies interactions by providing a schema-based approach. The backend's RESTful API, powered by Express.js, offers a user-friendly and intuitive way to interact with the notes app programmatically.

Overall, this notes app provides a straightforward and scalable solution for users seeking a versatile and efficient platform for managing their notes, whether for personal or professional use.




Here is the documentation for the CRUD operations using the Postman collection provided:

1. Create Note
Request
Name: create note
Method: POST
URL: http://localhost:3000/note
Body:
Mode: Raw (JSON)
Raw Body:


{
    "title": "cycling",
    "content": "cycling with friends",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-Qcc9q9SS2MZzSJMOtlgdfsDjBm5szgorGEd_buQTc8A8LMTVN65cfNKDucp3tSvL0g&usqp=CAU"
}


2. Retrieve Notes
Request
Name: retrieve notes
Method: GET
URL: http://localhost:3000/note/65931156e117c1b03b08c27f
Response: (Not specified in the provided Postman collection)
3. Retrieve Single Note
Request
Name: retrieve single note
Method: GET
URL: http://localhost:3000/notes/
Response: (Not specified in the provided Postman collection)


4. Update Note by ID
Request
Name: Update by note id
Method: PUT
URL: http://localhost:3000/note/65931156e117c1b03b08c27f
Body:
Mode: Form-Urlencoded
Data:
key: title, value: Cycling, type: text
Response: (Not specified in the provided Postman collection)


5. Delete Note by ID
Request
Name: Delete by note id
Method: DELETE
URL: http://localhost:3000/note/6592b90713b94c8b6b907da6
Body: Mode: Raw (Not used)
Response: (Not specified in the provided Postman collection)
