import Cookie from '../Cookie/Cookie'
import CustomFetch from '../../components/CustomFetch/CustomFetch.jsx'
const User = {
    getClaims : function(){
        return JSON.parse(atob(Cookie.getCookie("claims")))
     },
    getCompany : function(){

        return  CustomFetch.get('/api/auth/userdetails/getcompanybyuserasync')
    }
}

export default User;