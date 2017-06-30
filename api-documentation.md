#### Get Child List
  * GET to path /parent/{id}
    * Accepts: header = Authorization
    * Returns: Parent info and child list
#### Creates new child
  * POST /parent/{id}
    * Accepts: body = {name}, header = Authorization
    * Returns: child info
#### Delete Child
  * DELETE /parent/{id}/{childID}, header = Authorization
    * Returns: deleted:true
#### Get Child's Page
  * GET /parent/{id}/{childID}, header = Authorization
    * Returns: child w/ tasks and rewards
#### Create Task
  * POST /parent/{id}/{childID}/task
    * Accepts: body = {name, point_value}, header = Authorization
    * Returns: task info
#### Create Reward
  * POST /parent/{id}/{childID}/reward
    * Accepts: body = {name, point_value}, header = Authorization
    * Returns: reward info
#### Delete Task
  * DELETE parent/{id}/{childID}/task/{taskID}, header = Authorization
    * Returns: deleted:true
#### Delete Reward
  * DELETE parent/{id}/{childID}/reward/{taskID}, header = Authorization
    * Returns: deleted:true
#### Update Points
  * PUT parent/{id}/{childID}
    * Accepts: body = {points}, header = Authorization
    * Returns: child

## Auth Paths

#### Register
  * POST /uth/register
    * Accepts: body = {name, email, password}
    * Returns: {id, token}

#### Login
  * POST auth/login
    * Accepts: body = {email, password}
    * Returns: {id, token}
