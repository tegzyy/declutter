import { ExportJsonCsv } from 'react-export-json-csv';
import { AiOutlineDownload } from 'react-icons/ai';

const ExportCSV = ({headers, items}) => {

    const styles = {
        backgroundColor: "#F9F5FF",
        borderRadius: "12px",
        border: "1px solid #E9D7FE",
        padding: ".2rem .6rem",
        height: "40px",
        color: "#6941C6",
        fontWeight: "600",
        whiteSpace: "nowrap",
        fontSize: ".9rem"
    }
    
  return (
    <ExportJsonCsv style={styles} headers={headers} items={items}>Export <AiOutlineDownload style={{display: "inline", transform: "translateY(3px)"}} color='#6941C6' /></ExportJsonCsv>
  )
}

export default ExportCSV