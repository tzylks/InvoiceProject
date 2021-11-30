import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InvoiceEntry from './IvoiceEntry'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        height: '200vh'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    collection: {
        display: 'flex',
        flexDirection: 'column',
    }
});

const MyDocument = ({ invoice }) => (
    <Document title="Invoice">
        <Page style={styles.page}>
            <View style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Text style={{fontSize: '55px', marginLeft: '35%'}}>
                    Invoice
                </Text>
                {invoice.map(item => {
                    return(
                        <>
                            <Text style={{display: 'flex', flexDirection: 'column', fontSize: '15px', padding: 20}}>
                            <p>{item.id}) Time in: </p><span style={{padding: 100}}>{item.timein} Timeout: {item.timeout} Total Hours: {item.totalhours}</span>
                            </Text>
                        
                       
                        </>
                    )
                })}
               
            </View>
        </Page>
    </Document>
);

export default MyDocument