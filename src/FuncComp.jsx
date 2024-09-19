
const FuncComp = (props) => {
    const {title, courseName} = props
    console.log(props)
    return(
        <div>
            <h2>This is Functional Component</h2>
            <h4>name: {title}</h4>
            <h4>CourseName: {courseName}</h4>
        {/* 
            - props are shorthand of properties.
            - it is used to transfer data from one component to another.
            - props is nothing but an object.
        */}
        </div>
    )
}

export default FuncComp