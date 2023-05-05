class Home {
  get(req, res) {
    res.send(
      `<h1>Hello, ${req.user?.name ?? "User"}!</h1>
      <p>To see a usage guide of this API <a href="https://github.com/Lucas-Winicius/ecommerce#readme" target="_blank">click here</a>.</p>`
    );
  }
}

export default new Home();
