import HybridEncrypter from '../../components/Encrypters/HybridEncrypter.jsx'
import User from "../../components/User/User.jsx";
import PrivateIp from '../../components/PrivateIp/PrivateIp.jsx'

const CustomFetch = {


    post : async function(url, body, username){
        if(!username){
            username = User.getClaims().UserName
        }
        PrivateIp.loadIp(null)
        var resultEncrypt
        await HybridEncrypter.encryptInput(PrivateIp.ip, username)

        .then(response => {
            resultEncrypt = response
               
                
        })
        return await fetch(url, {

            method: 'POST',

            headers: {
                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'Symmetric-Key-Encrypted': resultEncrypt.cipherSymmetricKey,
                'private-ip': resultEncrypt.cipherText
            },
            body: JSON.stringify(body)
            
            })
    },
    get : async function(url,username){
        if(!username){
            username = User.getClaims().UserName
        }
        PrivateIp.loadIp(null)
        var resultEncrypt
        await HybridEncrypter.encryptInput(PrivateIp.ip, username)

        .then(response => {
            resultEncrypt = response
               
                
        })

       

        return await fetch(url, {

            method: 'Get',

            headers: {
                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'Symmetric-Key-Encrypted': resultEncrypt.cipherSymmetricKey,
                'private-ip': resultEncrypt.cipherText
            },
            
            })
            
    }
}

export default CustomFetch;