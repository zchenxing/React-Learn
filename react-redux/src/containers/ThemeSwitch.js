import { connect } from 'react-redux'
import ThemeSwich from '../components/ThemeSwitch'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({
                type: 'CHANGE_COLOR',
                themeColor: color
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ThemeSwich)