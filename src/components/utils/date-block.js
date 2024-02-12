const createMonth = (numberOfMonth) => {
  switch (numberOfMonth) {
    case 0: {
      return 'января'
    }
    case 1: {
      return 'февраля'
    }
    case 2: {
      return 'марта'
    }
    case 3: {
      return 'апреля'
    }
    case 4: {
      return 'мая'
    }
    case 5: {
      return 'июня'
    }
    case 6: {
      return 'июля'
    }
    case 7: {
      return 'августа'
    }
    case 8: {
      return 'сентября'
    }
    case 9: {
      return 'октября'
    }
    case 10: {
      return 'ноября'
    }
    case 11: {
      return 'декабря'
    }
    default:
      return ''
  }
}

export const DateBlock = (time) => {
  const date = new Date(time)
  const day = date.getDate()
  const month = createMonth(date.getMonth())
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${day} ${month} в ${hours}:${formatMinutes}`
}

export const DateBlockSell = (time) => {
  const date = new Date(time)
  const month = createMonth(date.getMonth())
  const year = date.getFullYear()
  return `${month} ${year}`
}

export const DateBlockRev = (time) => {
  const date = new Date(time)
  const day = date.getDate()
  const month = createMonth(date.getMonth())
  return `${day} ${month}`
}
