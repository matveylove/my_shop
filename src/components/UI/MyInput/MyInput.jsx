// style
import classes from './MyInput.module.css';

const MyInput = ({ children, ...props }) => {
    return (
        <input {...props} className={classes.input} />
    )
}

export default MyInput