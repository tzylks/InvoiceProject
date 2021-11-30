import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import InvoiceEntry from './component/IvoiceEntry'
import TextField from '@mui/material/TextField';
import MyDocument from './component/MyDocument'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = {
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(21,21,22,0.69)',
    },
    secondary: {
      main: '#76ff03',
    },
    background: {
      default: '#1f1f1f',
      paper: '#1f1f1f',
    },
    error: {
      main: '#FF00C8',
    },
    text: {
      primary: '#fff',
    },
    typography: {
      fontFamily: 'Permanent Marker, cursive'
    },
  }
}
const appliedTheme = createTheme(darkTheme);

function App() {
  const [invoice, setInvoice] = useState([]);
  const [time, setTime] = useState("09:00")
  const [time2, setTime2] = useState("17:00")
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

  const timeDiff = date2.getTime() - date1.getTime();
  let hoursConverted = timeDiff / 1000 / 60 / 60

  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <div style={{ position: 'absolute', top: '15%', left: '15%', display: 'flex', flexDirection: 'row', columnGap: '10px' }}>
          <div>
            <h2 style={{ color: '#A3F7BF' }}>Time-In</h2>
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
            <h2 style={{ color: '#FF4848' }}>Time-Out</h2>
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
              sx={{ width: 550, background: 'black' }}
            />
          </div>
          <Button variant="outlined" onClick={submitTimes} sx={{ mt: 10, background: 'white' }}>Submit</Button>
        </div>

        <InvoiceEntry invoice={invoice} deleteItem={deleteItem} result={result} />

        <div style={{ position: 'absolute', right: 700, top: 127 }}>
          <PDFDownloadLink document={<MyDocument invoice={invoice} />} fileName="somename.pdf" style={{ zIndex: '10000', textDecoration: 'none' }}>
            {({ loading, blob }) =>
              loading ? <h4 style={{ textDecoration: 'none', color: 'white' }}>Loading</h4> : <h4 style={{ textDecoration: 'none', color: 'red', zIndex: 100 }}>Download PDF</h4>
            }
          </PDFDownloadLink>
        </div>

      </ThemeProvider>
    </>
  );
}

export default App;
