// src/api.js
export async function getUserActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Node.js",
        Accept: "application/vnd.github.v3+json",
        Connection: "keep-alive",
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.log("No activity found for this user.");
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error fetching user activity:", error.message);
    return [];
  }
}
