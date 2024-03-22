async function ghProfileFetch(username: string) {
  const response = await fetch("https://api.github.com/users/" + username)
  return await response.json()
}

export default ghProfileFetch
