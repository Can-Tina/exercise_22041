export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const dtfRead = new Date(dateToFormatTimeMillis)
  let dtfDay = dtfRead.getDate()
  let dtfMonth = dtfRead.getMonth() + 1
  if(dtfDay < 10) {
    dtfDay = '0' + dtfDay
  }
  if(dtfMonth < 10) {
    dtfMonth = '0' + dtfMonth
  } //Ensures the format stays DD/MM/YYYY
  const dtfYear = dtfRead.getFullYear()
  const dtfDate = dtfDay + '/' + dtfMonth + '/' + dtfYear

  const sdRead = new Date(systemDateTimeMillis)
  let sdDay = sdRead.getDate()
  let sdMonth = sdRead.getMonth() + 1
  if(sdDay < 10) {
    sdDay = '0' + sdDay
  }
  if(sdMonth < 10) {
    sdMonth = '0' + sdMonth
  }
  const sdYear = sdRead.getFullYear()
  const sdDate = sdDay + '/' + sdMonth + '/' + sdYear

  if(dtfDate === sdDate) {
    console.log(dtfDate)
    return 'TODAY'
  }
  return dtfDate
};
