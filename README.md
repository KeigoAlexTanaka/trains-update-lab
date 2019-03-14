# Update Lab

_Introduction_

For this lab, you will build another React front end for the `trains` app, except this time you will include a form for Editing a train.  Feel free to use the demo as a guide, but don't try to follow it too strictly.  In the end, the core functionality of create, read, and udpate should be present.

### The Api
We'll be using the trains api.
The base url is `http://wdi_friends.draketalley.com/api`

You can access an api token at `http://wdi_friends.draketalley.com/login`

The following routes are supported:

- `GET /api/trains/` returns a list of all trains
- `GET /api/trains/user/` returns a list of the current user's trains
- `POST /api/trains/` creates a new train
- `PUT /api/trains/:id/` edits a train if it belongs to a logged in user
- `DELETE /api/trains/:id/` deletes a train if it belongs to the logged in user

Here is a JSON representation of a train:

```
{ 
	id: '8b8961d3-cd11-47d0-9753-1c526ce4edf8',
    name: 'GSL caboose',
    km_traveled: 1,
    train_type: 'caboose',
    user_id: '305b9d34-e959-4d5c-98a9-1cdefb0fa8d0',
    created_at: '2019-02-22T15:16:17.133Z',
    updated_at: '2019-02-22T15:16:17.133Z'
}
```

## The Task

Build a React front end (perhaps using react-router) that includes the following views:

- A Train List that lists all trains
- A New Train view that includes a form for creating a new train
- An Edit Train view that includes a form for updating an existing train

Good luck!

You should fork + clone this repo, run `create-react-app` and take it from there!