//var DeviceInfo = require("react-native-device-info");
import {
    Platform
} from "react-native";
import api from '../api/api'
import color from "./color";
import values from './values'
let config = {}
config.app_version = '0.0.1'
config.domain = ""
export {
    api,
    color,
    values,
    config
}