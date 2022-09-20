export default ({ app }) => {
  const testCookie = app.$cookies.get('testCookie')
  console.log(testCookie)
}
