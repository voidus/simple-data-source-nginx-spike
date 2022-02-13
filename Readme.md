Illustrating how we can have authenticated data access without implementing authentication logic in
javascript.

This currently uses username `foo` and password `bar`, but in prod nginx would validate credentials
against a central authentication server.

With a layout like this, the application (`app.js`) can get the data from
`window.seawatch_status_data` (name is open for debate) and we can maintain the data by editing
`data.js`.

## How to run

```bash
docker run --rm -p 5000:80 \
    -v "$PWD/nginx/server.conf:/etc/nginx/conf.d/server.conf:ro" \
    -v "$PWD/nginx/htpasswd:/etc/nginx/htpasswd:ro" \
    -v "$PWD/srv:/srv:ro" \
    docker.io/nginx
```

Visit `http://localhost:5000` for the result.
