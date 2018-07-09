new Vue({
  el: '#root',
  data: {
    token: '',
    domain: '',
    showTokenError: false,
    showDomainError: false,
    errorMsg: '',
    resultUrl: '',
    resultMd: '',
    showResult: false
  },
  methods: {
    onFileChange(e) {
      this.showResult = false
      let observable = qiniu.upload(e.target.files[0], e.target.files[0].name, this.token)
      observable.subscribe((res) => {
      }, (error) => {
        this.errorMsg = error.message
      }, (res) => {
        this.resultUrl = `${this.domain}/${res.key}`
        this.resultMd = `![${res.key.split('.')[0]}](${this.domain}/${res.key})`
        this.showResult = true
      })
    },
    onTokenBlur() {
      console.log('!!!!')
      this.showTokenError = this.token === '' || this.token === null
      if(this.showTokenError) {
        return
      }
      localStorage.setItem('token', this.token)
    },
    onDomainBlur() {
      console.log('???')
      this.showDomainError = this.domain === '' || this.token === null
      if(this.showDomainError) {
        return
      }
      localStorage.setItem('domain', this.domain)
    }
  },
  created() {
    this.token = localStorage.getItem('token')
    this.domain = localStorage.getItem('domain')
  }
})