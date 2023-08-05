import React from "react"
import ContentLoader from "react-content-loader"
// style
import classes from './Skeleton.module.css';

const MyLoader = (props) => (
    <ContentLoader
        className={classes.skeleton}
        speed={10}
        width={400}
        height={600}
        viewBox="0 0 400 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="8" y="-14" rx="3" ry="3" width="350" height="650" />
    </ContentLoader>
)

export default MyLoader