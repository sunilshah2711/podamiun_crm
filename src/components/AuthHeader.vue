<script>
export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.code) {
    // for Node.js Express back-end
    console.log(user.code);
    return { "x-access-token": user.code };
  } else {
    return {};
  }
}
</script>
