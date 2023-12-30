const { findClient } = require("../function/user");
const Notification = require("../mobile/models/routes/notifications");

class Notifications {
  constructor(client) {
    this.client = client;
  }
  async Get() {
    const c = await findClient(this.client);
    if (c != "not") {
      return await new Notification(c).Notification();
      // return "hello";
    } else {
      return "not";
    }
  }
}

module.exports = Notifications;
