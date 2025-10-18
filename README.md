# @kt3k/dgrok

ngrok-like tunneling tool based on `deno --tunnel` command.

## Usage

Run:

```
deno -N -t jsr:@kt3k/dgrok 8000
```

It prints:

```shellsession
$ deno -t -N main.ts 8000
Visit https://console.deno.com/auth?code=<random_code> to authorize deploying your project.
✔ Authorization successful. Authenticated as Your Name

Selected organization 'Your org'
Selected application 'your-app'
You are connected to https://your-app--local.your-org.deno.net
```

Then the requests to https://your-app--local.your-org.deno.net are forwarded to http://localhost:8000 on your machine.

# License

MIT
