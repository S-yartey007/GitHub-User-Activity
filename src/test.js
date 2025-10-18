import { getUserActivity } from "./api.js";
import { fetchUserActivity } from "./api.js";

/* getUserActivity("S-yartey007")
  .then((data) => console.log(data.slice(0, 3))) // show first 3 events
  .catch((err) => console.error(err.message));
 */
fetchUserActivity("S-yartey007")
  .then((data) => console.log(data.slice(0, 3))) // show first 3 events
  .catch((err) => console.error(err.message));
