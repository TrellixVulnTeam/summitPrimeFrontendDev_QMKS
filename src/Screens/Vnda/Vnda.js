import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, adminLogout } from '../../Redux/Actions'
import { isAdmin } from '../../Utils/callBackend'
import { AdminLogin } from '../Admin/AdminLogin'
import {VndaDashboard} from   './VndaDashboard'


export const Vnda = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.adminLogin.isAdmin)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        isAdmin()
            .then((response) => {
                if (response.isAuth) {
                    dispatch(adminLogin())
                    setLoading(false)
                }
                else {
                    setLoading(false)
                }
            })
            .catch((e) => {
                console.log(e);
                dispatch(adminLogout())
                // window.location.reload()
            })
    }, [dispatch])
    return (
        <div>
            {loading === true ? "" : (isAuthenticated === true ? <VndaDashboard /> : <AdminLogin />)}
        </div>
    )
}
