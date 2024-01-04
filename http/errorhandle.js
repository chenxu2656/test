// import { useRouter } from "vue-router";
// const router = useRouter()
const handle402_3 = (errorCode,errorMsg)=>{
    if(localStorage.getItem('token')) {
        localStorage.removeItem('token')
    }
    const currentHref = window.location.pathname
    localStorage.setItem('prev',currentHref)
    window.location.href= '/admin/login/in'
    console.log(`%c ${errorCode}:${errorMsg}`,'background:#ff0012;color:#fff;height:30px;line-height:30px');
}
const handle405 = (err)=>{
    console.error('处理405错误');
    console.log(err);
    return err
}
const handleUndefineError = (err)=>{
    console.error(err);
}
export default (err)=>{
    let errorCode = err.response.status
    let errorMsg = err.response.data.err
    switch (errorCode) {
        case 403:
            handle402_3(errorCode,errorMsg);
            break;
        case 402:
            handle402_3(errorCode,errorMsg);
            break;
        case 405:
            handle405(err);
            break;
        default:
            handleUndefineError(err);
            break;
    }
    
}