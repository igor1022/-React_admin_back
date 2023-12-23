import jws from 'jws';
import priv_key from './keys/priv.js';
import pub_key from './keys/pub.js';

const get_access_token = async (user_id) => new Promise((resolve) => {
      jws.createSign({
        header: { alg: 'RS256' },
        privateKey: priv_key,
        payload: {user_id},
      }).on('done', (access_token) => {
        resolve(access_token);
      })
});

const verify_access_token = async (access_token) => {
    const result = jws.verify(access_token, 'RS256', pub_key);

    return result;
}

export {get_access_token, verify_access_token};