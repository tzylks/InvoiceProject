import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import InvoiceEntry from './component/IvoiceEntry'
import TextField from '@mui/material/TextField';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './component/MyDocument'




function App() {
  const [invoice, setInvoice] = useState([]);
  const [time, setTime] = useState("22:00")
  const [time2, setTime2] = useState("21:00")
  const [memo, setMemo] = useState('')

  function strToMins(t) {
    const s = t.split(":");
    return Number(s[0]) * 60 + Number(s[1]);
  }

  function minsToStr(t) {
    return Math.trunc(t / 60) + ':' + ('00' + t % 60).slice(-2);
  }

  const result = minsToStr(strToMins(time) - strToMins(time2));

  let dateObj = new Date();
  let month = dateObj.getMonth() + 1; //months from 1-12
  let day = dateObj.getDate();
  let year = dateObj.getFullYear();

  let newDate = year + "-" + month + "-" + day;

  const date1 = new Date(`${newDate} ${time}`);
  const date2 = new Date(`${newDate} ${time2}`);
  console.log(date1);
  console.log(date2);


  const submitTimes = (e) => {
    const newData = {
      timein: `${newDate} ${time}`,
      timeout: `${newDate} ${time2}`,
      totalhours: hoursConverted,
      memo: memo
    }

    fetch('/the_invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    
    setInvoice([...invoice, newData])

  }

  useEffect(() => {
    fetch("/the_invoices")
      .then((r) => r.json())
      .then((data) => setInvoice(data))
  }, []);

  function deleteItem(id) {
    fetch(`/the_invoices/${id}`, {
      method: 'DELETE'
    })
    const deletedItem = invoice.filter(item => item.id !== id)
    setInvoice(deletedItem)
  }

  const timeDiff = date1.getTime() - date2.getTime();
  let hoursConverted = timeDiff / 1000 / 60 / 60

  

  return (
    <>
      <InvoiceEntry invoice={invoice} deleteItem={deleteItem} result={result} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <h2>Time-In</h2>
          <TextField
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
          />
        </div>
        <div>
          <h2>Time-Out</h2>
          <TextField
            type="time"
            value={time2}
            onChange={e => setTime2(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
          />
        </div>
        <div>
          <h2>Memo</h2>
          <TextField
            type="text"
            value={memo}
            onChange={e => setMemo(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            sx={{ width: 550 }}
          />
        </div>
        <Button variant="outlined" onClick={submitTimes}>Submit</Button>
      </div>
      <PDFViewer height="500" width="600">
        <MyDocument invoice={invoice} />
      </PDFViewer>
    </>
  );
}

export default App;
