import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Individual({ item, deleteItem, result }) {
    return (
        <>
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="item">
                    {item.timein}
                </TableCell>
                <TableCell align="right">{item.timeout}</TableCell>
                <TableCell align="right">{item.totalhours}</TableCell>
                <TableCell align="right">{item.memo}</TableCell>
                <TableCell align="right">
                    <DeleteForeverIcon onClick={() => deleteItem(item.id)} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default Individual