import UI from "./redux/UI/reducer";
import chuck from "./redux/chuck/reducer";
import {responsiveStateReducer} from 'redux-responsive'

export default {
  UI,
  chuck,
  browser: responsiveStateReducer,
};
