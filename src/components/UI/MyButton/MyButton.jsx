// style
import classes from './MyButton.module.css';

const MyButton = ({ ...props }) => {
    return (
        <button {...props} className={classes.btn}></button>
    )
}

export default MyButton