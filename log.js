const ROBLOSECURITY = "ur roblox cookie"; // dont share
const USER_ID = "ur roblox userid";

async function log() {
  const res = await fetch(`https://groups.roblox.com/v1/users/${USER_ID}/groups/roles`, {
    headers: { "Cookie": `.ROBLOSECURITY=${ROBLOSECURITY}` },
  });
  const data = await res.json();

  for (const group of data.data) {
    const id = group.group.id.toString();
    const name = group.group.name;
    console.log(`${name} (${id})`);
  }
}

log();
