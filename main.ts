async function main() {
  const port = +Deno.args[0];

  if (!port) {
    console.error(
      `Usage: deno -N jsr:@kt3k/dgrok <port>`,
    );
    Deno.exit(1);
    return;
  }

  Deno.serve({ port: 0 }, async (req) => {
    const method = req.method;
    const pathname = new URL(req.url).pathname
    const resp = await fetch(`http://localhost:${port}${pathname}`, {
      method,
      body: req.body,
      headers: req.headers,
    });
    console.log(resp.status, method.padEnd(4), pathname);
    return resp;
  });
}

main();
