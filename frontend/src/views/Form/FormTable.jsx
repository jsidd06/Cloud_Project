import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Table, Button, Label } from 'reactstrap'
import Axios from '../../config/Axios'
import { formFields } from '../../fake-data'
import SearchBar from './SearchBar'
import ReactPaginate from 'react-paginate'
import { Slash } from 'react-feather'
import PdfForm from './PdfForm'

function FormTable() {
  const [userData, setUserData] = useState([])
  const [noOfPages, setNoOfPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [currentItem, setCurrentItem] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const submitHandler = () => {
    Axios.get('/get_form_data')
      .then((res) => {
        console.log(res.data)
        setUserData(res.data.reverse())
        toast('Now you see the Data')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    const endOffset = currentPage + itemsPerPage
    setCurrentItem(userData.slice(currentPage, endOffset))
    setNoOfPages(Math.ceil(userData.length / itemsPerPage))
  }, [currentPage, itemsPerPage, userData])
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length
    setCurrentPage(newOffset)
  }
  return (
    <>
      <Button className="mb-4 mt-4" onClick={submitHandler}>
        Check Your List Now{' '}
      </Button>
      {userData && (
        <>
          <Table className="table-hover-animation text-center " responsive>
            <thead>
              <SearchBar userData={userData} setUserData={setUserData} />
              <tr>
                {formFields.map((d) => {
                  return <th style={{ minWidth: 200 }}>{d.label}</th>
                })}
                <th>Pdf Download</th>
              </tr>
            </thead>
            <tbody>
              {currentItem.map((d) => {
                return (
                  <tr>
                    {formFields.map((f) => {
                      return <td>{d[f.name] || <Slash />}</td>
                    })}
                    <PdfForm id={d._id} />
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={'Back'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={userData.length / itemsPerPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </>
      )}
      <ToastContainer />
    </>
  )
}

export default FormTable
