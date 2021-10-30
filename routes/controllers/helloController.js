const hello = ({ response }) => {
    response.body = "Hello again!";
}

const secret = ({ response }) => {
    response.body = "This is the secret page!";
}
export { hello, secret };