import React, { useEffect, useState } from 'react'
import Axios from '../../config/Axios'
import $ from 'jquery'

function PdfForm({ id }) {
  const [downloadLink, setDownloadLink] = useState(null)
  useEffect(() => {
    if (downloadLink) {
      const a = document.createElement('a')
      a.setAttribute('href', downloadLink)
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'report.pdf')
      const aj = $(a)
      aj.appendTo('body')
      aj[0].click()
      aj.remove()
    }
  }, [downloadLink])
  const submitHandler = () => {
    Axios.post('/report/generate-pdf', {
      formid: id,
    })
      .then(({ data }) => {
        setDownloadLink(data.url)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <i
        style={{ fontSize: 20 }}
        className="fa-solid fa-file-pdf text-danger"
        onClick={submitHandler}
      ></i>
    </div>
  )
}

export default PdfForm
