# todo-BE-Nodejs
Todo List application written in Node.js using typescript

TODO LIST APIs:

1.) /api/todolist (GET): 
    @Params: none
    @Body: none
    @Response: 
          {
            "message": "success",
            "error": false,
            "code": 200,
            "result": [
                {
                    "id": "2ac2a90f-ee08-4a93-8831-9dbb5ce8ef23",
                    "title": "t1"
                },
                {
                    "id": "8588e60a-d72e-46ea-a450-a7451b000c5d",
                    "title": "t1"
                }
            ]
          }

2.) /api/todolist (POST): 
    @Params: none
    @Body: {
      "title": @string,
      "description": @string
    }
    @Reponse: {
          "message": "Data added successfully.",
          "error": false,
          "code": 201,
          "result": [
              {
                  "id": "2ac2a90f-ee08-4a93-8831-9dbb5ce8ef23",
                  "title": "t1"
              },
              {
                  "id": "8588e60a-d72e-46ea-a450-a7451b000c5d",
                  "title": "t2"
              }
          ]
      }
