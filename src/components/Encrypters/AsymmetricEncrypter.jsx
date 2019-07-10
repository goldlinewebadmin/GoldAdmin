
const AsymmetricEncrypter = {


  loadPublicKey: async function (username) {
      const response  = await fetch('/api/auth/account/GetPublicKey?username=' + username)

      if (response.ok) {

          const json  = await response.json()

          return json["key"]
      }
      else {

        alert("Hubó Un Error En El Servidor")
      }
  },

  encryptInput: function(input, publicKey) {

        const encrypt = new window.JSEncrypt();

        encrypt.setPublicKey(publicKey);

        const result  = encrypt.encrypt(input);

        return result;
      }
}

export default AsymmetricEncrypter;