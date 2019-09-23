const list = [
  {
    "_id": "5d846b32e230837fc11eab79",
    "link": "https://github.com/rhinogram/rhinofront/pull/3514",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-3309",
    "openDate": "2019-09-20T05:26:20.000Z",
    "prId": "3514",
    "raisedBy": "mahimaag",
    "reviewers": [
      
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d846b32e230837fc11eab7b",
    "link": "https://github.com/rhinogram/rhinofront/pull/3513",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinofront",
    "jiraId": "",
    "openDate": "2019-09-20T05:11:48.000Z",
    "prId": "3513",
    "raisedBy": "rhinogram-circleci",
    "reviewers": [
      
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d846b32e230837fc11eab83",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2931",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-3319-EMAILS",
    "openDate": "2019-09-19T19:35:39.000Z",
    "prId": "2931",
    "raisedBy": "thepug",
    "reviewers": [
      {
        "_id": "5d847247f9d59041def034b6",
        "username": "benbruning",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-19T23:42:50.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d846b32e230837fc11eab7d",
    "link": "https://github.com/rhinogram/rhinofront/pull/3512",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-3233",
    "openDate": "2019-09-19T15:15:48.000Z",
    "prId": "3512",
    "raisedBy": "marymhart",
    "reviewers": [
      {
        "_id": "5d847247f9d59041def034b2",
        "username": "juanfabrega",
        "state": "APPROVED",
        "body": "The change here looks good. Un a related note I'm starting to wonder at what point we just fold the `Log Out` button under the avatar dropdown menu. Header has looked like a bit of a frankenstein on mobile for a while. Will bring it up to product.",
        "date": "2019-09-19T20:18:49.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d834ae4e230837fc11e9e2a",
    "link": "https://github.com/rhinogram/rhinofront/pull/3510",
    "__v": 0,
    "closeDate": null,
    "comments": [
      {
        "_id": "5d834ae4f9d59041def0348e",
        "username": "mahimaag",
        "body": "I think we are displaying loader on button by dispatching this function. function and action type should be more relevant to this. Like `setSendInvitationLoading` or any other name. You can refer `setAppointmentLoading` in `userAction` file for same.",
        "date": "2019-09-19T09:03:45.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0348d",
        "username": "mahimaag",
        "body": "Remove commented code",
        "date": "2019-09-19T09:07:48.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0348c",
        "username": "mahimaag",
        "body": "same as above",
        "date": "2019-09-19T09:07:56.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0348b",
        "username": "mahimaag",
        "body": "For variable naming consistency, we should rename this variable.",
        "date": "2019-09-19T09:09:11.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0348a",
        "username": "mahimaag",
        "body": "variable name should be like `addMemberInProgress`",
        "date": "2019-09-19T09:23:06.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def03489",
        "username": "mahimaag",
        "body": "same as above",
        "date": "2019-09-19T09:23:15.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def03488",
        "username": "mahimaag",
        "body": "Is yarn.lock pushed by mistake?",
        "date": "2019-09-19T09:28:09.000Z"
      }
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-1212",
    "openDate": "2019-09-19T07:46:30.000Z",
    "prId": "3510",
    "raisedBy": "yogitattn",
    "reviewers": [
      {
        "_id": "5d834ae4f9d59041def03487",
        "username": "mahimaag",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-19T09:29:49.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d834ae4e230837fc11e9e30",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2929",
    "__v": 0,
    "closeDate": null,
    "comments": [
      {
        "_id": "5d847247f9d59041def034c2",
        "username": "abhicool957",
        "body": "```suggestion\r\n// Updates isInviteSent field as true and sends an invite email to the user\r\n```",
        "date": "2019-09-19T07:45:56.000Z"
      },
      {
        "_id": "5d847247f9d59041def034c1",
        "username": "thepug",
        "body": "Are there CCR accounts that have emails?  This migration should probably only update if `loginEmail` is empty.",
        "date": "2019-09-19T10:19:06.000Z"
      },
      {
        "_id": "5d847247f9d59041def034c0",
        "username": "thepug",
        "body": "😍 ",
        "date": "2019-09-19T10:23:50.000Z"
      },
      {
        "_id": "5d847247f9d59041def034bf",
        "username": "abhicool957",
        "body": "@thepug : I will get in touch with Ben to figure out that is there any ccr with loginEmail. Also what they want to login with email or username and let you know.",
        "date": "2019-09-19T11:36:15.000Z"
      },
      {
        "_id": "5d847247f9d59041def034be",
        "username": "benbruning",
        "body": "@abhicool957 @thepug there are a few csr's with emails so we should add a check for that.",
        "date": "2019-09-19T23:49:01.000Z"
      }
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-1211",
    "openDate": "2019-09-19T07:22:09.000Z",
    "prId": "2929",
    "raisedBy": "yogitattn",
    "reviewers": [
      {
        "_id": "5d847247f9d59041def034bd",
        "username": "mahimaag",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-19T08:50:27.000Z"
      },
      {
        "_id": "5d847247f9d59041def034bc",
        "username": "thepug",
        "state": "CHANGES_REQUESTED",
        "body": "Has rhinomatic been run against these changes?  I'm not sure if rhinomatic uses username or if it has switched to only using emails.",
        "date": "2019-09-19T10:26:37.000Z"
      },
      {
        "_id": "5d847247f9d59041def034bb",
        "username": "abhicool957",
        "state": "APPROVED",
        "body": "approved with minor comment. Also make sure indexes dropped for old columns and should be created for new column if used in where clause.",
        "date": "2019-09-19T10:35:46.000Z"
      },
      {
        "_id": "5d847247f9d59041def034ba",
        "username": "abhicool957",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-19T11:36:15.000Z"
      },
      {
        "_id": "5d847247f9d59041def034b9",
        "username": "benbruning",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-19T23:49:01.000Z"
      },
      {
        "_id": "5d847247f9d59041def034b8",
        "username": "benbruning",
        "state": "CHANGES_REQUESTED",
        "body": "Have 1 change request.",
        "date": "2019-09-19T23:51:10.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d831c40e230837fc11e8fd0",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2925",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-3245",
    "openDate": "2019-09-18T18:37:15.000Z",
    "prId": "2925",
    "raisedBy": "juanfabrega",
    "reviewers": [
      {
        "_id": "5d834ae4f9d59041def0349f",
        "username": "benbruning",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T18:39:58.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0349e",
        "username": "thepug",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T18:41:08.000Z"
      },
      {
        "_id": "5d834ae4f9d59041def0349d",
        "username": "alexgsummer",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T18:49:57.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d831c40e230837fc11e8fc4",
    "link": "https://github.com/rhinogram/rhinofront/pull/3508",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-3275",
    "openDate": "2019-09-18T17:37:03.000Z",
    "prId": "3508",
    "raisedBy": "marymhart",
    "reviewers": [
      {
        "_id": "5d834ae4f9d59041def0348f",
        "username": "alexgsummer",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T23:57:22.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d831c40e230837fc11e8fd2",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2924",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-3297",
    "openDate": "2019-09-18T17:21:18.000Z",
    "prId": "2924",
    "raisedBy": "whgoss",
    "reviewers": [
      {
        "_id": "5d8320b5f9d59041def03486",
        "username": "adlondon",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T17:58:40.000Z"
      },
      {
        "_id": "5d8320b5f9d59041def03485",
        "username": "alexgsummer",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T18:29:44.000Z"
      },
      {
        "_id": "5d8320b5f9d59041def03484",
        "username": "benbruning",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-18T18:53:45.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d81cf35e230837fc11e75c4",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2921",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinoapi",
    "jiraId": "",
    "openDate": "2019-09-17T15:15:15.000Z",
    "prId": "2921",
    "raisedBy": "shannhastings",
    "reviewers": [
      
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d81cf35e230837fc11e75bc",
    "link": "https://github.com/rhinogram/rhinofront/pull/3504",
    "__v": 0,
    "closeDate": null,
    "comments": [
      {
        "_id": "5d821a3cf9d59041def03444",
        "username": "adlondon",
        "body": "consider using shorthand `onClick={handleAssignClick}`",
        "date": "2019-09-17T13:10:25.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03443",
        "username": "adlondon",
        "body": "can this be required?",
        "date": "2019-09-17T13:11:20.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03442",
        "username": "adlondon",
        "body": "I dont think we need to have `false` included here, since that prop will evaluate to `falsey` if it is undefined",
        "date": "2019-09-17T13:12:23.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03441",
        "username": "adlondon",
        "body": "consider extracting this to a descriptive variable name declared at the top of the function for easier readability",
        "date": "2019-09-17T13:13:04.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03440",
        "username": "marymhart",
        "body": "Updated this to `const renderOfflineModal = checkForOnlineStatus === true && !this.checkMemberOnline(payload.toMemberId);`",
        "date": "2019-09-17T17:36:26.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def0343f",
        "username": "marymhart",
        "body": "updated this to `  handleClose={handleToggleModal}`  & updated `handleToggleModal` to\r\n```\r\n handleToggleModal = (value) => {\r\n    const showOfflineModal = value === true;\r\n    this.setState({ showOfflineModal });\r\n  }\r\n```",
        "date": "2019-09-17T17:43:37.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def0343e",
        "username": "alexgsummer",
        "body": "Double check with @adlondon but we're trying to keep the language the same on this and I think we went with `presence` as opposed to `online` / `offline`. This applies for variable / function names and not the text provided by the business for the user.",
        "date": "2019-09-17T17:57:53.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def0343d",
        "username": "alexgsummer",
        "body": "So this might be `checkMemberPresence` or similar...\r\n\r\nSame for variables below...",
        "date": "2019-09-17T18:00:15.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def0343c",
        "username": "marymhart",
        "body": "@alexgsummer @adlondon I made the following changes\r\n`AssignOfflineModal` => `ConfirmPresenceModal`\r\n`showOfflineModa`l => `showConfirmPresenceModal`\r\n`checkMemberOnline` => `checkMemberPresence`\r\n`checkOnlineStatus` => `checkForMemberPresence`",
        "date": "2019-09-17T19:02:33.000Z"
      }
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-3133",
    "openDate": "2019-09-17T12:53:09.000Z",
    "prId": "3504",
    "raisedBy": "marymhart",
    "reviewers": [
      {
        "_id": "5d821a3cf9d59041def0343b",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T13:10:26.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def0343a",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T13:11:20.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03439",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T13:12:23.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03438",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T13:13:04.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03437",
        "username": "marymhart",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T17:36:26.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03436",
        "username": "marymhart",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T17:43:38.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03435",
        "username": "alexgsummer",
        "state": "CHANGES_REQUESTED",
        "body": "",
        "date": "2019-09-17T18:01:37.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03434",
        "username": "marymhart",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-17T19:02:33.000Z"
      },
      {
        "_id": "5d821a3cf9d59041def03433",
        "username": "benbruning",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-17T19:09:00.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d8071e8e230837fc11e5b3f",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2916",
    "__v": 0,
    "closeDate": null,
    "comments": [
      
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-1128",
    "openDate": "2019-09-16T20:01:14.000Z",
    "prId": "2916",
    "raisedBy": "alexgsummer",
    "reviewers": [
      {
        "_id": "5d80b8d03712e24506702668",
        "username": "benbruning",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-16T20:22:13.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d7f2b38e230837fc11e43eb",
    "link": "https://github.com/rhinogram/rhinofront/pull/3498",
    "__v": 0,
    "closeDate": null,
    "comments": [
      {
        "_id": "5d80b8d03712e24506702667",
        "username": "alexgsummer",
        "body": "I noticed you're using a mix of language to describe the same thing:\r\n- user status\r\n- here now\r\n- online status (online, offline)\r\n- presence\r\n\r\nTry to stick to one and use that everywhere. I lean towards \"presence\" over the other ones. User status is too broad. \"here now\" isn't a descriptive variable name. Online / offline isn't exactly accurate.",
        "date": "2019-09-13T19:09:14.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702666",
        "username": "alexgsummer",
        "body": "Similar to my previous comment, `getUserPresence` might be a better function name depending on what you decide to call it. Don't feel like you need to permeate the \"here now\" thing because Pubnub calls it that.\r\n\r\nShould `getHereNow()` be apart of `setup`...or are there times `setup` is called and you don't want to fetch the \"here now\"?",
        "date": "2019-09-13T19:13:34.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702665",
        "username": "alexgsummer",
        "body": "Did you consider using the presence of the `onlineStatus` key to drive the visibility of the presence indicator? Rather than a separate `showOnlineStatus` boolean, if the `onlineStatus` key is provided, then show it...",
        "date": "2019-09-13T19:17:05.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702664",
        "username": "alexgsummer",
        "body": "This looks like seconds while the `typingTimeout` below looks like milliseconds. It can be helpful to add the units as a comment.\r\n```suggestion\r\nconst presenceTimeout = 600; // seconds\r\n```",
        "date": "2019-09-13T19:19:07.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702663",
        "username": "alexgsummer",
        "body": "You most likely want to return this promise so it can be chained if needed.\r\n```suggestion\r\n    return this.getPubNub().hereNow({\r\n```",
        "date": "2019-09-13T19:21:13.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702662",
        "username": "alexgsummer",
        "body": "These look like they can be `else if`'s...",
        "date": "2019-09-13T19:24:43.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702661",
        "username": "adlondon",
        "body": "👍",
        "date": "2019-09-16T15:23:26.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702660",
        "username": "adlondon",
        "body": "Dont want to fetch `getHereNow()` if `setup()` is being called on the patient or CSR experience. The issue I see with changing `getHereNow()` to `getUserPresence` is that we want to get a list of all of the users that are currently _subscribed_ to the PN channel, not really the user presence. Implication of `userPresence` in my mind is is that you are getting a singular users' presence, and that that presence will be returned whether or not they are subscribed. In this case, we only want a list of users who are currently subbed to that PN channel. ",
        "date": "2019-09-16T15:24:53.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265f",
        "username": "adlondon",
        "body": "We wanted the flexibility to determine whether or not we wanted to show that users presence status regardless of whether they are online or offline. Users can still have a status of being online or offline but we don't necessarily want to display it on their avatar. I suppose we could combine that logic in Rhinostyle.. You think its worth changing?",
        "date": "2019-09-16T15:45:05.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265e",
        "username": "adlondon",
        "body": "👍",
        "date": "2019-09-16T15:45:46.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265d",
        "username": "adlondon",
        "body": "👍",
        "date": "2019-09-16T15:45:50.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265c",
        "username": "adlondon",
        "body": "👍",
        "date": "2019-09-16T15:46:42.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265b",
        "username": "alexgsummer",
        "body": "Makes sense, thx for clarifying.",
        "date": "2019-09-16T17:37:19.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670265a",
        "username": "alexgsummer",
        "body": "Nope, what you said makes sense.",
        "date": "2019-09-16T17:54:39.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702659",
        "username": "benbruning",
        "body": "Is this really 600 minutes?",
        "date": "2019-09-16T19:32:22.000Z"
      }
    ],
    "component": "rhinofront",
    "jiraId": "RHIN-3132",
    "openDate": "2019-09-12T14:36:01.000Z",
    "prId": "3498",
    "raisedBy": "adlondon",
    "reviewers": [
      {
        "_id": "5d80b8d03712e24506702658",
        "username": "marymhart",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-12T17:58:10.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702657",
        "username": "alexgsummer",
        "state": "CHANGES_REQUESTED",
        "body": "",
        "date": "2019-09-13T19:25:12.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702656",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:23:26.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702655",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:24:53.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702654",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:45:06.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702653",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:45:46.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702652",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:45:50.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702651",
        "username": "adlondon",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T15:46:43.000Z"
      },
      {
        "_id": "5d80b8d03712e24506702650",
        "username": "alexgsummer",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T17:37:19.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670264f",
        "username": "alexgsummer",
        "state": "APPROVED",
        "body": "",
        "date": "2019-09-16T17:56:07.000Z"
      },
      {
        "_id": "5d80b8d03712e2450670264e",
        "username": "benbruning",
        "state": "COMMENTED",
        "body": "",
        "date": "2019-09-16T19:32:23.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  },
  {
    "_id": "5d7f2b38e230837fc11e43f5",
    "link": "https://github.com/rhinogram/rhinoapi/pull/2910",
    "__v": 0,
    "closeDate": null,
    "comments": [
      {
        "_id": "5d7f59057aace23e6b57a288",
        "username": "alexgsummer",
        "body": "You want to use the `logger` from rhinotilities instead of `console.log`.",
        "date": "2019-09-12T14:12:07.000Z"
      }
    ],
    "component": "rhinoapi",
    "jiraId": "RHIN-3129",
    "openDate": "2019-09-11T19:49:44.000Z",
    "prId": "2910",
    "raisedBy": "whgoss",
    "reviewers": [
      {
        "_id": "5d7f59057aace23e6b57a287",
        "username": "alexgsummer",
        "state": "CHANGES_REQUESTED",
        "body": "",
        "date": "2019-09-12T14:12:30.000Z"
      },
      {
        "_id": "5d7f59057aace23e6b57a286",
        "username": "alexgsummer",
        "state": "APPROVED",
        "body": "Let's create a ticket or some reminder to remove these once this ticket is complete.",
        "date": "2019-09-13T18:48:12.000Z"
      }
    ],
    "status": "open",
    "trt": "N/A"
  }
]

  export default list;