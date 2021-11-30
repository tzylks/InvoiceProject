import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Individual from './Individual';


function InvoiceEntry({ invoice, deleteItem, result }) {

    const mapped = invoice.map((item) => {
        return (
            <Individual item={item} deleteItem={deleteItem} result={result} />
        )
    })

    return (
        <>
            <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                <Table sx={{ position: 'absolute', top: '25%', left: '15%', marginTop: '5%', width: '70%', boxShadow: 'none', border: '1px solid white' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Time In</TableCell>
                            <TableCell align="right">Time Out</TableCell>
                            <TableCell align="right">Total Hours</TableCell>
                            <TableCell align="right">Memo</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mapped}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default InvoiceEntry