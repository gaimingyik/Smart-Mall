import reques from '@/utils/reques'

export const picGea = () => {
  return reques.get('/captcha/image')
}

export const getMsg = (captchaCode, captchaKey, mobile) => {
  return reques.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const getSms = (mobile, smsCode) => {
  return reques.post('/passport/login', {
    form: {
      partyData: {},
      isParty: false,
      mobile,
      smsCode
    }
  })
}
