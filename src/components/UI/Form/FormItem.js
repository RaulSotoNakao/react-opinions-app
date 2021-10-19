import './FormItem.css';
import Card from '../Card/Card.js'

function FormItem(props) {
    const classes = `form-item ${props.className ? props.className : ''}`

    return (
        <Card className={classes}>
            <label className="form-item-label">{props.label}:</label>
            <div className="form-item-input">{props.children}</div>
        </Card>
    );
}

export default FormItem;
