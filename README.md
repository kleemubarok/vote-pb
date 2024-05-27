# pb-voe

Simple emoticon vote using Bun, Pocketbase (backend), sveltekit, and Daisyui


## Developing

Once you've created a project and installed dependencies with `bun install` 

Run your own Pocketbase server then import this collection:

```json
[
    {
        "id": "l0xrhpz509gwki3",
        "name": "emojis",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "xqqwgkat",
                "name": "emoji",
                "type": "text",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "pzum0cne",
                "name": "votes",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": null,
                    "displayFields": null
                }
            }
        ],
        "indexes": [],
        "listRule": "",
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "_pb_users_auth_",
        "name": "users",
        "type": "auth",
        "system": false,
        "schema": [
            {
                "id": "users_name",
                "name": "name",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "svbqhnhu",
                "name": "avatarUrl",
                "type": "url",
                "system": false,
                "required": false,
                "options": {
                    "exceptDomains": null,
                    "onlyDomains": null
                }
            }
        ],
        "indexes": [],
        "listRule": "id = @request.auth.id",
        "viewRule": "id = @request.auth.id",
        "createRule": "",
        "updateRule": "id = @request.auth.id",
        "deleteRule": "id = @request.auth.id",
        "options": {
            "allowEmailAuth": true,
            "allowOAuth2Auth": true,
            "allowUsernameAuth": true,
            "exceptEmailDomains": null,
            "manageRule": null,
            "minPasswordLength": 8,
            "onlyEmailDomains": null,
            "requireEmail": false
        }
    }
]
```

Setup your own .env from .env.example

start a development server:

```bash
bun --bun dev

```

## Building

To create a production version of your app:

```bash
bun run build
```
