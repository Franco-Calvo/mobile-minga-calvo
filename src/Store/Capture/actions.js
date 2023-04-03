import { createAction } from "@reduxjs/toolkit";

let captureState = createAction(
    'captureState',
    ({ buttonState}) => {
        return {
            payload: { 
                checked: buttonState,
             }
        }
    }
)
const actions = { captureState }
export default actions