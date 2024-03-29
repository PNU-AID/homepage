import axios from 'axios';

export async function postSignup(
  nickname: string,
  email: string,
  password: string
) {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/register',
      data: {
        nick_name: nickname,
        email,
        password,
      },
    });
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      return true;
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function postLogin(email: string, password: string) {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function postLogout() {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/logout',
      withCredentials: true,
    });
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      return true;
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
