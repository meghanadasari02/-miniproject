function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
                if (username == null || username == "") {
                    alert("Please enter the username.");
                    return false;
                }
                if (password == null || password == "") {
                    alert("Please enter the password.");
                    return false;
                }
                if (username == "123" && password == "456") {
                    alert("Login successful");
                    return false;
                }
                if (username != "123" && password != "456") {
                    alert("Login failed")
    }
}