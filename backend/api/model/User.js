const {
  findUser,
  updateUserClient,
  updateStatus,
  updateLastSeen,
} = require("../function/user");

class User {
  constructor(client, id, status) {
    this.client = client;
    this.id = id;
    this.status = status;
  }

  async Connect() {
    const u = await findUser(this.id);
    if (u != "not") {
      await this.UpdateClient();
      await this.Status();
      await this.LastSeen();
      return u;
    } else {
      await updateUserClient("", this.id);
      await updateStatus("Offline", "");
      return "not";
    }
  }
  async Disconnect() {
    await this.LastSeen();
    await this.Status();
    return "Disconnected";
  }

  async UpdateClient() {
    return await updateUserClient(this.client, this.id);
  }

  async Status() {
    return await updateStatus(this.status, this.client);
  }

  async LastSeen() {
    return await updateLastSeen(this.client);
  }
}

module.exports = User;
