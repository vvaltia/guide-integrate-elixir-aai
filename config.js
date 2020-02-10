var auth_url = "https://login.elixir-czech.org/oidc/authorize";
var token_url = "https://login.elixir-czech.org/oidc/token";
var user_url = "https://login.elixir-czech.org/oidc/userinfo";
var client_id = "";
var client_secret = "";
var redirect_uri = encodeURI("http://localhost/callback.html");
var response_type= "code";
var scope = "openid";
var grant_type = "authorization_code";

function reveal(div) {
    var x = document.getElementById(div);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
