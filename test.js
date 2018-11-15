let GitHubApi = require("github");

  let github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com",
  });


  const {shell} = require('electron');

  const uploadGist = (title, text)  => {
    let files = {};
    files[title] = {"content": text};

    let request = {
      "public": true,
      "files": files
    }

    if (true) {
      console.log("Test");
    }

    github.gists.create(request, function(err, res){
        let url = res['html_url'];
        shell.openExternal(url)
    });
}
