import React, { useState, useEffect } from 'react'

function CartReceive(props) {
  const [memberInfo, setMemberInfo] = useState([])
  const [memberChecked, setMemberChecked] = useState(false)

  // function getMemberInfo() {
  //   const newMemberInfo = []

  //   fetch('http://localhost:3000/api/delivery-addr', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'applications/json',
  //       body: JSON.stringify.data,
  //     },
  //   }).then(() => {
  //     const a = JSON.stringify.data
  //     newMemberInfo = JSON.parse(a)
  //   })
  // }

  // //
  // useEffect(() => {
  //   const a = JSON.stringify([{ id: 1, name: 'Bunny', level: 1 }])

  //   localStorage.setItem('memberLogInInfo', a)
  // })

  // useEffect(() => {
  //   getMemberInfo()
  // })

  // const loginInfo = JSON.parse(localStorage.getItem('memberLogInInfo'))

  return (
    <>
      <div className="col-7">
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">收件人資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner order-data">
            <input
              type="checkbox"
              name="member-data"
              id="member-data"
              className="mb-3"
            />
            <label for="member-data" className="mb-3">
              同會員資料
            </label>
            <br />
            <label for="order-name" className="mb-3">
              姓名：
            </label>
            <input
              type="text"
              name="order"
              id="order-name"
              className="mb-3"
              required
            />
            <br />
            <label for="order-phone" className="mb-3">
              電話：
            </label>
            <input
              type="tel"
              name="order"
              id="order-phone"
              className="mb-3"
              required
            />
            <br />
            <label for="order-port" className="mb-3">
              郵遞區號：
            </label>
            <input type="text" name="order" id="order-port" className="mb-3" />
            <br />
            <label for="order-addr" className="mb-3">
              地址：
            </label>
            <input type="text" name="order" id="order-addr" className="mb-3" />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartReceive
