export default (date) => {
  const year = date.getFullYear()
  const month = 'Jan Feb Mar Apr May June July Aug Sept Oct Nov Dec'.split(' ')[date.getMonth()]
  const day = date.getDate()
  return {year, month, day}
}
