class Home {
  get(req, res) {
    res.send("Hello, World!");
  }
}

export default new Home();
