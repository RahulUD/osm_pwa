import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} from './../redux/reExport'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
