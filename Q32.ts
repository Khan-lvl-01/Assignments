const current_users : string[] = ['john', 'alice', 'bob', 'emma', 'mIke'];
const new_users : string[] = ['eMma', 'mike', 'peter', 'sarah', 'jessica'];
for (const new_username of new_users) {
  const is_duplicate = current_users.some((current_username) =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (is_duplicate) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}