import PropTypes from 'prop-types'

export const Button = ({ text, color }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "steelblue",
}

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}
