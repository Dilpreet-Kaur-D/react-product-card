export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
         color: "gray",
    };
    let newStyles = {
        fontWeight: "bold"
    }
    let styles = {
        backgroundColor: "#e0c367",
        padding: "8px 0",
        width: "100%",
marginTop: "auto",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    }

    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}