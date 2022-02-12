import React, { useEffect, useState } from 'react'
import Axios from '../../config/Axios'

function PdfForm({ id }) {
  const [downloadLink, setDownloadLink] = useState(null)
  useEffect(() => {
    if (downloadLink) {
      const a = document.createElement('a')
      a.href = downloadLink
      a.download = 'report.pdf'
      a.target = '_blank'
      a.click()
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
