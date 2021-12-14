const stream = require("getstream");

const addClientSide = async () => {

  // from your dashboard
  const appKey
  const appSecret

  // add your appKey and secret from your dashboard
  const client = stream.connect(appKey, appSecret);

  // your user_id (string)
  const user_id

  // token for your client-side
  const token = client.createUserToken(user_id)

  // add your user. Comment this code out after running it
  // const userResponse = await client.user(user_id).create({
  //   name: 'stephen h',
  //   occupation: 'spftware'
  // })

  // example activity
  const activity1 = {
    // these three fields are mandatory
    actor: `SU+${user_id}`,
    object: 1,
    verb: 'post',
    // these fields are custom
    text: "hey this is my first post!"
  }

  // feel free to add whatever dummy data you would like
  const activity2 = {
    // these three fields are mandatory
    actor: `SU+${user_id}`,
    object: 1,
    verb: 'post',
    // these fields are custom
    text: 'second!'
  }

  const activity3 = {
    // these three fields are mandatory
    actor: `SU+${user_id}`,
    object: 1,
    verb: 'post',
    // these fields are custom
    text: 'third!'
  }

  // A feed takes two arguments, feed group and ID. You may need to create a feed group in your dashboard 
  const feed = client.feed('user', user_id)

  // add the activities to the feed
  const activityResponse = await feed.addActivities([activity1, activity2, activity3])

};

addClientSide().then((r) => console.log(r));
