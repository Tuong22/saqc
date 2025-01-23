/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import $ from 'jquery'
import moment from 'moment'
import Swal from 'sweetalert2'
import Bowser from 'bowser'
const OBJECT = {
  String: '[object String]'
}
export const FORMATS = {
  defaultDate: 'dd/MM/yyyy',
  defaultTime: 'dd/MM/yyyy HH:mm:ss',
  time: 'DD/MM/YYYY HH:mm',
  date: 'DD/MM/YYYY',
  month: 'MM/YYYY',
  number: '#,##0',
  currency: '#,##0 đ',
  percent: '#0 %'
}
export const VALIDATION_RULES = {
  required: [{ type: 'required', message: 'Trường bắt buộc', trim: true }]
}
export const DEFAULT_OPTIONS = {
  selectBox: {
    valueExpr: 'id',
    displayExpr: 'name',
    searchExpr: ['name', 'code'],
    searchMode: 'contains',
    sort: ['name'],
    minSearchLength: 2,
    showDataBeforeSearch: true,
    showClearButton: true,
    searchEnabled: true,
    validationMessageMode: 'auto'
  },
  userSelectBox: {
    valueExpr: 'id',
    displayExpr: 'fullInfo',
    searchExpr: ['searchData'],
    searchMode: 'contains',
    sort: ['fullInfo'],
    minSearchLength: 2,
    showDataBeforeSearch: true,
    showClearButton: true,
    searchEnabled: true,
    validationMessageMode: 'auto'
  },
  radioGroup: {
    valueExpr: 'value',
    displayExpr: 'name',
    layout: 'horizontal',
    validationMessageMode: 'auto'
  },
  date: {
    showClearButton: true,
    useMaskBehavior: true,
    displayFormat: FORMATS.defaultDate
  },
  textArea: {
    autoResizeEnabled: true,
    minheight: 120
    // height: 120
  },
  currency: {
    format: '#,##0 đ'
  },
  percent: {
    format: '#0 %',
    step: 0.01,
    max: 1,
    min: 0.01
  },
  email: {
    mode: 'email'
  },
  readOnly: {
    readOnly: true
  }
}
export const TIME_FORMAT = 'DD/MM/YYYY HH:mm'
export const DATE_FORMAT = 'DD/MM/YYYY'
export const MONTH_FORMAT = 'MM/YYYY'
export const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy'
export const GUID_EMPTY = '00000000-0000-0000-0000-000000000000'
export const REGEX_INVALID_FILEFOLDER_NAME_CHARS = /[""#%*:<>?/\|\t\r\n]/g
export const BASE_URL = process.env.BASE_URL
export function replaceInvalidFileFolderChars(filename) {
  return filename.replace(REGEX_INVALID_FILEFOLDER_NAME_CHARS, '-')
}
export const ALLOW_EXTENSIONS =
  '.pdf, .pptx, .ppt, .xlsx, .xls, .docx, .doc, .gif, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg'
export const IMAGE_EXTENSIONS =
  '.gif, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg'
export const getAvatarUrl = (userId) => {
  return `${BASE_URL}/_apis/user/avatar?id=${userId || GUID_EMPTY}`
}
export function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}
export function goBack() {
  if (
    window.history.length > 1 &&
    document.referrer &&
    document.referrer != location.href &&
    document.referrer.indexOf('/Account/Login') == -1
  ) {
    window.history.go(-1)
  } else {
    window.location.href = `${BASE_URL}/Doc`
  }
}
export const getExtension = (filename) =>
  filename.substr(filename.lastIndexOf('.')).toLowerCase()
export const getFileNameWithoutExtension = (filename) =>
  filename.substr(0, filename.lastIndexOf('.'))
export const hasPreviewFile = (fileName) =>
  ALLOW_EXTENSIONS.includes(getExtension(fileName))
export const getDateTimeString = (date) => {
  if (!date) {
    return ''
  }
  const convertDate = moment(date)
  return convertDate.isValid() ? convertDate.format(TIME_FORMAT) : ''
}
export const getDateString = (date) => {
  if (!date) {
    return ''
  }
  const convertDate = moment(date)
  return convertDate.isValid() ? convertDate.format(DATE_FORMAT) : ''
}
export const getNumberString = (value) => {
  if (!value) {
    return ''
  }
  return !Number.isNaN(value) ? parseInt(value, 10).toLocaleString() : value
}
export const isString = (obj) => {
  return Object.prototype.toString.call(obj) === OBJECT.String
}
export const getInitialName = (value) => {
  const initials = []
  const names = value.trim().split(' ')
  for (let i = 0; i < names.length - 1; i++) {
    initials.push(names[i].substring(0, 1).toUpperCase())
  }
  initials.push(names[names.length - 1])
  return initials.join('.')
}
export const getCurrentDevice = () => {
  try {
    const deviceWidth = $(window).width()
    if (deviceWidth <= 767) {
      // mobile from iphone 6 plus
      return 'mobile'
    } else if (deviceWidth > 767 && deviceWidth <= 991) {
      // tablet portait or mobile landscape
      return 'tablet'
    } else if (deviceWidth > 991) {
      // for desktop or tablet landscape
      return 'desktop'
    }
  } catch (e) {
    return 'desktop'
  }
}
export const getBrowserName = () => {
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.getBrowserName()
}
export const setKeyCookie = (key, name, value, hour) => {
  const cname = `${key}-${btoa(name)}`
  const cvalue = btoa(value)
  const expire = new Date()
  expire.setTime(expire.getTime() + hour * 60 * 60 * 1000)
  document.cookie = `${cname}=${cvalue} ;expires=${expire.toUTCString()}`
}
export const getKeyCookie = (key, name) => {
  const cname = `${key}-${btoa(name)}`
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(cname) === 0) {
      const value = c.substring(cname.length + 1, c.length)
      return atob(value)
    }
  }
  return ''
}
export function showAlert(message, icon) {
  Swal.fire({
    icon: icon || 'error',
    text: message
  })
}
export function showError(error) {
  if (!error) {
    return
  }
  console.log(error)
  const message = [
    `<span><b>Trang:</b> ${window.location.pathname}</span>`,
    `<span><b>Thời gian:</b> ${moment().format(TIME_FORMAT)}</span>`,
    `<span><b>Đường dẫn:</b> ${error.responseURL}</span>`
  ].join('<br>')
  Swal.fire({
    icon: 'error',
    title: error.statusText,
    html: message
  })
}

export function showAxiosError(error) {
  if (!error) {
    return
  }
  if (error.response) {
    console.log(error.response)
  } else if (error.request) {
    console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
  const message = [
    `<span><b>Đường dẫn:</b> ${error.config.url}</span>`,
    `<span><b>Thời gian:</b> ${moment().format(TIME_FORMAT)}</span>`
  ].join('<br>')
  Swal.fire({
    icon: 'error',
    title:
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
    html: message
  })
}
export function getInprogressTask(currentUser, step, group) {
  if (!step || step.group !== group || !step.tasks || step.tasks.length === 0) {
    return null
  }
  return step.tasks.find(
    (task) => task.assignToId == currentUser.id && task.startDate
  )
}
export const blockContent = () => {
  KTApp.block('#kt_content')
}
export const unblockContent = () => {
  KTApp.unblock('#kt_content')
}
export const block = (target) => {
  KTApp.block(target)
}
export const unblock = (target) => {
  KTApp.unblock(target)
}
export function nonUniCode(str) {
  if (!str) {
    return ''
  }
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  return str
}
