/createFolder

* http://localhost:3000/api/folders/createFolder/
* POST
* req.body:
    * {name: "name of the folder", description: "description of the folder" }

/addLink

* http://localhost:3000/api/folders/addLink/
* POST
* req.body:
    * { url: "http://theurl.com", description: "link description", searchTerm: "search term used", folder_id: _id of the folder to add link to }

/returnUserFolders/:userId

* http://localhost:3000/api/folders/returnUserFolders/5b5aab9c2c944f37094ec0ac
* GET
* Parameter is the _id for the user

/addFolderToUser

* http://localhost:3000/api/folders/addFolderToUser
* POST
* req.body:
    * { folder_id: _id of folder, user_id: _id of user }

/deleteFolder/5b5b494ae6e88a4d53696153

* http://localhost:3000/api/folders/deleteFolder/:folderId
* DELETE
* Parameter is the _id for the folder
** still have issue removing the folder from users

/deleteUserFolder/5b5b494ae6e88a4d53696152/5b5b494ae6e88a4d53696154

* http://localhost:3000/api/folders/deleteUserFolder/:userId/folderId
* DELETE
* first parameter if the _id for the user
* second parameter is the _id for the folder

/deleteLink

* http://localhost:3000/api/folders/deleteLink
* POST
* req.body:
    * { folder_id: _id of the folder, url: "url to be deleted"}




/returnAllFolders/

* http://localhost:3000/api/folders/returnAllFolders/
* GET
* no parameters